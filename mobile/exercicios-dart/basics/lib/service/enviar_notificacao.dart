import 'package:ex_001/classes/Pessoa.dart';
import 'package:ex_001/enum/tipo_notificacao.dart';
import 'package:ex_001/service/implementacao/notificacao_push_notificaction.dart';
import 'package:ex_001/service/implementacao/notificacao_sms.dart';
import 'package:ex_001/service/notificacao_interface.dart';

class EnviarNotificacao {
  NotificacaoInterface? notificacao;

  void notificar(Pessoa pessoa) {
    switch (pessoa.gettipoNotificacao()) {
      case TipoNotificacao.sms:
        notificacao = NotificacaoSMS();
        break;

      case TipoNotificacao.pushNotification:
        notificacao = NotificacaoPushNotification();
        break;

      default:
        print("${pessoa.getNome()} não possui nenhum tipo de notificação");
    }

    notificacao?.enviarNotificacao(pessoa);
  }
}
