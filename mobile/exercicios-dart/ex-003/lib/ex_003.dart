import 'dart:collection';

ListQueue<int> pendulum(List<int> values) {
  var pendularValues = ListQueue<int>(values.length);
  values.sort();

  for (var i = 0; i < values.length; i++) {
    if (i.isEven) {
      ((values.length) ~/ 2);
      pendularValues.addFirst(values[i]);
    } else {
      pendularValues.addLast(values[i]);
    }
  }

  return pendularValues;
}
