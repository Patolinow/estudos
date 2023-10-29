import 'package:ex_006/ex_006.dart';
import 'package:test/test.dart';

void main() {
  
  group("Basic Tests", () {
    
    test("Basic Tests", () {
      List<List<int>> referenceLists = [
        [1, 2, 3, 4, 5, 5, 3, 6, 7, 8],
        [1, 2, 3, 4, 2, 5],
        [1, 2],
        [6, 3, 6, 3, 2, 5, 1, 6],
        [],
        [1, 2, 3, 3, 4, 5],
        [14, 4, 5, 6, 10, 20, 20, 18, 10, 19, 18, 1, 17, 10, 12, 19, 3, 21, 24, 3, 22, 1, 12, 1, 8, 1, 3, 24, 13, 9, 18]
      ];
    
      List<List<int>> expectedLists = [
        [5, 8, 3, 7],
        [4, 2, 5],
        [1, 2, -1, -1],
        [1, 6, 5],
        [-1, -1, -1, -1, -1],
        [5],
        [9, 18, 24, 13]
      ];
      
      List<int> ns = [4, 3, 4, 3, 5, 1, 4];
      
      for (int i = 0; i < referenceLists.length; i++) {
        expect(clock(ns[i], [...referenceLists[i]]), equals(expectedLists[i]), reason: "N = ${ns[i]}, REFERENCE LIST = ${referenceLists[i].toString()}");
      }
    });
  });
}
