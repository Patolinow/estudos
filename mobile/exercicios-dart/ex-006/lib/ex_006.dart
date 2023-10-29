List<int> clock(int pagesNumber, List<int> referenceList) {
  List<int> pagesId = [];
  List<bool> pagesRelevance = List.filled(pagesNumber, false);
  int cycle = 0;

  for (var reference in referenceList) {
    var hasCurrentPage = pagesId.contains(reference);
    cycle = cycle < pagesNumber ? cycle : 0;

    if (pagesId.length < pagesNumber && !hasCurrentPage) {
      pagesId.add(reference);
      cycle++;
      continue;
    }

    if (hasCurrentPage) {
      int indexOfPageId = pagesId.indexOf(reference);
      pagesRelevance[indexOfPageId] = true;
      continue;
    }

    while (!pagesId.contains(reference)) {
      if (!pagesRelevance[cycle]) {
        pagesId[cycle] = reference;
      } else {
        pagesRelevance[cycle] = false;
      }

      cycle = ++cycle < pagesNumber ? cycle++ : 0;
    }
  }

  while (pagesId.length < pagesNumber) {
    pagesId.add(-1);
  }

  return pagesId;
}
