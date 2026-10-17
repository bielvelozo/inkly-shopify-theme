"""Cut the hero mug out of its gray studio backdrop so it can sit on the wrapping paper.

Usage: python demo/cutout.py <source.jpg> <output>  (writes <output>.jpg on lemon paper)
The source is the Mediamodifier mug render listed in demo/CREDITS.md (2400 px wide).
The background is modelled per row from the side strips, and pixels that differ from it in tone,
tint or edge strength give the handle. The body is drawn from its measured geometry (straight
sides, rim and base ellipses), because the white mug barely differs from the grey floor and a
detected outline comes out lumpy there. Edge pixels take the colour of the mug just inside them so
no grey fringe shows on the paper, and a soft contact shadow is drawn under the base. The result
is cropped to the 4:5 frame the hero uses and laid on the lemon paper (#FFE55C), so it ships as a
light JPEG instead of a heavy transparent image.
"""

import sys
from collections import deque
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter

src = Path(sys.argv[1])
out = Path(sys.argv[2])
image = Image.open(src).convert("RGB")
full = np.asarray(image).astype(np.float32)
H, W, _ = full.shape

scale = 4
small = np.asarray(image.resize((W // scale, H // scale), Image.LANCZOS)).astype(np.float32)
h, w, _ = small.shape

left = np.median(small[:, : int(w * 0.07)], axis=1)
right = np.median(small[:, int(w * 0.93):], axis=1)
xs = np.linspace(0, 1, w)[None, :, None]
bg = left[:, None, :] * (1 - xs) + right[:, None, :] * xs

diff = small - bg
lum = diff.mean(axis=2)
chroma_img = np.stack([small[..., 1] - small[..., 0], small[..., 2] - small[..., 0]], axis=2)
chroma_bg = np.stack([bg[..., 1] - bg[..., 0], bg[..., 2] - bg[..., 0]], axis=2)
dchroma = np.abs(chroma_img - chroma_bg).sum(axis=2)
score = np.abs(lum) * 0.6 + dchroma * 1.6
gy, gx = np.gradient(small.mean(axis=2))
edge = np.hypot(gx, gy)
score = score + edge * 1.2

threshold = float(sys.argv[3]) if len(sys.argv) > 3 else 9
shadowish = (lum < -3) & (dchroma < 5) & (edge < 6)
candidate_bg = (score < threshold) | shadowish

labels = np.zeros((h, w), np.int32)
current = 0
sizes = {}
touches = {}
for y in range(h):
    for x in range(w):
        if not candidate_bg[y, x] or labels[y, x]:
            continue
        current += 1
        queue = deque([(y, x)])
        labels[y, x] = current
        count = 0
        border = False
        while queue:
            cy, cx = queue.popleft()
            count += 1
            if cy in (0, h - 1) or cx in (0, w - 1):
                border = True
            for ny, nx in ((cy + 1, cx), (cy - 1, cx), (cy, cx + 1), (cy, cx - 1)):
                if 0 <= ny < h and 0 <= nx < w and candidate_bg[ny, nx] and not labels[ny, nx]:
                    labels[ny, nx] = current
                    queue.append((ny, nx))
        sizes[current] = count
        touches[current] = border

background = np.zeros((h, w), bool)
for label, count in sizes.items():
    if touches[label] or count > (h * w) * 0.004:
        background |= labels == label

fg_bool = ~background
yy, xx = np.mgrid[0:h, 0:w]
fx, fy = xx / w, yy / h
outline = [(0.357, 0.15), (0.357, 0.70), (0.368, 0.77), (0.381, 0.79), (0.389, 0.80), (0.400, 0.81), (0.415, 0.82),
           (0.431, 0.83), (0.448, 0.84), (0.52, 0.847), (0.60, 0.841), (0.618, 0.83), (0.638, 0.81), (0.648, 0.80),
           (0.656, 0.79), (0.664, 0.77), (0.673, 0.70), (0.686, 0.15)]
body_img = Image.new("L", (w, h), 0)
ImageDraw.Draw(body_img).polygon([(x * w, y * h) for x, y in outline], fill=255)
body = np.asarray(body_img) > 0
handle = (fx > 0.205) & (fx < 0.38) & (fy > 0.22) & (fy < 0.73)
fg_bool &= body | handle
fg_labels = np.zeros((h, w), np.int32)
best, best_size, current_fg = 0, 0, 0
for y in range(h):
    for x in range(w):
        if not fg_bool[y, x] or fg_labels[y, x]:
            continue
        current_fg += 1
        queue = deque([(y, x)])
        fg_labels[y, x] = current_fg
        count = 0
        while queue:
            cy, cx = queue.popleft()
            count += 1
            for ny, nx in ((cy + 1, cx), (cy - 1, cx), (cy, cx + 1), (cy, cx - 1)):
                if 0 <= ny < h and 0 <= nx < w and fg_bool[ny, nx] and not fg_labels[ny, nx]:
                    fg_labels[ny, nx] = current_fg
                    queue.append((ny, nx))
        if count > best_size:
            best, best_size = current_fg, count
fg = (fg_labels == best).astype(np.uint8) * 255
coarse = Image.fromarray(fg).filter(ImageFilter.MaxFilter(3)).filter(ImageFilter.MinFilter(5)).filter(ImageFilter.MaxFilter(3))
detected = coarse.resize((W, H), Image.BICUBIC).filter(ImageFilter.GaussianBlur(12)).point(lambda v: 255 if v >= 128 else 0)

side_left, side_right = 0.3675 * W, 0.6700 * W
rim_top, rim_depth = 0.161 * H, 0.034 * H
base_shoulder, base_depth = 0.760 * H, 0.080 * H
inset = 1.5
centre = (side_left + side_right) / 2
radius = (side_right - side_left) / 2 - inset
arc = np.linspace(-1, 1, 181)
outline_top = [(centre + u * radius, rim_top + inset + rim_depth * (1 - np.sqrt(1 - u * u))) for u in arc]
outline_bottom = [(centre - u * radius, base_shoulder + (base_depth - inset) * np.sqrt(1 - u * u)) for u in arc]
supersample = 4
body_layer = Image.new("L", (W * supersample, H * supersample), 0)
ImageDraw.Draw(body_layer).polygon([(x * supersample, y * supersample) for x, y in outline_top + outline_bottom], fill=255)
body_alpha = np.asarray(body_layer.resize((W, H), Image.LANCZOS)).astype(np.float32) / 255.0

handle_zone = np.zeros((H, W), bool)
handle_zone[int(0.20 * H): int(0.75 * H), : int(side_left + 6)] = True
handle_solid = np.where(handle_zone, np.asarray(detected.filter(ImageFilter.MinFilter(5))), 0).astype(np.uint8)
handle_alpha = np.asarray(Image.fromarray(handle_solid).filter(ImageFilter.GaussianBlur(0.9))).astype(np.float32) / 255.0
handle_alpha[:, int(side_left) :] = np.maximum(handle_alpha[:, int(side_left) :], (handle_solid[:, int(side_left) :] > 0) * 1.0)
alpha = np.maximum(body_alpha, handle_alpha)

solid = Image.fromarray(((alpha > 0.5) * 255).astype(np.uint8))
inner = np.asarray(solid.filter(ImageFilter.MinFilter(11))).astype(np.float32) / 255.0
weight = np.asarray(Image.fromarray((inner * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(8))).astype(np.float32) / 255.0
spread = np.stack([
    np.asarray(Image.fromarray((full[..., c] * inner).clip(0, 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(8))).astype(np.float32)
    for c in range(3)
], axis=2)
interior = spread / np.maximum(weight[..., None], 1e-3)
rim = np.clip(1 - inner, 0, 1)[..., None] * 0.6
colour = full * (1 - rim) + interior * rim

rgba = np.zeros((H, W, 4), np.uint8)
rgba[..., :3] = colour.clip(0, 255).astype(np.uint8)
rgba[..., 3] = (alpha * 255).clip(0, 255).astype(np.uint8)
cutout = Image.fromarray(rgba, "RGBA")

ink = (0x15, 0x12, 0x3A)
canvas = Image.new("RGB", (W, H), (0xFF, 0xE5, 0x5C))


def shade(box, blur, strength):
    layer = Image.new("L", (W, H), 0)
    ImageDraw.Draw(layer).ellipse(box, fill=255)
    layer = layer.filter(ImageFilter.GaussianBlur(blur)).point(lambda v: int(v * strength))
    canvas.paste(Image.new("RGB", (W, H), ink), (0, 0), layer)


floor = base_shoulder + base_depth
shade((centre - radius * 1.12, floor - H * 0.045, centre + radius * 1.22, floor + H * 0.03), 30, 0.17)
shade((centre - radius * 0.92, floor - H * 0.016, centre + radius * 0.95, floor + H * 0.008), 8, 0.32)
canvas.paste(cutout, (0, 0), cutout)

frame_width = round(H * 4 / 5)
left = min(max(round(0.445 * W - frame_width / 2), 0), W - frame_width)
paper = canvas.crop((left, 0, left + frame_width, H))
paper.thumbnail((1600, 2000))
target = out.with_suffix(".jpg")
paper.save(target, "JPEG", quality=86, optimize=True, progressive=True)
print(target.name, paper.size, target.stat().st_size // 1024, "KB")
