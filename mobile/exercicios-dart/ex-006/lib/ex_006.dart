List<int> clock(int pagesNumber, List<int> referenceList) {
  List<int> pagesId = [];
  List<int> pagesRelevance = List.filled(pagesNumber, 0);
  int cycle = 0;

// Refazer isso e usar 2 listas diferentes ao invés do map
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
      pagesRelevance[indexOfPageId]++;
      continue;
    }

    while (!pagesId.contains(reference)) {
      if (pagesRelevance[cycle] == 0) {
        pagesId[cycle] = reference;
      } else {
        pagesRelevance[cycle]--;
      }

      cycle = ++cycle < pagesNumber ? cycle++ : 0;
    }
  }

  while (pagesId.length < pagesNumber) {
    pagesId.add(-1);
  }

  return pagesId;
}
