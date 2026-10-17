import json
import shutil
import subprocess
import sys
import tempfile
import time
from pathlib import Path

import requests

HERE = Path(__file__).parent
IMAGES = HERE / "images"
SHOPIFY = shutil.which("shopify") or "shopify"

PRODUCTS = [
    {
        "handle": "custom-mug",
        "title": "Custom mug",
        "productType": "Mug",
        "templateSuffix": "personalized",
        "price": "18.00",
        "descriptionHtml": "<p>11 oz ceramic mug with your words and your photo. Microwave and dishwasher safe.</p>",
        "options": {"Color": ["White", "Black"]},
        "images": {"White": "mug-white.jpg", "Black": "mug-black.jpg"},
        "extra_images": ["mug-lifestyle.jpg"],
    },
    {
        "handle": "custom-t-shirt",
        "title": "Custom t-shirt",
        "productType": "T-shirt",
        "templateSuffix": "personalized",
        "price": "28.00",
        "descriptionHtml": "<p>Soft combed-cotton tee with a print that doesn't crack in the wash.</p>",
        "options": {"Color": ["White", "Black", "Sand"], "Size": ["S", "M", "L", "XL"]},
        "images": {"White": "tshirt-white.jpg", "Black": "tshirt-black.jpg", "Sand": "tshirt-sand.jpg"},
    },
    {
        "handle": "custom-tote-bag",
        "title": "Custom tote bag",
        "productType": "Tote bag",
        "templateSuffix": "personalized",
        "price": "16.00",
        "compareAtPrice": "20.00",
        "descriptionHtml": "<p>15 x 16 in heavy canvas tote with reinforced handles, printed your way.</p>",
        "options": {"Color": ["Natural", "Black"]},
        "images": {"Natural": "tote-natural.jpg", "Black": "tote-black.jpg"},
    },
    {
        "handle": "gift-box",
        "title": "Gift box",
        "productType": "Packaging",
        "price": "5.00",
        "descriptionHtml": "<p>Kraft box with a ribbon, sized for a mug or a folded tee.</p>",
        "images": {None: "gift-box.jpg"},
    },
    {
        "handle": "greeting-card",
        "title": "Greeting card",
        "productType": "Packaging",
        "price": "3.00",
        "descriptionHtml": "<p>Card with an envelope. Write your message in the order notes.</p>",
        "images": {None: "greeting-card.jpg"},
    },
    {
        "handle": "tissue-paper-and-ribbon",
        "title": "Tissue paper and ribbon",
        "productType": "Packaging",
        "price": "4.00",
        "descriptionHtml": "<p>Three sheets of tissue paper and a satin ribbon to wrap the gift.</p>",
        "images": {None: "tissue-paper-and-ribbon.jpg"},
    },
]


class StoreError(RuntimeError):
    pass


def gql(store, query, variables=None, mutation=False):
    with tempfile.TemporaryDirectory() as tmp:
        query_file = Path(tmp) / "query.graphql"
        query_file.write_text(query, encoding="utf-8")
        command = [SHOPIFY, "store", "execute", "-s", store, "--json", "--no-color", "--query-file", str(query_file)]
        if variables is not None:
            variables_file = Path(tmp) / "variables.json"
            variables_file.write_text(json.dumps(variables, ensure_ascii=False), encoding="utf-8")
            command += ["--variable-file", str(variables_file)]
        if mutation:
            command.append("--allow-mutations")
        result = subprocess.run(command, capture_output=True, text=True, encoding="utf-8", timeout=180)

    body = "\n".join(
        line for line in result.stdout.splitlines() if not line.startswith('{"type":"progress"')
    ).strip()
    try:
        response = json.loads(body)
    except json.JSONDecodeError:
        raise StoreError(f"unexpected CLI output:\n{result.stdout}\n{result.stderr}") from None
    if "error" in response:
        raise StoreError(json.dumps(response["error"], ensure_ascii=False))
    if response.get("errors"):
        raise StoreError(json.dumps(response["errors"], ensure_ascii=False))
    data = response.get("data", response)
    for value in data.values():
        if isinstance(value, dict) and value.get("userErrors"):
            raise StoreError(json.dumps(value["userErrors"], ensure_ascii=False))
    return data


def upload(store, path, resource, mime="image/jpeg"):
    staged = {"filename": path.name, "mimeType": mime, "httpMethod": "POST", "resource": resource}
    if resource == "VIDEO":
        staged["fileSize"] = str(path.stat().st_size)
    data = gql(
        store,
        """mutation($input: [StagedUploadInput!]!) {
          stagedUploadsCreate(input: $input) {
            stagedTargets { url resourceUrl parameters { name value } }
            userErrors { field message }
          }
        }""",
        {"input": [staged]},
        mutation=True,
    )
    target = data["stagedUploadsCreate"]["stagedTargets"][0]
    fields = {p["name"]: p["value"] for p in target["parameters"]}
    with path.open("rb") as content:
        sent = requests.post(target["url"], data=fields, files={"file": (path.name, content, mime)}, timeout=120)
    sent.raise_for_status()
    return target["resourceUrl"]


def product_id(store, handle):
    data = gql(store, "query($q: String!) { products(first: 1, query: $q) { nodes { id } } }", {"q": f"handle:{handle}"})
    nodes = data["products"]["nodes"]
    return nodes[0]["id"] if nodes else None


def wait_for_media(store, pid):
    for _ in range(30):
        data = gql(store, "query($id: ID!) { product(id: $id) { media(first: 10) { nodes { id alt status } } } }", {"id": pid})
        media = data["product"]["media"]["nodes"]
        if all(m["status"] == "READY" for m in media):
            return media
        if any(m["status"] == "FAILED" for m in media):
            raise StoreError(f"media failed on {pid}")
        time.sleep(2)
    raise StoreError(f"media not ready on {pid}")


def media_input(store, p):
    media = [
        {"originalSource": upload(store, IMAGES / file, "IMAGE"), "mediaContentType": "IMAGE",
         "alt": f"{p['title']} {color}" if color else p["title"]}
        for color, file in p["images"].items()
    ]
    media += [
        {"originalSource": upload(store, IMAGES / file, "IMAGE"), "mediaContentType": "IMAGE", "alt": p["title"]}
        for file in p.get("extra_images", [])
    ]
    return media


def link_variant_media(store, pid, p, variants, ready):
    by_color = {m["alt"].removeprefix(p["title"]).strip(): m["id"] for m in ready}
    links = [
        {"variantId": v["id"], "mediaIds": [by_color[o["value"]]]}
        for v in variants
        for o in v["selectedOptions"]
        if o["name"] == "Color" and o["value"] in by_color
    ]
    if links:
        gql(
            store,
            """mutation($id: ID!, $media: [ProductVariantAppendMediaInput!]!) {
              productVariantAppendMedia(productId: $id, variantMedia: $media) { userErrors { field message } }
            }""",
            {"id": pid, "media": links},
            mutation=True,
        )


def refresh_media(store, p, pid):
    current = gql(
        store,
        "query($id: ID!) { product(id: $id) { media(first: 20) { nodes { id } } variants(first: 50) { nodes { id selectedOptions { name value } } } } }",
        {"id": pid},
    )["product"]
    old = [m["id"] for m in current["media"]["nodes"]]
    if old:
        gql(
            store,
            """mutation($id: ID!, $ids: [ID!]!) {
              productDeleteMedia(productId: $id, mediaIds: $ids) { deletedMediaIds mediaUserErrors { field message } }
            }""",
            {"id": pid, "ids": old},
            mutation=True,
        )
    gql(
        store,
        """mutation($id: ID!, $media: [CreateMediaInput!]!) {
          productCreateMedia(productId: $id, media: $media) { media { id } mediaUserErrors { field message } }
        }""",
        {"id": pid, "media": media_input(store, p)},
        mutation=True,
    )
    ready = wait_for_media(store, pid)
    if p.get("options"):
        link_variant_media(store, pid, p, current["variants"]["nodes"], ready)
    print("photos refreshed:", p["handle"], len(ready), "images")


def create_product(store, p, publication):
    existing = product_id(store, p["handle"])
    if existing:
        if "--refresh-photos" in sys.argv:
            refresh_media(store, p, existing)
        else:
            print("already exists:", p["handle"])
        return

    options = p.get("options", {})
    media = media_input(store, p)
    product_input = {
        "title": p["title"],
        "handle": p["handle"],
        "descriptionHtml": p["descriptionHtml"],
        "productType": p["productType"],
        "vendor": "Inkly",
        "status": "ACTIVE",
    }
    if p.get("templateSuffix"):
        product_input["templateSuffix"] = p["templateSuffix"]
    if options:
        product_input["productOptions"] = [{"name": n, "values": [{"name": v} for v in vals]} for n, vals in options.items()]

    created = gql(
        store,
        """mutation($product: ProductCreateInput!, $media: [CreateMediaInput!]) {
          productCreate(product: $product, media: $media) {
            product { id variants(first: 1) { nodes { id } } }
            userErrors { field message }
          }
        }""",
        {"product": product_input, "media": media},
        mutation=True,
    )["productCreate"]["product"]

    price = {"price": p["price"], "inventoryItem": {"tracked": False}}
    if p.get("compareAtPrice"):
        price["compareAtPrice"] = p["compareAtPrice"]

    if options:
        combos = [[]]
        for name in options:
            combos = [c + [(name, v)] for c in combos for v in options[name]]
        variants = [{**price, "optionValues": [{"optionName": n, "name": v} for n, v in c]} for c in combos]
        saved = gql(
            store,
            """mutation($id: ID!, $variants: [ProductVariantsBulkInput!]!) {
              productVariantsBulkCreate(productId: $id, variants: $variants, strategy: REMOVE_STANDALONE_VARIANT) {
                productVariants { id selectedOptions { name value } }
                userErrors { field message }
              }
            }""",
            {"id": created["id"], "variants": variants},
            mutation=True,
        )["productVariantsBulkCreate"]["productVariants"]
    else:
        saved = gql(
            store,
            """mutation($id: ID!, $variants: [ProductVariantsBulkInput!]!) {
              productVariantsBulkUpdate(productId: $id, variants: $variants) {
                productVariants { id selectedOptions { name value } }
                userErrors { field message }
              }
            }""",
            {"id": created["id"], "variants": [{**price, "id": created["variants"]["nodes"][0]["id"]}]},
            mutation=True,
        )["productVariantsBulkUpdate"]["productVariants"]

    ready = wait_for_media(store, created["id"])
    if options:
        link_variant_media(store, created["id"], p, saved, ready)

    gql(
        store,
        """mutation($id: ID!, $input: [PublicationInput!]!) {
          publishablePublish(id: $id, input: $input) { userErrors { field message } }
        }""",
        {"id": created["id"], "input": [{"publicationId": publication}]},
        mutation=True,
    )
    print("created:", p["handle"], len(saved), "variants")


def online_store(store):
    data = gql(store, "{ publications(first: 20) { nodes { id name } } }")
    for publication in data["publications"]["nodes"]:
        if publication["name"] == "Online Store":
            return publication["id"]
    raise StoreError("Online Store publication not found")


SHOP_IMAGES = {
    "inkly-hero-mug.jpg": "Plain white ceramic mug on a grey background",
    "inkly-gift-wrap.jpg": "Kraft paper, twine and a small wrapped gift on marble",
    "inkly-hero-cutout.jpg": "Plain white ceramic mug on lemon yellow paper",
}


def upload_shop_images(store):
    for filename, alt in SHOP_IMAGES.items():
        existing = gql(
            store,
            "query($q: String!) { files(first: 10, query: $q) { nodes { ... on MediaImage { image { url } } } } }",
            {"q": f"filename:{filename}"},
        )
        urls = [(n.get("image") or {}).get("url", "") for n in existing["files"]["nodes"]]
        if any(url.split("?")[0].rsplit("/", 1)[-1] == filename for url in urls):
            print("already uploaded:", filename)
            continue
        source = upload(store, IMAGES / filename, "FILE", "image/png" if filename.endswith(".png") else "image/jpeg")
        gql(
            store,
            """mutation($files: [FileCreateInput!]!) {
              fileCreate(files: $files) { files { id } userErrors { field message } }
            }""",
            {"files": [{"originalSource": source, "contentType": "IMAGE", "filename": filename, "alt": alt}]},
            mutation=True,
        )
        print("uploaded:", filename)


BUILD_VIDEOS = {
    "01-3d-preview.mp4": "Live 3D preview of a personalized mug, tee and tote",
    "02-personalizer-to-cart.mp4": "Personalizing a mug and adding it to the cart",
    "03-cart-drawer.mp4": "Cart drawer with add-ons and the free-shipping ribbon",
    "04-speed-before-after.mp4": "The slow and the fixed store loading side by side",
    "05-erp-sync-app.mp4": "Inkly ERP Sync: an order going from Shopify to the ERP and back",
}

# Shopify can't replace a video file's content, so a re-recorded set goes up under new names
# and templates/collection.build-notes.json points to them.
BUILD_VIDEO_SUFFIX = "-v2"

BUILD_PAGE = {
    "handle": "how-this-store-was-built",
    "title": "How this store was built",
    "templateSuffix": "build-notes",
    "descriptionHtml": "<p>The five pieces of the Inkly demo store, the problem each one solves and the code behind it.</p>",
}


def upload_build_videos(store, folder):
    for filename, alt in BUILD_VIDEOS.items():
        path = folder / filename
        stored = f"{path.stem}{BUILD_VIDEO_SUFFIX}{path.suffix}"
        existing = gql(
            store,
            "query($q: String!) { files(first: 10, query: $q) { nodes { ... on Video { filename } } } }",
            {"q": f"filename:{path.stem}{BUILD_VIDEO_SUFFIX}"},
        )
        if any(node.get("filename") == stored for node in existing["files"]["nodes"]):
            print("already uploaded:", stored)
            continue
        source = upload(store, path, "VIDEO", "video/mp4")
        gql(
            store,
            """mutation($files: [FileCreateInput!]!) {
              fileCreate(files: $files) { files { id } userErrors { field message } }
            }""",
            {"files": [{"originalSource": source, "contentType": "VIDEO", "alt": alt, "filename": stored}]},
            mutation=True,
        )
        print("uploaded:", stored)


# Built as a collection with its own template: the store CLI's scopes cover products and
# collections but not online store pages.
def create_build_page(store, publication):
    existing = gql(store, "query($q: String!) { collections(first: 1, query: $q) { nodes { id } } }", {"q": f"handle:{BUILD_PAGE['handle']}"})
    if existing["collections"]["nodes"]:
        print("already exists: collection", BUILD_PAGE["handle"])
        return
    data = gql(
        store,
        """mutation($input: CollectionInput!) {
          collectionCreate(input: $input) { collection { id handle } userErrors { field message } }
        }""",
        {"input": BUILD_PAGE},
        mutation=True,
    )
    collection = data["collectionCreate"]["collection"]
    gql(
        store,
        """mutation($id: ID!, $input: [PublicationInput!]!) {
          publishablePublish(id: $id, input: $input) { userErrors { field message } }
        }""",
        {"id": collection["id"], "input": [{"publicationId": publication}]},
        mutation=True,
    )
    print("build notes created:", "/collections/" + collection["handle"])


def build_menu(store):
    menus = gql(store, "{ menus(first: 20) { nodes { id handle title } } }")["menus"]["nodes"]
    main_menu = next((m for m in menus if m["handle"] == "main-menu"), None)
    if not main_menu:
        print("main-menu not found, skipped")
        return
    items = [{"title": "Home", "type": "FRONTPAGE", "url": "/"}]
    for title, handle in [("Mugs", "custom-mug"), ("T-shirts", "custom-t-shirt"), ("Tote bags", "custom-tote-bag")]:
        pid = product_id(store, handle)
        if pid:
            items.append({"title": title, "type": "PRODUCT", "resourceId": pid})
    items.append({"title": "Shop all", "type": "CATALOG", "url": "/collections/all"})
    gql(
        store,
        """mutation($id: ID!, $title: String!, $items: [MenuItemUpdateInput!]!) {
          menuUpdate(id: $id, title: $title, items: $items) { menu { id } userErrors { field message } }
        }""",
        {"id": main_menu["id"], "title": main_menu["title"], "items": items},
        mutation=True,
    )
    print("main menu built")


def check_store(store):
    data = gql(store, "{ shop { currencyCode } shopLocales { locale primary } }")
    primary = next((l["locale"] for l in data["shopLocales"] if l["primary"]), "?")
    if data["shop"]["currencyCode"] != "USD" or not primary.startswith("en"):
        print(f"WARNING: store is {data['shop']['currencyCode']} / {primary}; the demo content assumes USD / English.")


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    videos = next((a.split("=", 1)[1] for a in sys.argv[1:] if a.startswith("--videos=")), None)
    if len(args) != 1:
        sys.exit("usage: python demo/seed.py <store>.myshopify.com [--refresh-photos] [--videos=<folder with the build videos>]")
    store = args[0]
    check_store(store)
    publication = online_store(store)
    for p in PRODUCTS:
        create_product(store, p, publication)
    upload_shop_images(store)
    if videos:
        upload_build_videos(store, Path(videos))
    create_build_page(store, publication)
    build_menu(store)


if __name__ == "__main__":
    main()
