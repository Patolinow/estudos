import 'dart:convert';
import 'dart:io';

import 'package:ex_001/exceptions/nome_invalido_exception.dart';
import 'package:ex_001/models/aluno.dart';

void main(List<String> args) {
  print("digite o nome do aluno:");
  String nome = lerLinha() ?? "";
  var aluno = Aluno(nome);
  double nota = 0;

  try {
    if (nome.trim() == "") {
      throw NomeInvalidoException().error();
    }
  } on NomeInvalidoException {
    print(NomeInvalidoException);
    exit(0);
  } catch (e) {
    print(e);
    exit(0);
  }

  do {
    print("digite uma nota:");
    nota = double.parse(lerLinha() ?? "0");

    aluno.addNota(nota);
  } while (nota != 0);

  double media =
      aluno.notas.reduce((value, total) => value + total) / aluno.notas.length;
  print("prabéns ${aluno.nome} você ficou com a média $media!");
}

String? lerLinha() {
  return stdin.readLineSync(encoding: utf8);
}
