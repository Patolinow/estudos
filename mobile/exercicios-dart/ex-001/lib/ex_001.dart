String getOrder(String input) {
  String orders = "";
  var menu = [
    "burger",
    "fries",
    "chicken",
    "pizza",
    "sandwich",
    "onionrings",
    "milkshake",
    "coke"
  ];

  for (var item in menu) {
    RegExp itemRegex = RegExp(item);
    int itemFrequency = itemRegex.allMatches(input).length;
    String order = "${item.replaceFirst(item[0], item[0].toUpperCase())} ";

    while (itemFrequency > 0) {
      itemFrequency--;
      orders = orders + order;
    }
  }

  return orders.trimRight();
}
