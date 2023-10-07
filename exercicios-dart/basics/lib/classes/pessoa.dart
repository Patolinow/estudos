import 'package:ex_001/enum/tipo_notificacao.dart';

abstract class Pessoa {
  String _nome = "";
  int _idade = 0;
  TipoNotificacao _tipoNotificacao = TipoNotificacao.none;

  Pessoa(String nome, int idade, {TipoNotificacao tipoNotificacao = TipoNotificacao.none}) {
    _nome = nome;
    _idade = idade;
    _tipoNotificacao = tipoNotificacao;
  }
  void settipoNotificacao(TipoNotificacao tipoNotificacao) {
    _tipoNotificacao = tipoNotificacao;
  }

  TipoNotificacao gettipoNotificacao() {
    return _tipoNotificacao;
  }

  void setNome(String nome) {
    _nome = nome;
  }

  String getNome() {
    return _nome;
  }

  void setidade(int idade) {
    _idade = idade;
  }

  int getidade() {
    return _idade;
  }
}
