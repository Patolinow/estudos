import "package:ex_002/classes/pessoa.dart";
import "package:ex_002/exceptions/input_invalido_exception.dart";
import "package:ex_002/services/calcular_imc.dart";
import "package:ex_002/utils/utils.dart";
import 'dart:io';

void main(List<String> arguments) {
  String nome = "";
  double peso = 0;
  double altura = 0;

  try {
    print('Qual é o seu nome?');
    nome = Utils.lerLinha() ?? "";

    if (nome.trim() == "") {
      throw InputInvalidoException("nome");
    }
  } on InputInvalidoException catch (e) {
    print(e.error());
    exit(0);
  }

  try {
    print('Qual o seu peso em quilos?');
    peso = double.parse(Utils.lerLinha() ?? "0");

    if (peso == 0) {
      throw InputInvalidoException("peso");
    }
  } on InputInvalidoException catch (e) {
    print(e.error());
    exit(0);
  } on FormatException catch (e) {
    print(e.message);
    exit(0);
  }

  try {
    print('Qual a sua altura em metros?');
    altura = double.parse(Utils.lerLinha() ?? "0");

    if (peso == 0) {
      throw InputInvalidoException("altura");
    }
  } on InputInvalidoException catch (e) {
    print(e.error());
    exit(0);
  } on FormatException catch (e) {
    print(e.message);
    exit(0);
  }

  var pessoa = Pessoa(nome, peso, altura);
  double numeroIMC = CalcularIMC.formula(pessoa.peso, pessoa.altura);
  String resultadoIMC = "";

  switch (numeroIMC) {
    case < 16:
      resultadoIMC = "Magreza extrema";
      break;
    case < 17:
      resultadoIMC = "Magreza moderada";
      break;
    case < 18.5:
      resultadoIMC = "Magreza leve";
      break;
    case < 25:
      resultadoIMC = "Saudável";
      break;
    case < 30:
      resultadoIMC = "Sobrepeso";
      break;
    case < 35:
      resultadoIMC = "Obesidade grau I";
      break;
    case < 40:
      resultadoIMC = "Obesidade grau II";
      break;
    case >= 40:
      resultadoIMC = "Obesidade grau III";
      break;

    default:
      print("resultado inválido, por favor preencha novamente");
      exit(0);
  }

  print(
      "O resultado de seu IMC é: $resultadoIMC com uma pontuação de ${numeroIMC.toStringAsFixed(2)}, obrigado por usar nosso sistema ${pessoa.nome}.");
}
