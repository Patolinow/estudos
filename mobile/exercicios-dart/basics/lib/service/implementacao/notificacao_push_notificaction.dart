import 'package:ex_001/classes/Pessoa.dart';
import 'package:ex_001/service/notificacao_interface.dart';

class NotificacaoPushNotification implements NotificacaoInterface {
  @override
  enviarNotificacao(Pessoa pessoa) {
    print("enviando notificação push para ${pessoa.getNome()}");
  }
}
