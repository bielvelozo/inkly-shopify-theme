"""Draw the stand-in for a customer's photo, used to test the personalizer upload.

The product photos come from demo/photos.py.
"""

import subprocess
import tempfile
from pathlib import Path

import numpy as np
from PIL import Image

HERE = Path(__file__).parent
OUT = HERE / "images"
CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"


def page(svg, width, height):
    return f"""<!doctype html><html><head><meta charset="utf-8">
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
    customer_photo()


if __name__ == "__main__":
    main()
