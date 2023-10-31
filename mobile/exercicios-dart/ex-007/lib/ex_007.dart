String rot(String currentString) {
  return currentString.split("").reversed.join("");
}

String selfieAndRot(String currentString) {
  final int wordsLength = currentString.indexOf("\n");
  final String dots = "." * wordsLength;
  final RegExp stringRegex = RegExp("[a-zA-Z]{$wordsLength}");

  String dotedCurrentString = currentString.splitMapJoin(stringRegex,
      onMatch: (matched) => "${matched.group(0)}$dots");

  return "$dotedCurrentString\n${rot(dotedCurrentString)}";
}

String oper(String Function(String T) fct, String s) {
  return fct(s);
}
