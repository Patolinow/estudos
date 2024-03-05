String bowling_pins(List<int> pins) {
  String bowlingPins = "I I I I\n I I I \n  I I  \n   I   ";

  for (var pin in pins) {
    switch (pin) {
      case 7:
        bowlingPins = bowlingPins.replaceRange(0, 1, " ");
        break;
      case 8:
        bowlingPins = bowlingPins.replaceRange(2, 3, " ");
        break;
      case 9:
        bowlingPins = bowlingPins.replaceRange(4, 5, " ");
        break;
      case 10:
        bowlingPins = bowlingPins.replaceRange(6, 7, " ");
        break;
      case 4:
        bowlingPins = bowlingPins.replaceRange(9, 10, " ");
        break;
      case 5:
        bowlingPins = bowlingPins.replaceRange(11, 12, " ");
        break;
      case 6:
        bowlingPins = bowlingPins.replaceRange(13, 14, " ");
        break;
      case 2:
        bowlingPins = bowlingPins.replaceRange(18, 19, " ");
        break;
      case 3:
        bowlingPins = bowlingPins.replaceRange(20, 21, " ");
        break;
      case 1:
        bowlingPins = bowlingPins.replaceRange(27, 28, " ");
        break;
      default:
        print("this pin doesn't exist");
    }
  }

  return bowlingPins;
}
