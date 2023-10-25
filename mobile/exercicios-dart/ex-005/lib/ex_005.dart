String rgb(int r, int g, int b) {
  var rgb = [r, g, b].map((color) {
    int colorFixed = color.clamp(0, 255);
    String hexColor = colorFixed.toRadixString(16).toUpperCase();

    return hexColor.padLeft(2, "0");
  });

  return rgb.join();
}
