import 'package:ex_002/classes/pessoa.dart';
import 'package:ex_002/services/calcular_imc.dart';
import 'package:test/test.dart';

void main() {
  group("Propriedades da classe Pessoa", () => {
    test("Pessoa possui nome", () => {
      expect(Pessoa("Joao", 80, 1.75).nome, equalsIgnoringCase("joao"))
    }),
    test("Pessoa possui peso", () => {
      expect(Pessoa("Jonas", 90, 1.85).peso, equals(90))
    }),
    test("Pessoa possui altura", () => {
      expect(Pessoa("Jacarias", 39, 1.82).altura, equals(1.82))
    })
  });

  test('Calcula IMC', () {
    expect(CalcularIMC.formula(120, 2), equals(30));
  });
}
