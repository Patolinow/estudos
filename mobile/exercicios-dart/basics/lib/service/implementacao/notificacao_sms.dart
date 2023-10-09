import 'package:ex_001/classes/Pessoa.dart';
import 'package:ex_001/service/notificacao_interface.dart';

class NotificacaoSMS implements NotificacaoInterface {

  @override
  enviarNotificacao(Pessoa pessoa) {
    print("enviando sms para ${pessoa.getNome()}");
  }
}
