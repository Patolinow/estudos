import 'package:ex_001/classes/viacep.dart';
import 'package:ex_001/ex_001.dart';
import 'package:mocktail/mocktail.dart';
import 'package:test/test.dart';

void main() {
  group("calculate trilogy", () {
    var values = {
      6: 42,
      7: greaterThan(41),
      600: throwsA(TypeMatcher<ArgumentError>())
    };

    values.forEach((input, expected) {
      test("calculate $input", () {
        expect(
            input != 600 ? calculate(input) : () => calculate(input), expected);
      });
    });
  });

  test("retorna cep", () async {
    MockViacep mockViacep = MockViacep();
    when( () => mockViacep.retornarCep("01001000"))
        .thenAnswer((invocation) => Future.value({
              "cep": "01001-000",
              "logradouro": "Praça da Sé",
              "complemento": "lado ímpar",
              "bairro": "Sé",
              "localidade": "São Paulo",
              "uf": "SP",
              "ibge": "3550308",
              "gia": "1004",
              "ddd": "11",
              "siafi": "7107"
            }));
    var body = await mockViacep.retornarCep("01001000");
    print(body);
    expect(body["bairro"], equals("Sé"));
  });
}

class MockViacep extends Mock implements Viacep {}
