
int calculate(int number) {
  if (number > 100) {
    throw ArgumentError("number too high");
  }
  return number * 7;
}


