from PIL import Image, ImageDraw, ImageFont
from pathlib import Path
import math

W, H = 1200, 630
root = Path('/home/beans/.openclaw/workspace/learn-gamechanger')
out = root / 'public/og-image.png'
face_path = root / 'public/ashley/ashley-cutout-2.png'

img = Image.new('RGB', (W, H), '#ffde59')
d = ImageDraw.Draw(img)

colors = {
    'yellow': '#ffde59',
    'red': '#ff4d4d',
    'blue': '#30d5ff',
    'pink': '#ff73d2',
    'lime': '#a8ff45',
    'orange': '#ff9f1c',
    'black': '#000000',
    'white': '#ffffff',
}

for y in range(H):
    blend = y / H
    r1, g1, b1 = (255, 233, 92)
    r2, g2, b2 = (255, 146, 28)
    r = int(r1 * (1 - blend) + r2 * blend)
    g = int(g1 * (1 - blend) + g2 * blend)
    b = int(b1 * (1 - blend) + b2 * blend)
    d.line([(0, y), (W, y)], fill=(r, g, b))

d.rectangle([0, 0, W, 96], fill=colors['red'])
d.rectangle([0, H - 105, W, H], fill=colors['blue'])
d.polygon([(770, 0), (1200, 0), (1200, 270)], fill=colors['pink'])
d.polygon([(0, 445), (270, 630), (0, 630)], fill=colors['lime'])

for rect in ([18, 18, W - 18, H - 18], [34, 34, W - 34, H - 34]):
    d.rectangle(rect, outline=colors['black'], width=6)

font_paths = [
    '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf',
    '/usr/share/fonts/truetype/liberation2/LiberationSans-Bold.ttf',
]
for fp in font_paths:
    if Path(fp).exists():
        font_path = fp
        break
else:
    font_path = None

if font_path:
    title = ImageFont.truetype(font_path, 106)
    subtitle = ImageFont.truetype(font_path, 34)
    small = ImageFont.truetype(font_path, 24)
    badge = ImageFont.truetype(font_path, 23)
    burst_font = ImageFont.truetype(font_path, 26)
else:
    title = subtitle = small = badge = burst_font = ImageFont.load_default()

badge_box = [54, 44, 420, 96]
d.rounded_rectangle(badge_box, radius=12, fill=colors['white'], outline=colors['black'], width=4)
d.text((74, 61), 'AS SEEN ON GROUP TEXT', font=badge, fill=colors['black'])

main_x, main_y = 70, 140
d.text((main_x + 7, main_y + 7), 'GCGC', font=title, fill=colors['black'])
d.text((main_x, main_y), 'GCGC', font=title, fill=colors['white'])

box1 = [70, 275, 455, 327]
box2 = [70, 343, 620, 395]
d.rectangle(box1, fill=colors['blue'], outline=colors['black'], width=4)
d.rectangle(box2, fill=colors['red'], outline=colors['black'], width=4)
d.text((88, 285), 'GRUMP CITY', font=subtitle, fill=colors['black'])
d.text((88, 353), 'GAME CHANGER', font=subtitle, fill=colors['white'])

info = [70, 425, 645, 540]
d.rectangle(info, fill=colors['white'], outline=colors['black'], width=4)
d.text((92, 447), "Ashley's GameChanger", font=small, fill=colors['black'])
d.text((92, 480), 'mini course waitlist', font=small, fill=colors['black'])
d.text((92, 513), 'for sports parents & scorekeepers', font=small, fill=colors['black'])

if face_path.exists():
    face = Image.open(face_path).convert('RGBA')
    bbox = face.getchannel('A').getbbox()
    if bbox:
        face = face.crop(bbox)
    target_h = 395
    scale = target_h / face.height
    face = face.resize((int(face.width * scale), target_h))
    fx = 760
    fy = 165

    shadow = Image.new('RGBA', (face.width + 20, face.height + 20), (0, 0, 0, 0))
    sd = ImageDraw.Draw(shadow)
    sd.rounded_rectangle([12, 12, face.width + 8, face.height + 8], radius=30, fill=(0, 0, 0, 90))
    img.paste(shadow.convert('RGB'), (fx + 10, fy + 14), shadow)
    img.paste(face, (fx, fy), face)

    sticker = [840, 118, 1135, 164]
    d.rounded_rectangle(sticker, radius=16, fill=colors['lime'], outline=colors['black'], width=4)
    d.text((877, 133), 'ASHLEY KNOWS THE APP', font=badge, fill=colors['black'])

burst_center = (1015, 485)
points = []
for i in range(22):
    angle = math.radians(i * (360 / 22))
    r = 105 if i % 2 == 0 else 72
    points.append((burst_center[0] + r * math.cos(angle), burst_center[1] + r * math.sin(angle)))
d.polygon(points, fill=colors['pink'], outline=colors['black'])
d.text((950, 458), 'WAITLIST', font=burst_font, fill=colors['black'])
d.text((978, 492), 'OPEN', font=burst_font, fill=colors['black'])

cta = [725, 48, 1128, 100]
d.rounded_rectangle(cta, radius=14, fill=colors['yellow'], outline=colors['black'], width=4)
d.text((765, 63), 'STOP THE GAME-DAY PANIC', font=badge, fill=colors['black'])

img.save(out)
print(out)
