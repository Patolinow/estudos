class InputInvalidoException implements Exception {
  String input = "";

  InputInvalidoException(this.input);

  String error() => "$input invalido, preencha-o corretamente";
}
