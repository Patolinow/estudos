import 'package:ex_002/service/gerador_numero_aleatorio.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

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
      appBar: AppBar(
        title: const Text("My app"),
      ),
      body: Container(
        width: double.infinity,
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
        child: SizedBox(
          height: 205,
          width: 100,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              const Text("Ações do usuário"),
              Text("Foi clicado $quantidadeCliques vezes",
                  style: GoogleFonts.anticSlab(fontSize: 32)),
              Text("O numero gerado foi $numeroGerado",
                  style: GoogleFonts.racingSansOne(fontSize: 24)),
              const Row(
                children: [
                  Expanded(
                    flex: 2,
                    child: Text("something"),
                  ),
                  Expanded(child: Text("another thing")),
                  Expanded(child: Text("21"))
                ],
              )
            ],
          ),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          setState(() {
            numeroGerado = GeradorNumeroAleatorio.randomNumber(1000);
            quantidadeCliques++;
          });
        },
        child: const Icon(Icons.casino_rounded),
      ),
    );
  }
}
