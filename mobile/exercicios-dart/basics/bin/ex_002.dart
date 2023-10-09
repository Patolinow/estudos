void main(List<String> arguments) {
  // print(fatorial(6));


  printName("fabio", surname: "neves");
}

int fatorial(int numero) {
  if (numero == 1) {
    return numero;
  }

  return numero * fatorial(numero - 1);
}

void printName(String name, {String? surname = ""}) {
  print("my name is $name $surname");
}
