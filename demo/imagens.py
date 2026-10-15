import subprocess
import tempfile
from pathlib import Path

import numpy as np
from PIL import Image

PASTA = Path(__file__).parent
SAIDA = PASTA / "imagens"
CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
FONTES = (
    "https://fonts.googleapis.com/css2?family=Pacifico&family=Space+Mono:wght@700"
    "&family=Bricolage+Grotesque:wght@700;800&display=block"
)

DEFS = """
<defs>
  <linearGradient id="MockupCeramic" x1="0" x2="1">
    <stop offset="0" stop-color="#000" stop-opacity=".24"/><stop offset=".16" stop-color="#000" stop-opacity=".04"/>
    <stop offset=".32" stop-color="#fff" stop-opacity=".32"/><stop offset=".46" stop-color="#fff" stop-opacity="0"/>
    <stop offset=".82" stop-color="#000" stop-opacity=".06"/><stop offset="1" stop-color="#000" stop-opacity=".28"/>
  </linearGradient>
  <linearGradient id="MockupFabric" x1="0" x2="1">
    <stop offset="0" stop-color="#000" stop-opacity=".14"/><stop offset=".4" stop-color="#fff" stop-opacity=".08"/>
    <stop offset=".6" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".16"/>
  </linearGradient>
  <radialGradient id="Fundo" cx=".5" cy=".38" r=".75">
    <stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#eee5d8"/>
  </radialGradient>
</defs>
"""

CANECA = (
    '<ellipse cx="290" cy="528" rx="190" ry="20" fill="#000" opacity=".1"/>'
    '<path d="M424 236c78-6 106 32 106 84s-32 92-112 88" fill="none" stroke="#000" stroke-opacity=".16" stroke-width="44" stroke-linecap="round"/>'
    '<path d="M424 236c78-6 106 32 106 84s-32 92-112 88" fill="none" stroke="currentColor" stroke-width="34" stroke-linecap="round"/>'
    '<path d="M124 150h312v334c0 22-18 38-40 38H164c-22 0-40-16-40-38Z" fill="currentColor"/>'
    '<path d="M124 150h312v334c0 22-18 38-40 38H164c-22 0-40-16-40-38Z" fill="none" stroke="#000" stroke-opacity=".14" stroke-width="2"/>'
    '<ellipse cx="280" cy="150" rx="156" ry="18" fill="currentColor"/>'
    '<ellipse cx="280" cy="151" rx="146" ry="12" fill="#000" opacity=".22"/>',
    '<path d="M124 166h312v318c0 22-18 38-40 38H164c-22 0-40-16-40-38Z" fill="url(#MockupCeramic)"/>',
    (164, 200, 232, 260),
)

CAMISETA = (
    '<ellipse cx="300" cy="560" rx="200" ry="16" fill="#000" opacity=".08"/>'
    '<path d="M222 66 168 84 62 150l46 98 54-24v314h276V224l54 24 46-98-106-66-54-18c-14 34-44 54-78 54s-64-20-78-54Z" fill="currentColor"/>'
    '<path d="M222 66 168 84 62 150l46 98 54-24v314h276V224l54 24 46-98-106-66-54-18c-14 34-44 54-78 54s-64-20-78-54Z" fill="none" stroke="#000" stroke-opacity=".14" stroke-width="2"/>'
    '<path d="M222 66c14 34 44 54 78 54s64-20 78-54" fill="none" stroke="#000" stroke-opacity=".18" stroke-width="7"/>'
    '<path d="M162 224v-56M438 224v-56" stroke="#000" stroke-opacity=".08" stroke-width="2"/>',
    '<path d="M222 66 168 84 62 150l46 98 54-24v314h276V224l54 24 46-98-106-66-54-18c-14 34-44 54-78 54s-64-20-78-54Z" fill="url(#MockupFabric)" opacity=".5"/>',
    (205, 160, 190, 240),
)

ECOBAG = (
    '<ellipse cx="300" cy="560" rx="185" ry="15" fill="#000" opacity=".08"/>'
    '<path d="M222 214c0-120 156-120 156 0" fill="none" stroke="currentColor" stroke-width="24" stroke-linecap="round"/>'
    '<path d="M222 214c0-120 156-120 156 0" fill="none" stroke="#000" stroke-opacity=".12" stroke-width="24" stroke-linecap="round"/>'
    '<path d="M128 200h344l14 346H114Z" fill="currentColor"/>'
    '<path d="M128 200h344l14 346H114Z" fill="none" stroke="#000" stroke-opacity=".14" stroke-width="2"/>'
    '<path d="M128 222h344" stroke="#000" stroke-opacity=".12" stroke-width="2" stroke-dasharray="6 6"/>',
    '<path d="M128 200h344l14 346H114Z" fill="url(#MockupFabric)" opacity=".5"/>',
    (170, 262, 260, 250),
)


def sol(cx, cy, r, cor):
    raios = "".join(
        f'<line x1="{cx}" y1="{cy - r - 10}" x2="{cx}" y2="{cy - r - 24}" stroke="{cor}" stroke-width="6" '
        f'stroke-linecap="round" transform="rotate({a} {cx} {cy})"/>'
        for a in range(0, 360, 45)
    )
    return f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="{cor}"/>{raios}'


def coracao(cx, cy, s, cor):
    return (
        f'<path transform="translate({cx - 16 * s} {cy - 14 * s}) scale({s})" '
        f'd="M16 28S2 19 2 10a7 7 0 0 1 14-2 7 7 0 0 1 14 2c0 9-14 18-14 18Z" fill="{cor}"/>'
    )


def folha(cx, cy, cor):
    return (
        f'<path d="M{cx} {cy + 40}c-30-30-24-70 0-90 24 20 30 60 0 90Z" fill="{cor}"/>'
        f'<path d="M{cx} {cy + 40}v-80" stroke="#fff" stroke-opacity=".6" stroke-width="3"/>'
    )


def texto(x, y, conteudo, fonte, tamanho, cor, peso=400):
    return (
        f'<text x="{x}" y="{y}" text-anchor="middle" dominant-baseline="central" '
        f'font-family="{fonte}" font-size="{tamanho}" font-weight="{peso}" fill="{cor}">{conteudo}</text>'
    )


def produto(mockup, cor, arte):
    base, sombra, (x, y, w, h) = mockup
    return (
        f'<g style="color:{cor}">{base}'
        f'<g><clipPath id="c{x}{y}"><rect x="{x}" y="{y}" width="{w}" height="{h}"/></clipPath>'
        f'<g clip-path="url(#c{x}{y})">{arte(x, y, w, h)}</g></g>{sombra}</g>'
    )


ARTES = {
    "caneca-branca": (CANECA, "#F6F4EF", lambda x, y, w, h: sol(x + w / 2, y + 80, 34, "#F2B33D")
                      + texto(x + w / 2, y + 180, "Bom dia, Ana", "Pacifico", 34, "#D9481F")),
    "caneca-preta": (CANECA, "#26231F", lambda x, y, w, h: texto(x + w / 2, y + 110, "CAFÉ", "Bricolage Grotesque", 64, "#FFFFFF", 800)
                     + texto(x + w / 2, y + 170, "primeiro", "Pacifico", 34, "#F2B33D")),
    "camiseta-branca": (CAMISETA, "#F6F4EF", lambda x, y, w, h: coracao(x + w / 2, y + 85, 3.2, "#D9481F")
                        + texto(x + w / 2, y + 180, "Família Souza", "Pacifico", 30, "#1D1A16")),
    "camiseta-preta": (CAMISETA, "#26231F", lambda x, y, w, h: texto(x + w / 2, y + 90, "TIME", "Space Mono", 42, "#FFFFFF", 700)
                       + texto(x + w / 2, y + 150, "DO LÉO", "Space Mono", 42, "#F2B33D", 700)),
    "camiseta-areia": (CAMISETA, "#E4D6BD", lambda x, y, w, h: sol(x + w / 2, y + 85, 38, "#D9481F")
                       + texto(x + w / 2, y + 185, "bom humor", "Bricolage Grotesque", 30, "#1D1A16", 800)),
    "ecobag-natural": (ECOBAG, "#EFE6D2", lambda x, y, w, h: folha(x + w / 2, y + 70, "#4F6B55")
                       + texto(x + w / 2, y + 175, "Feira da Rua", "Pacifico", 36, "#2F4A3A")),
    "ecobag-preta": (ECOBAG, "#26231F", lambda x, y, w, h: texto(x + w / 2, y + 95, "LEVE", "Bricolage Grotesque", 58, "#FFFFFF", 800)
                     + texto(x + w / 2, y + 155, "a vida leve", "Pacifico", 32, "#F2B33D")),
}

EXTRAS = {
    "caixa-de-presente": (
        '<ellipse cx="300" cy="500" rx="200" ry="20" fill="#000" opacity=".1"/>'
        '<path d="M130 250h340v240H130Z" fill="#C9A27A"/><path d="M130 250h340v240H130Z" fill="url(#MockupFabric)" opacity=".7"/>'
        '<path d="M110 200h380v60H110Z" fill="#D7B48C"/><path d="M110 200h380v60H110Z" fill="none" stroke="#000" stroke-opacity=".12" stroke-width="2"/>'
        '<path d="M276 200h48v290h-48Z" fill="#D9481F"/>'
        '<path d="M300 200c-60-70-120-40-90-10 20 20 60 14 90 10Zm0 0c60-70 120-40 90-10-20 20-60 14-90 10Z" fill="#D9481F"/>'
        '<circle cx="300" cy="196" r="14" fill="#B83A16"/>'
    ),
    "cartao-com-mensagem": (
        '<ellipse cx="300" cy="500" rx="210" ry="18" fill="#000" opacity=".1"/>'
        '<path d="M120 230h360v240H120Z" fill="#E4D6BD" transform="rotate(-6 300 350)"/>'
        '<path d="M120 230 300 360 480 230" fill="none" stroke="#000" stroke-opacity=".12" stroke-width="3" transform="rotate(-6 300 350)"/>'
        '<path d="M170 150h270v320H170Z" fill="#FFFFFF" transform="rotate(5 300 320)"/>'
        '<path d="M170 150h270v320H170Z" fill="none" stroke="#000" stroke-opacity=".1" stroke-width="2" transform="rotate(5 300 320)"/>'
        '<g transform="rotate(5 300 320)">'
        + coracao(305, 250, 2.2, "#D9481F")
        + texto(305, 345, "Para você", "Pacifico", 40, "#1D1A16")
        + "</g>"
    ),
    "papel-de-seda-e-laco": (
        '<ellipse cx="300" cy="505" rx="210" ry="18" fill="#000" opacity=".1"/>'
        '<path d="M110 300 300 220 490 300 300 400Z" fill="#F4C9B8"/>'
        '<path d="M120 330 300 250 480 330 300 430Z" fill="#F8DCCF"/>'
        '<path d="M130 360 300 285 470 360 300 455Z" fill="#FBEDE6"/>'
        '<path d="M130 360 300 285 470 360 300 455Z" fill="none" stroke="#000" stroke-opacity=".08" stroke-width="2"/>'
        '<circle cx="420" cy="250" r="62" fill="#D9481F"/><circle cx="420" cy="250" r="22" fill="#F6F4EF"/>'
        '<path d="M420 312c-10 60-40 110-90 140" fill="none" stroke="#D9481F" stroke-width="14" stroke-linecap="round"/>'
    ),
}


def pagina(svg, largura, altura):
    return f"""<!doctype html><html><head><meta charset="utf-8">
<link rel="stylesheet" href="{FONTES}">
<style>*{{margin:0}}html,body{{width:{largura}px;height:{altura}px;overflow:hidden}}svg{{display:block}}</style>
</head><body>{svg}</body></html>"""


def fotografar(html, destino, largura, altura, grao=0.0, qualidade=88):
    with tempfile.TemporaryDirectory() as tmp:
        arquivo = Path(tmp) / "pagina.html"
        png = Path(tmp) / "print.png"
        arquivo.write_text(html, encoding="utf-8")
        subprocess.run(
            [CHROME, "--headless=new", "--disable-gpu", "--hide-scrollbars", "--virtual-time-budget=8000",
             f"--window-size={largura},{altura}", f"--screenshot={png}", arquivo.as_uri()],
            check=True, capture_output=True, timeout=90,
        )
        imagem = Image.open(png).convert("RGB")
        if grao:
            ruido = np.random.default_rng(7).normal(0, grao, (altura, largura, 1))
            imagem = Image.fromarray(np.clip(np.asarray(imagem, dtype=np.float32) + ruido, 0, 255).astype(np.uint8))
        imagem.save(destino, "JPEG", quality=qualidade, optimize=True)
    print(destino.name, destino.stat().st_size // 1024, "KB")


def foto_produto(nome, conteudo):
    svg = (f'<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1600" viewBox="0 0 600 600">{DEFS}'
           f'<rect width="600" height="600" fill="url(#Fundo)"/>{conteudo}</svg>')
    fotografar(pagina(svg, 1600, 1600), SAIDA / f"{nome}.jpg", 1600, 1600)


def banner():
    mesa = '<path d="M0 1180h3000v420H0Z" fill="#E7DCCB"/><path d="M0 1180h3000" stroke="#000" stroke-opacity=".06" stroke-width="4"/>'
    luz = '<radialGradient id="Luz" cx=".72" cy=".35" r=".7"><stop offset="0" stop-color="#FFF8EE"/><stop offset="1" stop-color="#EADFCF"/></radialGradient>'
    caneca = produto(CANECA, "#F6F4EF", ARTES["caneca-branca"][2])
    camiseta = produto(CAMISETA, "#E4D6BD", ARTES["camiseta-areia"][2])
    ecobag = produto(ECOBAG, "#EFE6D2", ARTES["ecobag-natural"][2])
    svg = (
        f'<svg xmlns="http://www.w3.org/2000/svg" width="3000" height="1600" viewBox="0 0 3000 1600">{DEFS}'
        f'<defs>{luz}</defs><rect width="3000" height="1600" fill="url(#Luz)"/>{mesa}'
        f'<g transform="translate(1520 180) scale(1.9)">{camiseta}</g>'
        f'<g transform="translate(2280 560) scale(1.15)">{ecobag}</g>'
        f'<g transform="translate(1180 610) scale(1.05)">{caneca}</g>'
        "</svg>"
    )
    fotografar(pagina(svg, 3000, 1600), SAIDA / "rabisco-hero.jpg", 3000, 1600, grao=7.0, qualidade=92)


def foto_cliente():
    svg = (
        '<svg xmlns="http://www.w3.org/2000/svg" width="1800" height="1350" viewBox="0 0 1800 1350">'
        '<defs><linearGradient id="Ceu" x1="0" y1="0" x2="0" y2="1">'
        '<stop offset="0" stop-color="#2E3F7A"/><stop offset=".55" stop-color="#E86A4A"/><stop offset="1" stop-color="#F6C27A"/>'
        '</linearGradient><linearGradient id="Mar" x1="0" y1="0" x2="0" y2="1">'
        '<stop offset="0" stop-color="#E9895E"/><stop offset="1" stop-color="#3B4E7E"/></linearGradient></defs>'
        '<rect width="1800" height="1350" fill="url(#Ceu)"/>'
        '<circle cx="1180" cy="760" r="170" fill="#FFD9A0"/>'
        '<path d="M0 820 260 560l220 190 300-330 320 300 260-210 440 310v530H0Z" fill="#3A2D4F"/>'
        '<path d="M0 900 340 700l300 170 380-240 360 260 420-160v620H0Z" fill="#251E35"/>'
        '<rect y="980" width="1800" height="370" fill="url(#Mar)"/>'
        '<path d="M1040 1010h280M1080 1060h200M1120 1110h120" stroke="#FFD9A0" stroke-width="10" stroke-linecap="round" opacity=".7"/>'
        '<path d="M520 980c20-60 60-60 80 0" fill="#1B1626"/><circle cx="560" cy="930" r="26" fill="#1B1626"/>'
        '<path d="M640 980c18-52 52-52 70 0" fill="#1B1626"/><circle cx="675" cy="938" r="22" fill="#1B1626"/>'
        "</svg>"
    )
    fotografar(pagina(svg, 1800, 1350), SAIDA / "foto-cliente.jpg", 1800, 1350, grao=5.0)
    Image.open(SAIDA / "foto-cliente.jpg").resize((360, 270)).save(SAIDA / "foto-cliente-pequena.jpg", quality=85)


def main():
    SAIDA.mkdir(exist_ok=True)
    for nome, (mockup, cor, arte) in ARTES.items():
        foto_produto(nome, produto(mockup, cor, arte))
    for nome, conteudo in EXTRAS.items():
        foto_produto(nome, conteudo)
    banner()
    foto_cliente()


if __name__ == "__main__":
    main()
