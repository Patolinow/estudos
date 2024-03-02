int duplicateCount(String text) {
  List<String> splitedText = text.toLowerCase().split("");
  var duplicatedCharactersMap = {for (var char in splitedText) char: 0};
  int totalDuplicatedCount = 0;

  for (var char in splitedText) {
    duplicatedCharactersMap.update(char, (value) => value = value + 1);
  }

  duplicatedCharactersMap.forEach((key, value) {
    if (value > 1) {
      totalDuplicatedCount++;
    }
  });
  
  return totalDuplicatedCount;
}
