"""
Dither an image to 1-bit black and white, the look used for chapter images.

Usage (needs Python 3 and Pillow: pip install pillow):

    python tools/dither.py photo.jpg assets/images/photo-dither.png
    python tools/dither.py photo.jpg assets/images/photo-dither.png --width 600

--width sets the size in pixels before dithering. Smaller numbers give
bigger, more visible dots once the browser scales the image up.
The CSS shows these images with `image-rendering: pixelated`,
so the dots stay crisp instead of blurring.
"""
import argparse
from PIL import Image


def dither(src, dest, width=640):
    image = Image.open(src).convert("L")          # grayscale
    if width and image.width > width:
        height = round(image.height * width / image.width)
        image = image.resize((width, height), Image.LANCZOS)
    image = image.convert("1")                    # Floyd–Steinberg by default
    image.save(dest, optimize=True)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Dither an image to 1-bit.")
    parser.add_argument("src")
    parser.add_argument("dest")
    parser.add_argument("--width", type=int, default=640)
    args = parser.parse_args()
    dither(args.src, args.dest, args.width)
