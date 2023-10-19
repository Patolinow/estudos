import 'package:ex_002/pages/dados_cadastrais.dart';
import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  int numeroGerado = 0;
  int quantidadeCliques = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Home")),
      backgroundColor: Colors.white,
      drawer: SafeArea(
          child: Drawer(
              child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            InkWell(
                child: const Text("Dados cadastrais"),
                onTap: () {
                  Navigator.pop(context);
                  Navigator.push(
                      context,
                      MaterialPageRoute(
                          builder: (context) => const DadosCadastraisPage(
                                texto: "Cadastro",
                              )));
                }),
            const Divider(),
            const Text("Configurações"),
            const Divider(),
            const Text("Termos de uso")
          ],
        ),
      ))),
      body: PageView(
        children: [
          Container(
            color: Colors.blueAccent,
          ),
          Container(
            color: Colors.amberAccent,
          ),
          Container(
            color: Colors.deepOrangeAccent,
          )
        ],
      ),
    );
  }
}
