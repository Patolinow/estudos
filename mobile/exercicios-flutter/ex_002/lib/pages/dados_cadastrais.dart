import 'package:flutter/material.dart';

class DadosCadastraisPage extends StatelessWidget {
  final String texto;
  const DadosCadastraisPage({super.key, required this.texto});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Dados Cadastrais")),
      body: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [Text(texto)]),
    );
  }
}
