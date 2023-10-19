import 'package:ex_002/pages/dados_cadastrais.dart';
import 'package:ex_002/pages/pagina1.dart';
import 'package:ex_002/pages/pagina2.dart';
import 'package:ex_002/pages/pagina3.dart';
import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  int numeroGerado = 0;
  int quantidadeCliques = 0;
  int posicaoIndex = 0;
  var pageController = PageController(initialPage: 0);

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
      body: Column(
        children: [
          Expanded(
            child: PageView(
              controller: pageController,
              onPageChanged: (value) {
                setState(() {
                  posicaoIndex = value;
                });
              },
              children: const [
                Pagina1(),
                Pagina2(),
                Pagina3(),
              ],
            ),
          ),
          BottomNavigationBar(
              currentIndex: posicaoIndex,
              onTap: (value) {
                pageController.animateToPage(value,
                    duration: const Duration(milliseconds: 1500),
                    curve: Curves.bounceOut);
              },
              items: const [
                BottomNavigationBarItem(label: "home", icon: Icon(Icons.home)),
                BottomNavigationBarItem(
                    label: "profile", icon: Icon(Icons.person)),
                BottomNavigationBarItem(
                  label: "config",
                  icon: Icon(Icons.settings),
                )
              ])
        ],
      ),
    );
  }
}
