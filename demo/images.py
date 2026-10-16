import subprocess
import tempfile
from pathlib import Path

import numpy as np
from PIL import Image

HERE = Path(__file__).parent
OUT = HERE / "images"
CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
FONTS = (
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
  <radialGradient id="Backdrop" cx=".5" cy=".38" r=".75">
    <stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#eee5d8"/>
  </radialGradient>
</defs>
"""

TEE_PATH = "M222 66 168 84 62 150l46 98 54-24v314h276V224l54 24 46-98-106-66-54-18c-14 34-44 54-78 54s-64-20-78-54Z"

MUG = (
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

TEE = (
    '<ellipse cx="300" cy="560" rx="200" ry="16" fill="#000" opacity=".08"/>'
    f'<path d="{TEE_PATH}" fill="currentColor"/>'
    f'<path d="{TEE_PATH}" fill="none" stroke="#000" stroke-opacity=".14" stroke-width="2"/>'
    '<path d="M222 66c14 34 44 54 78 54s64-20 78-54" fill="none" stroke="#000" stroke-opacity=".18" stroke-width="7"/>'
    '<path d="M162 224v-56M438 224v-56" stroke="#000" stroke-opacity=".08" stroke-width="2"/>',
    f'<path d="{TEE_PATH}" fill="url(#MockupFabric)" opacity=".5"/>',
    (205, 160, 190, 240),
)

TOTE = (
    '<ellipse cx="300" cy="560" rx="185" ry="15" fill="#000" opacity=".08"/>'
    '<path d="M222 214c0-120 156-120 156 0" fill="none" stroke="currentColor" stroke-width="24" stroke-linecap="round"/>'
    '<path d="M222 214c0-120 156-120 156 0" fill="none" stroke="#000" stroke-opacity=".12" stroke-width="24" stroke-linecap="round"/>'
    '<path d="M128 200h344l14 346H114Z" fill="currentColor"/>'
    '<path d="M128 200h344l14 346H114Z" fill="none" stroke="#000" stroke-opacity=".14" stroke-width="2"/>'
    '<path d="M128 222h344" stroke="#000" stroke-opacity=".12" stroke-width="2" stroke-dasharray="6 6"/>',
    '<path d="M128 200h344l14 346H114Z" fill="url(#MockupFabric)" opacity=".5"/>',
    (170, 262, 260, 250),
)


def sun(cx, cy, r, color):
    rays = "".join(
        f'<line x1="{cx}" y1="{cy - r - 10}" x2="{cx}" y2="{cy - r - 24}" stroke="{color}" stroke-width="6" '
        f'stroke-linecap="round" transform="rotate({a} {cx} {cy})"/>'
        for a in range(0, 360, 45)
    )
    return f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="{color}"/>{rays}'


def heart(cx, cy, s, color):
    return (
        f'<path transform="translate({cx - 16 * s} {cy - 14 * s}) scale({s})" '
        f'd="M16 28S2 19 2 10a7 7 0 0 1 14-2 7 7 0 0 1 14 2c0 9-14 18-14 18Z" fill="{color}"/>'
    )


def leaf(cx, cy, color):
    return (
        f'<path d="M{cx} {cy + 40}c-30-30-24-70 0-90 24 20 30 60 0 90Z" fill="{color}"/>'
        f'<path d="M{cx} {cy + 40}v-80" stroke="#fff" stroke-opacity=".6" stroke-width="3"/>'
    )


def text(x, y, content, font, size, color, weight=400):
    return (
        f'<text x="{x}" y="{y}" text-anchor="middle" dominant-baseline="central" '
        f'font-family="{font}" font-size="{size}" font-weight="{weight}" fill="{color}">{content}</text>'
    )


def product(mockup, color, art):
    base, shade, (x, y, w, h) = mockup
    return (
        f'<g style="color:{color}">{base}'
        f'<g><clipPath id="c{x}{y}"><rect x="{x}" y="{y}" width="{w}" height="{h}"/></clipPath>'
        f'<g clip-path="url(#c{x}{y})">{art(x, y, w, h)}</g></g>{shade}</g>'
    )


DESIGNS = {
    "mug-white": (MUG, "#F6F4EF", lambda x, y, w, h: sun(x + w / 2, y + 80, 34, "#F2B33D")
                  + text(x + w / 2, y + 180, "Morning, Ana", "Pacifico", 32, "#D9481F")),
    "mug-black": (MUG, "#26231F", lambda x, y, w, h: text(x + w / 2, y + 100, "but first", "Pacifico", 32, "#F2B33D")
                  + text(x + w / 2, y + 165, "COFFEE", "Bricolage Grotesque", 54, "#FFFFFF", 800)),
    "tshirt-white": (TEE, "#F6F4EF", lambda x, y, w, h: heart(x + w / 2, y + 85, 3.2, "#D9481F")
                     + text(x + w / 2, y + 180, "The Millers", "Pacifico", 32, "#1D1A16")),
    "tshirt-black": (TEE, "#26231F", lambda x, y, w, h: text(x + w / 2, y + 90, "TEAM", "Space Mono", 44, "#FFFFFF", 700)
                     + text(x + w / 2, y + 150, "LEO", "Space Mono", 44, "#F2B33D", 700)),
    "tshirt-sand": (TEE, "#E4D6BD", lambda x, y, w, h: sun(x + w / 2, y + 85, 38, "#D9481F")
                    + text(x + w / 2, y + 185, "good vibes", "Bricolage Grotesque", 30, "#1D1A16", 800)),
    "tote-natural": (TOTE, "#EFE6D2", lambda x, y, w, h: leaf(x + w / 2, y + 70, "#4F6B55")
                     + text(x + w / 2, y + 175, "Farmers Market", "Pacifico", 30, "#2F4A3A")),
    "tote-black": (TOTE, "#26231F", lambda x, y, w, h: text(x + w / 2, y + 95, "TRAVEL", "Bricolage Grotesque", 50, "#FFFFFF", 800)
                   + text(x + w / 2, y + 155, "light", "Pacifico", 34, "#F2B33D")),
}

EXTRAS = {
    "gift-box": (
        '<ellipse cx="300" cy="500" rx="200" ry="20" fill="#000" opacity=".1"/>'
        '<path d="M130 250h340v240H130Z" fill="#C9A27A"/><path d="M130 250h340v240H130Z" fill="url(#MockupFabric)" opacity=".7"/>'
        '<path d="M110 200h380v60H110Z" fill="#D7B48C"/><path d="M110 200h380v60H110Z" fill="none" stroke="#000" stroke-opacity=".12" stroke-width="2"/>'
        '<path d="M276 200h48v290h-48Z" fill="#D9481F"/>'
        '<path d="M300 200c-60-70-120-40-90-10 20 20 60 14 90 10Zm0 0c60-70 120-40 90-10-20 20-60 14-90 10Z" fill="#D9481F"/>'
        '<circle cx="300" cy="196" r="14" fill="#B83A16"/>'
    ),
    "greeting-card": (
        '<ellipse cx="300" cy="500" rx="210" ry="18" fill="#000" opacity=".1"/>'
        '<path d="M120 230h360v240H120Z" fill="#E4D6BD" transform="rotate(-6 300 350)"/>'
        '<path d="M120 230 300 360 480 230" fill="none" stroke="#000" stroke-opacity=".12" stroke-width="3" transform="rotate(-6 300 350)"/>'
        '<path d="M170 150h270v320H170Z" fill="#FFFFFF" transform="rotate(5 300 320)"/>'
        '<path d="M170 150h270v320H170Z" fill="none" stroke="#000" stroke-opacity=".1" stroke-width="2" transform="rotate(5 300 320)"/>'
        '<g transform="rotate(5 300 320)">'
        + heart(305, 250, 2.2, "#D9481F")
        + text(305, 345, "For you", "Pacifico", 40, "#1D1A16")
        + "</g>"
    ),
    "tissue-paper-and-ribbon": (
        '<ellipse cx="300" cy="505" rx="210" ry="18" fill="#000" opacity=".1"/>'
        '<path d="M110 300 300 220 490 300 300 400Z" fill="#F4C9B8"/>'
        '<path d="M120 330 300 250 480 330 300 430Z" fill="#F8DCCF"/>'
        '<path d="M130 360 300 285 470 360 300 455Z" fill="#FBEDE6"/>'
        '<path d="M130 360 300 285 470 360 300 455Z" fill="none" stroke="#000" stroke-opacity=".08" stroke-width="2"/>'
        '<circle cx="420" cy="250" r="62" fill="#D9481F"/><circle cx="420" cy="250" r="22" fill="#F6F4EF"/>'
        '<path d="M420 312c-10 60-40 110-90 140" fill="none" stroke="#D9481F" stroke-width="14" stroke-linecap="round"/>'
    ),
}


def page(svg, width, height):
    return f"""<!doctype html><html><head><meta charset="utf-8">
<link rel="stylesheet" href="{FONTS}">
<style>*{{margin:0}}html,body{{width:{width}px;height:{height}px;overflow:hidden}}svg{{display:block}}</style>
</head><body>{svg}</body></html>"""


def shoot(html, target, width, height, grain=0.0, quality=88):
    with tempfile.TemporaryDirectory() as tmp:
        source = Path(tmp) / "page.html"
        png = Path(tmp) / "shot.png"
        source.write_text(html, encoding="utf-8")
        subprocess.run(
            [CHROME, "--headless=new", "--disable-gpu", "--hide-scrollbars", "--virtual-time-budget=8000",
             f"--window-size={width},{height}", f"--screenshot={png}", source.as_uri()],
            check=True, capture_output=True, timeout=90,
        )
        image = Image.open(png).convert("RGB")
        if grain:
            noise = np.random.default_rng(7).normal(0, grain, (height, width, 1))
            image = Image.fromarray(np.clip(np.asarray(image, dtype=np.float32) + noise, 0, 255).astype(np.uint8))
        image.save(target, "JPEG", quality=quality, optimize=True)
    print(target.name, target.stat().st_size // 1024, "KB")


def product_photo(name, content):
    svg = (f'<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1600" viewBox="0 0 600 600">{DEFS}'
           f'<rect width="600" height="600" fill="url(#Backdrop)"/>{content}</svg>')
    shoot(page(svg, 1600, 1600), OUT / f"{name}.jpg", 1600, 1600)


def hero():
    table = '<path d="M0 1180h3000v420H0Z" fill="#E7DCCB"/><path d="M0 1180h3000" stroke="#000" stroke-opacity=".06" stroke-width="4"/>'
    light = '<radialGradient id="Light" cx=".72" cy=".35" r=".7"><stop offset="0" stop-color="#FFF8EE"/><stop offset="1" stop-color="#EADFCF"/></radialGradient>'
    mug = product(MUG, "#F6F4EF", DESIGNS["mug-white"][2])
    tee = product(TEE, "#E4D6BD", DESIGNS["tshirt-sand"][2])
    tote = product(TOTE, "#EFE6D2", DESIGNS["tote-natural"][2])
    svg = (
        f'<svg xmlns="http://www.w3.org/2000/svg" width="3000" height="1600" viewBox="0 0 3000 1600">{DEFS}'
        f'<defs>{light}</defs><rect width="3000" height="1600" fill="url(#Light)"/>{table}'
        f'<g transform="translate(1520 180) scale(1.9)">{tee}</g>'
        f'<g transform="translate(2280 560) scale(1.15)">{tote}</g>'
        f'<g transform="translate(1180 610) scale(1.05)">{mug}</g>'
        "</svg>"
    )
    shoot(page(svg, 3000, 1600), OUT / "inkly-hero.jpg", 3000, 1600, grain=7.0, quality=92)


def customer_photo():
    svg = (
        '<svg xmlns="http://www.w3.org/2000/svg" width="1800" height="1350" viewBox="0 0 1800 1350">'
        '<defs><linearGradient id="Sky" x1="0" y1="0" x2="0" y2="1">'
        '<stop offset="0" stop-color="#2E3F7A"/><stop offset=".55" stop-color="#E86A4A"/><stop offset="1" stop-color="#F6C27A"/>'
        '</linearGradient><linearGradient id="Sea" x1="0" y1="0" x2="0" y2="1">'
        '<stop offset="0" stop-color="#E9895E"/><stop offset="1" stop-color="#3B4E7E"/></linearGradient></defs>'
        '<rect width="1800" height="1350" fill="url(#Sky)"/>'
        '<circle cx="1180" cy="760" r="170" fill="#FFD9A0"/>'
        '<path d="M0 820 260 560l220 190 300-330 320 300 260-210 440 310v530H0Z" fill="#3A2D4F"/>'
        '<path d="M0 900 340 700l300 170 380-240 360 260 420-160v620H0Z" fill="#251E35"/>'
        '<rect y="980" width="1800" height="370" fill="url(#Sea)"/>'
        '<path d="M1040 1010h280M1080 1060h200M1120 1110h120" stroke="#FFD9A0" stroke-width="10" stroke-linecap="round" opacity=".7"/>'
        '<path d="M520 980c20-60 60-60 80 0" fill="#1B1626"/><circle cx="560" cy="930" r="26" fill="#1B1626"/>'
        '<path d="M640 980c18-52 52-52 70 0" fill="#1B1626"/><circle cx="675" cy="938" r="22" fill="#1B1626"/>'
        "</svg>"
    )
    shoot(page(svg, 1800, 1350), OUT / "customer-photo.jpg", 1800, 1350, grain=5.0)
    Image.open(OUT / "customer-photo.jpg").resize((360, 270)).save(OUT / "customer-photo-small.jpg", quality=85)


def main():
    OUT.mkdir(exist_ok=True)
    for name, (mockup, color, art) in DESIGNS.items():
        product_photo(name, product(mockup, color, art))
    for name, content in EXTRAS.items():
        product_photo(name, content)
    hero()
    customer_photo()


if __name__ == "__main__":
    main()
