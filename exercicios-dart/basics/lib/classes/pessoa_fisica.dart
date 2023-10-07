import 'package:ex_001/enum/tipo_notificacao.dart';

import './Pessoa.dart';

class PessoaFisica extends Pessoa {
  String _cpf = "";

  PessoaFisica(String nome, String cpf, int idade, {TipoNotificacao tipoNotificacao = TipoNotificacao.none}) : super(nome, idade, tipoNotificacao: tipoNotificacao) {
    _cpf = cpf;
  }

  void setcpf(String cpf) {
    _cpf = cpf;
  }

  String getcpf() {
    return _cpf;
  }
}
