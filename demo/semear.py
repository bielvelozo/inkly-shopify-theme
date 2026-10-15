import json
import shutil
import subprocess
import sys
import tempfile
import time
from pathlib import Path

import requests

PASTA = Path(__file__).parent
IMAGENS = PASTA / "imagens"
SHOPIFY = shutil.which("shopify") or "shopify"
ESCOPOS = "write_products,write_files,write_publications,write_online_store_navigation,read_locales"

PRODUTOS = [
    {
        "handle": "caneca-personalizada",
        "title": "Caneca personalizada",
        "productType": "Caneca",
        "templateSuffix": "personalizado",
        "price": "59.90",
        "descriptionHtml": "<p>Caneca de cerâmica de 325 ml com a sua frase e a sua foto. Vai ao micro-ondas e à lava-louças.</p>",
        "opcoes": {"Cor": ["Branca", "Preta"]},
        "imagens": {"Branca": "caneca-branca.jpg", "Preta": "caneca-preta.jpg"},
    },
    {
        "handle": "camiseta-personalizada",
        "title": "Camiseta personalizada",
        "productType": "Camiseta",
        "templateSuffix": "personalizado",
        "price": "89.90",
        "descriptionHtml": "<p>Camiseta de algodão penteado com estampa que não racha na lavagem.</p>",
        "opcoes": {"Cor": ["Branca", "Preta", "Areia"], "Tamanho": ["P", "M", "G", "GG"]},
        "imagens": {"Branca": "camiseta-branca.jpg", "Preta": "camiseta-preta.jpg", "Areia": "camiseta-areia.jpg"},
    },
    {
        "handle": "ecobag-personalizada",
        "title": "Ecobag personalizada",
        "productType": "Ecobag",
        "templateSuffix": "personalizado",
        "price": "49.90",
        "compareAtPrice": "59.90",
        "descriptionHtml": "<p>Ecobag de lona crua de 38 x 42 cm, alça reforçada, estampa do seu jeito.</p>",
        "opcoes": {"Cor": ["Natural", "Preta"]},
        "imagens": {"Natural": "ecobag-natural.jpg", "Preta": "ecobag-preta.jpg"},
    },
    {
        "handle": "caixa-de-presente",
        "title": "Caixa de presente",
        "productType": "Embalagem",
        "price": "14.90",
        "descriptionHtml": "<p>Caixa kraft com laço, do tamanho certo para caneca ou camiseta dobrada.</p>",
        "imagens": {None: "caixa-de-presente.jpg"},
    },
    {
        "handle": "cartao-com-mensagem",
        "title": "Cartão com mensagem",
        "productType": "Embalagem",
        "price": "6.90",
        "descriptionHtml": "<p>Cartão com envelope. Escreva a mensagem nas observações do pedido.</p>",
        "imagens": {None: "cartao-com-mensagem.jpg"},
    },
    {
        "handle": "papel-de-seda-e-laco",
        "title": "Papel de seda e laço",
        "productType": "Embalagem",
        "price": "9.90",
        "descriptionHtml": "<p>Três folhas de papel de seda e laço de cetim para embrulhar o presente.</p>",
        "imagens": {None: "papel-de-seda-e-laco.jpg"},
    },
]


class ErroLoja(RuntimeError):
    pass


def gql(loja, query, variaveis=None, mutacao=False):
    with tempfile.TemporaryDirectory() as tmp:
        arquivo_query = Path(tmp) / "query.graphql"
        arquivo_query.write_text(query, encoding="utf-8")
        comando = [SHOPIFY, "store", "execute", "-s", loja, "--json", "--no-color", "--query-file", str(arquivo_query)]
        if variaveis is not None:
            arquivo_vars = Path(tmp) / "vars.json"
            arquivo_vars.write_text(json.dumps(variaveis, ensure_ascii=False), encoding="utf-8")
            comando += ["--variable-file", str(arquivo_vars)]
        if mutacao:
            comando.append("--allow-mutations")
        saida = subprocess.run(comando, capture_output=True, text=True, encoding="utf-8", timeout=180)

    corpo = "\n".join(
        linha for linha in saida.stdout.splitlines() if not linha.startswith('{"type":"progress"')
    ).strip()
    try:
        resposta = json.loads(corpo)
    except json.JSONDecodeError:
        raise ErroLoja(f"resposta inesperada do CLI:\n{saida.stdout}\n{saida.stderr}") from None
    if "error" in resposta:
        raise ErroLoja(json.dumps(resposta["error"], ensure_ascii=False))
    if resposta.get("errors"):
        raise ErroLoja(json.dumps(resposta["errors"], ensure_ascii=False))
    dados = resposta.get("data", resposta)
    for valor in dados.values():
        if isinstance(valor, dict) and valor.get("userErrors"):
            raise ErroLoja(json.dumps(valor["userErrors"], ensure_ascii=False))
    return dados


def subir(loja, arquivo, recurso):
    dados = gql(
        loja,
        """mutation($input: [StagedUploadInput!]!) {
          stagedUploadsCreate(input: $input) {
            stagedTargets { url resourceUrl parameters { name value } }
            userErrors { field message }
          }
        }""",
        {"input": [{"filename": arquivo.name, "mimeType": "image/jpeg", "httpMethod": "POST", "resource": recurso}]},
        mutacao=True,
    )
    alvo = dados["stagedUploadsCreate"]["stagedTargets"][0]
    campos = {p["name"]: p["value"] for p in alvo["parameters"]}
    with arquivo.open("rb") as conteudo:
        envio = requests.post(alvo["url"], data=campos, files={"file": (arquivo.name, conteudo, "image/jpeg")}, timeout=120)
    envio.raise_for_status()
    return alvo["resourceUrl"]


def produto_existe(loja, handle):
    dados = gql(loja, "query($q: String!) { products(first: 1, query: $q) { nodes { id } } }", {"q": f"handle:{handle}"})
    nos = dados["products"]["nodes"]
    return nos[0]["id"] if nos else None


def esperar_midia(loja, produto_id):
    for _ in range(30):
        dados = gql(
            loja,
            "query($id: ID!) { product(id: $id) { media(first: 10) { nodes { id alt status } } } }",
            {"id": produto_id},
        )
        midias = dados["product"]["media"]["nodes"]
        if all(m["status"] == "READY" for m in midias):
            return midias
        if any(m["status"] == "FAILED" for m in midias):
            raise ErroLoja(f"mídia falhou em {produto_id}")
        time.sleep(2)
    raise ErroLoja(f"mídia não ficou pronta em {produto_id}")


def criar_produto(loja, p, publicacao):
    if produto_existe(loja, p["handle"]):
        print("já existe:", p["handle"])
        return

    opcoes = p.get("opcoes", {})
    midia = [
        {"originalSource": subir(loja, IMAGENS / arquivo, "IMAGE"), "mediaContentType": "IMAGE",
         "alt": f"{p['title']} {cor}" if cor else p["title"]}
        for cor, arquivo in p["imagens"].items()
    ]
    entrada = {
        "title": p["title"],
        "handle": p["handle"],
        "descriptionHtml": p["descriptionHtml"],
        "productType": p["productType"],
        "vendor": "Rabisco",
        "status": "ACTIVE",
    }
    if p.get("templateSuffix"):
        entrada["templateSuffix"] = p["templateSuffix"]
    if opcoes:
        entrada["productOptions"] = [{"name": nome, "values": [{"name": v} for v in valores]} for nome, valores in opcoes.items()]

    dados = gql(
        loja,
        """mutation($product: ProductCreateInput!, $media: [CreateMediaInput!]) {
          productCreate(product: $product, media: $media) {
            product { id variants(first: 1) { nodes { id } } }
            userErrors { field message }
          }
        }""",
        {"product": entrada, "media": midia},
        mutacao=True,
    )
    produto = dados["productCreate"]["product"]
    preco = {"price": p["price"], "inventoryItem": {"tracked": False}}
    if p.get("compareAtPrice"):
        preco["compareAtPrice"] = p["compareAtPrice"]

    if opcoes:
        nomes = list(opcoes)
        combinacoes = [[]]
        for nome in nomes:
            combinacoes = [c + [(nome, v)] for c in combinacoes for v in opcoes[nome]]
        variantes = [{**preco, "optionValues": [{"optionName": n, "name": v} for n, v in c]} for c in combinacoes]
        criadas = gql(
            loja,
            """mutation($id: ID!, $variants: [ProductVariantsBulkInput!]!) {
              productVariantsBulkCreate(productId: $id, variants: $variants, strategy: REMOVE_STANDALONE_VARIANT) {
                productVariants { id selectedOptions { name value } }
                userErrors { field message }
              }
            }""",
            {"id": produto["id"], "variants": variantes},
            mutacao=True,
        )["productVariantsBulkCreate"]["productVariants"]
    else:
        criadas = gql(
            loja,
            """mutation($id: ID!, $variants: [ProductVariantsBulkInput!]!) {
              productVariantsBulkUpdate(productId: $id, variants: $variants) {
                productVariants { id selectedOptions { name value } }
                userErrors { field message }
              }
            }""",
            {"id": produto["id"], "variants": [{**preco, "id": produto["variants"]["nodes"][0]["id"]}]},
            mutacao=True,
        )["productVariantsBulkUpdate"]["productVariants"]

    midias = esperar_midia(loja, produto["id"])
    if opcoes:
        por_cor = {m["alt"].removeprefix(p["title"]).strip(): m["id"] for m in midias}
        ligacoes = [
            {"variantId": v["id"], "mediaIds": [por_cor[o["value"]]]}
            for v in criadas
            for o in v["selectedOptions"]
            if o["name"] == "Cor" and o["value"] in por_cor
        ]
        gql(
            loja,
            """mutation($id: ID!, $media: [ProductVariantAppendMediaInput!]!) {
              productVariantAppendMedia(productId: $id, variantMedia: $media) { userErrors { field message } }
            }""",
            {"id": produto["id"], "media": ligacoes},
            mutacao=True,
        )

    gql(
        loja,
        """mutation($id: ID!, $input: [PublicationInput!]!) {
          publishablePublish(id: $id, input: $input) { userErrors { field message } }
        }""",
        {"id": produto["id"], "input": [{"publicationId": publicacao}]},
        mutacao=True,
    )
    print("criado:", p["handle"], len(criadas), "variantes")
    return produto["id"]


def loja_online(loja):
    dados = gql(loja, "{ publications(first: 20) { nodes { id name } } }")
    for pub in dados["publications"]["nodes"]:
        if pub["name"] == "Online Store":
            return pub["id"]
    raise ErroLoja("publicação Online Store não encontrada")


def subir_banner(loja):
    existe = gql(loja, '{ files(first: 1, query: "filename:rabisco-hero.jpg") { nodes { id } } }')
    if existe["files"]["nodes"]:
        print("banner já existe")
        return
    origem = subir(loja, IMAGENS / "rabisco-hero.jpg", "FILE")
    gql(
        loja,
        """mutation($files: [FileCreateInput!]!) {
          fileCreate(files: $files) { files { id } userErrors { field message } }
        }""",
        {"files": [{"originalSource": origem, "contentType": "IMAGE", "filename": "rabisco-hero.jpg",
                    "alt": "Caneca, camiseta e ecobag personalizadas sobre a mesa"}]},
        mutacao=True,
    )
    print("banner enviado")


def montar_menu(loja):
    menus = gql(loja, "{ menus(first: 20) { nodes { id handle title } } }")["menus"]["nodes"]
    principal = next((m for m in menus if m["handle"] == "main-menu"), None)
    if not principal:
        print("menu main-menu não encontrado, pulei")
        return
    itens = [{"title": "Início", "type": "FRONTPAGE", "url": "/"}]
    for titulo, handle in [("Canecas", "caneca-personalizada"), ("Camisetas", "camiseta-personalizada"),
                           ("Ecobags", "ecobag-personalizada")]:
        produto_id = produto_existe(loja, handle)
        if produto_id:
            itens.append({"title": titulo, "type": "PRODUCT", "resourceId": produto_id})
    itens.append({"title": "Todos os produtos", "type": "CATALOG", "url": "/collections/all"})
    gql(
        loja,
        """mutation($id: ID!, $title: String!, $items: [MenuItemUpdateInput!]!) {
          menuUpdate(id: $id, title: $title, items: $items) { menu { id } userErrors { field message } }
        }""",
        {"id": principal["id"], "title": principal["title"], "items": itens},
        mutacao=True,
    )
    print("menu principal montado")


def conferir_idioma(loja):
    locais = gql(loja, "{ shopLocales { locale primary } }")["shopLocales"]
    primario = next((l["locale"] for l in locais if l["primary"]), "?")
    if primario.lower() != "pt-br":
        print(f"ATENÇÃO: o idioma principal da loja é {primario}. Troque para Português (Brasil) em "
              "Configurações > Idiomas para o tema aparecer em português.")


def main():
    if len(sys.argv) != 2:
        sys.exit("uso: python demo/semear.py <loja>.myshopify.com")
    loja = sys.argv[1]
    publicacao = loja_online(loja)
    for p in PRODUTOS:
        criar_produto(loja, p, publicacao)
    subir_banner(loja)
    montar_menu(loja)
    conferir_idioma(loja)


if __name__ == "__main__":
    main()
