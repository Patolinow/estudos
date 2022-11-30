function filter_list(l) {
  return l.filter(element => typeof(element) != "string")
}

console.log(filter_list([1, 'a', 'b', 0, 15, '1', '123']))