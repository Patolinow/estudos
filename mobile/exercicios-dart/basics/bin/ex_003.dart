import "package:ex_001/classes/pessoa_fisica.dart";
import 'package:ex_001/enum/tipo_notificacao.dart';
import 'package:ex_001/service/enviar_notificacao.dart';

void main(List<String> args) {
  // var p1 = Pessoa("fabio", 20);
  // print(p1.getNome());

  // p1._idade = 20; não funciona, nome é privado
  var junior = PessoaFisica("junior", "12312312", 20,
      tipoNotificacao: TipoNotificacao.sms);
  print(junior.gettipoNotificacao());

  // junior.setNome("nome");
  print(junior.getNome());

  var enviarNotificacao = EnviarNotificacao();
  enviarNotificacao.notificar(junior);
}
