"""Cut the hero mug out of its gray studio backdrop so it can sit on the wrapping paper.

Usage: python demo/cutout.py <source.jpg> <output.png>  (writes <output>.jpg on lemon paper)
The source is the Mediamodifier mug render listed in demo/CREDITS.md (2400 px wide).
The background is modelled per row from the side strips, pixels that differ from it in tone,
tint or edge strength are the mug, and a silhouette traced from this photo keeps the floor
reflection out. The result is cropped to the 4:5 frame the hero uses and laid on the lemon paper
(#FFE55C), so it ships as a light JPEG instead of a heavy transparent image.
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
mask = Image.fromarray(fg).filter(ImageFilter.MaxFilter(3)).filter(ImageFilter.MinFilter(5)).filter(ImageFilter.MaxFilter(3))
mask = mask.resize((W, H), Image.LANCZOS).filter(ImageFilter.GaussianBlur(1.3))
alpha = np.asarray(mask).astype(np.float32) / 255.0

bg_full = np.asarray(Image.fromarray(bg.clip(0, 255).astype(np.uint8)).resize((W, H), Image.BILINEAR)).astype(np.float32)
shadow = np.clip((bg_full.mean(axis=2) - full.mean(axis=2)) / 60.0, 0, 1)
shadow = np.asarray(Image.fromarray((shadow * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(10))).astype(np.float32) / 255.0
shadow_alpha = np.where(alpha < 0.5, shadow * 0.32, 0)

rgba = np.zeros((H, W, 4), np.float32)
rgba[..., :3] = np.where(alpha[..., None] > 0.02, full, 30)
rgba[..., 3] = np.maximum(alpha, shadow_alpha) * 255
Image.fromarray(rgba.clip(0, 255).astype(np.uint8), "RGBA").save(out)

cut = Image.open(out)
width, height = cut.size
frame_width = round(height * 4 / 5)
left = min(max(round(0.445 * width - frame_width / 2), 0), width - frame_width)
cut = cut.crop((left, 0, left + frame_width, height))
cut.thumbnail((1600, 2000))
paper = Image.new("RGB", cut.size, (0xFF, 0xE5, 0x5C))
paper.paste(cut, (0, 0), cut)
out.unlink()
target = out.with_suffix(".jpg")
paper.save(target, "JPEG", quality=86, optimize=True, progressive=True)
print(target.name, paper.size)
