import 'dart:math';

class GeradorNumeroAleatorio {
  static int randomNumber(int numeroMaximo) {
    return Random().nextInt(numeroMaximo);
  }
}
