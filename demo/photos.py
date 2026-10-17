"""Download the free-license stock photos used by the demo store and crop them for the theme.

Every source, photographer and license is listed in demo/CREDITS.md.
"""

import io
import sys
from pathlib import Path

import requests
from PIL import Image

HERE = Path(__file__).parent
OUT = HERE / "images"

SOURCES = {
    "mug-white": "https://images.unsplash.com/photo-1650959858546-d09833d5317b?w=3000&q=90&fm=jpg",
    "mug-black": "https://images.pexels.com/photos/6312154/pexels-photo-6312154.jpeg?auto=compress&cs=tinysrgb&w=2600",
    "mug-lifestyle": "https://burst.shopifycdn.com/photos/womans-hands-holding-coffee.jpg?width=2600&format=pjpg&exif=0&iptc=0",
    "tshirt-white": "https://burst.shopifycdn.com/photos/torso-of-a-person-wearing-white-shirt-product-mockup.jpg?width=2600&format=pjpg&exif=0&iptc=0",
    "tshirt-black": "https://burst.shopifycdn.com/photos/a-person-in-a-plain-black-t-shirt-on-white-background.jpg?width=2600&format=pjpg&exif=0&iptc=0",
    "tote-natural": "https://images.pexels.com/photos/6787035/pexels-photo-6787035.jpeg?auto=compress&cs=tinysrgb&w=2600",
    "gift-box": "https://burst.shopifycdn.com/photos/gift-box.jpg?width=2600&format=pjpg&exif=0&iptc=0",
    "greeting-card": "https://images.unsplash.com/photo-1566125882500-87e10f726cdc?w=2600&q=90&fm=jpg",
    "tissue-paper-and-ribbon": "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=2600&q=90&fm=jpg",
    "inkly-gift-wrap": "https://burst.shopifycdn.com/photos/holiday-gifts-wrapping.jpg?width=2400&format=pjpg&exif=0&iptc=0",
}

# Crop as (horizontal centre, vertical centre) of the subject, in fractions of the source,
# the output aspect ratio (width / height) and how much of the largest possible crop to keep.
CROPS = {
    "mug-white": (0.445, 0.5, 4 / 5, 1),
    "mug-black": (0.47, 0.5, 4 / 5, 1),
    "mug-lifestyle": (0.62, 0.5, 4 / 5, 1),
    "tshirt-white": (0.5, 0.58, 4 / 5, 0.86),
    "tshirt-black": (0.5, 0.6, 4 / 5, 0.84),
    "tote-natural": (0.56, 0.5, 4 / 5, 1),
    "gift-box": (0.56, 0.5, 4 / 5, 1),
    "greeting-card": (0.52, 0.5, 4 / 5, 1),
    "tissue-paper-and-ribbon": (0.55, 0.5, 4 / 5, 1),
    "inkly-gift-wrap": (0.5, 0.5, 3 / 2, 1),
}

COPIES = {
    "inkly-hero-mug": "mug-white",
    "tshirt-sand": "tshirt-white",
    "tote-black": "tote-natural",
}


def crop(image, cx, cy, ratio, keep):
    width, height = image.size
    if width / height > ratio:
        new_w, new_h = round(height * ratio), height
    else:
        new_w, new_h = width, round(width / ratio)
    new_w, new_h = round(new_w * keep), round(new_h * keep)
    left = min(max(round(cx * width - new_w / 2), 0), width - new_w)
    top = min(max(round(cy * height - new_h / 2), 0), height - new_h)
    return image.crop((left, top, left + new_w, top + new_h))


def main():
    OUT.mkdir(exist_ok=True)
    for name, url in SOURCES.items():
        response = requests.get(url, timeout=120)
        response.raise_for_status()
        image = Image.open(io.BytesIO(response.content)).convert("RGB")
        image = crop(image, *CROPS[name])
        image.thumbnail((2000, 2000))
        target = OUT / f"{name}.jpg"
        image.save(target, "JPEG", quality=86, optimize=True, progressive=True)
        print(target.name, image.size, target.stat().st_size // 1024, "KB")
    for name, source in COPIES.items():
        (OUT / f"{name}.jpg").write_bytes((OUT / f"{source}.jpg").read_bytes())
        print(f"{name}.jpg = {source}.jpg")


if __name__ == "__main__":
    sys.exit(main())
