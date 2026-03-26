from PIL import Image, ImageDraw, ImageFont
from pathlib import Path

W, H = 1200, 630
out = Path('/home/beans/.openclaw/workspace/learn-gamechanger/public/og-image.png')

img = Image.new('RGB', (W, H), '#ffde59')
d = ImageDraw.Draw(img)

# Background blocks / infomercial vibe
colors = {
    'yellow': '#ffde59',
    'red': '#ff4d4d',
    'blue': '#3bd3ff',
    'pink': '#ff73d2',
    'lime': '#a6ff4d',
    'black': '#000000',
    'white': '#ffffff',
}

d.rectangle([0, 0, W, H], fill=colors['yellow'])
d.rectangle([0, 0, W, 110], fill=colors['red'])
d.rectangle([0, H-120, W, H], fill=colors['blue'])
d.polygon([(760, 0), (1200, 0), (1200, 270)], fill=colors['pink'])
d.polygon([(0, 420), (320, 630), (0, 630)], fill=colors['lime'])

# Borders
for rect in ([20, 20, W-20, H-20], [36, 36, W-36, H-36]):
    d.rectangle(rect, outline=colors['black'], width=6)

# Fonts
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
    title = ImageFont.truetype(font_path, 118)
    subtitle = ImageFont.truetype(font_path, 44)
    small = ImageFont.truetype(font_path, 28)
    badge = ImageFont.truetype(font_path, 34)
else:
    title = subtitle = small = badge = ImageFont.load_default()

# Top badge
badge_box = [60, 52, 470, 120]
d.rounded_rectangle(badge_box, radius=14, fill=colors['white'], outline=colors['black'], width=5)
d.text((82, 69), 'AS SEEN ON TEXT MESSAGE', font=badge, fill=colors['black'])

# Main title with shadow
main_x, main_y = 70, 165
for dx, dy in [(8, 8)]:
    d.text((main_x + dx, main_y + dy), 'GCGC', font=title, fill=colors['black'])
d.text((main_x, main_y), 'GCGC', font=title, fill=colors['white'])

# Subtitle bars
sub1 = 'GRUMP CITY'
sub2 = 'GAME CHANGER'
box1 = [70, 305, 520, 365]
box2 = [70, 380, 710, 440]
d.rectangle(box1, fill=colors['blue'], outline=colors['black'], width=5)
d.rectangle(box2, fill=colors['red'], outline=colors['black'], width=5)
d.text((90, 315), sub1, font=subtitle, fill=colors['black'])
d.text((90, 390), sub2, font=subtitle, fill=colors['white'])

# Description box
info = [70, 470, 760, 565]
d.rectangle(info, fill=colors['white'], outline=colors['black'], width=5)
d.text((95, 490), "Ashley's GameChanger mini course waitlist", font=small, fill=colors['black'])
d.text((95, 525), 'for sports parents & scorekeepers', font=small, fill=colors['black'])

# Price-style burst
burst_center = (1005, 180)
points = []
import math
for i in range(24):
    angle = math.radians(i * 15)
    r = 118 if i % 2 == 0 else 78
    points.append((burst_center[0] + r * math.cos(angle), burst_center[1] + r * math.sin(angle)))
d.polygon(points, fill=colors['lime'], outline=colors['black'])
d.text((930, 145), 'WAITLIST', font=subtitle, fill=colors['black'])
d.text((965, 190), 'OPEN', font=subtitle, fill=colors['black'])

# Bottom-right CTA sticker
cta = [810, 430, 1120, 540]
d.rounded_rectangle(cta, radius=18, fill=colors['pink'], outline=colors['black'], width=6)
d.text((855, 455), 'SAVE MY SPOT', font=subtitle, fill=colors['black'])

img.save(out)
print(out)
