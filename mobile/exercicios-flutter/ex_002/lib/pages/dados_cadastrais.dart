import 'package:ex_002/repositories/linguagens_repository.dart';
import 'package:ex_002/repositories/nivel_repository.dart';
import 'package:ex_002/shared/widgets/label_text.dart';
import 'package:flutter/material.dart';
import 'package:date_field/date_field.dart';

class DadosCadastraisPage extends StatefulWidget {
  const DadosCadastraisPage({super.key});

  @override
  State<DadosCadastraisPage> createState() => _DadosCadastraisPageState();
}

class _DadosCadastraisPageState extends State<DadosCadastraisPage> {
  var nameController = TextEditingController();
  var dateController = TextEditingController();
  var selectedDate = DateTime(DateTime.now().year - 18).toLocal();
  var minAge = DateTime(
      DateTime.now().year - 13, DateTime.now().month, DateTime.now().day);
  var nivelRepository = NivelRepository();
  var linguagemRepository = LinguagensRepository();
  List<String> niveis = [];
  List<String> linguagens = [];
  String nivelSelecionado = "";
  List<String> linguagensSelecionadas = [];
  double salarioEscolhido = 2000;
  int tempoExperienciaSelecionado = 0;
  bool salvando = false;

  List<DropdownMenuEntry<int>> criaTempo() {
    List<DropdownMenuEntry<int>> tempoExperienciaList = [];

    for (var i = 0; i < 50; i++) {
      tempoExperienciaList.add(DropdownMenuEntry(value: i, label: "$i"));
    }
    return tempoExperienciaList;
  }

  @override
  void initState() {
    niveis = nivelRepository.retornaNiveis();
    linguagens = linguagemRepository.retornaLinguagens();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Dados Cadastrais")),
      body: salvando
          ? const Center(child: CircularProgressIndicator())
          : ListView(
              padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 16),
              children: [
                  TextField(
                    decoration: const InputDecoration(label: Text("Nome")),
                    controller: nameController,
                  ),
                  DateTimeField(
                    onDateSelected: (date) {
                      setState(() {
                        selectedDate = date.toLocal();
                      });
                      dateController.text = selectedDate.toString();
                    },
                    firstDate: DateTime(1900),
                    selectedDate: selectedDate,
                    lastDate: minAge,
                    mode: DateTimeFieldPickerMode.date,
                    decoration: const InputDecoration(
                        label: Text(
                      "Data de Nascimento",
                    )),
                  ),
                  const LabelText(label: "Nivel de experiência"),
                  Column(
                    children: niveis
                        .map((nivel) => RadioListTile(
                              title: Text(nivel),
                              value: nivel,
                              groupValue: nivelSelecionado,
                              selected: nivelSelecionado == nivel,
                              onChanged: (value) {
                                setState(() {
                                  nivelSelecionado = value ?? "";
                                });
                              },
                            ))
                        .toList(),
                  ),
                  const LabelText(label: "Linguagens favoritas"),
                  Column(
                      children: linguagens
                          .map((linguagem) => CheckboxMenuButton(
                              value: linguagensSelecionadas.contains(linguagem),
                              onChanged: (isSelected) {
                                setState(() {
                                  if (isSelected!) {
                                    linguagensSelecionadas.add(linguagem);
                                  } else {
                                    linguagensSelecionadas.remove(linguagem);
                                  }
                                });
                              },
                              child: Text(linguagem)))
                          .toList()),
                  DropdownMenu(dropdownMenuEntries: criaTempo(), hintText: "0"),
                  const LabelText(label: "Pretenção Salarial"),
                  Slider(
                    min: 1000,
                    max: 10000,
                    value: salarioEscolhido,
                    label: "${salarioEscolhido.floor()}",
                    divisions: 18,
                    onChanged: (value) {
                      setState(() {
                        salarioEscolhido = value;
                      });
                    },
                  ),
                  TextButton(
                      onPressed: () {
                        debugPrint("salvo");

                        setState(() {
                          salvando = true;
                        });

                        Future.delayed(const Duration(seconds: 3), () {
                          setState(() {
                            Navigator.pop(context);
                          });
                        });
                      },
                      child: const Text("Salvar"))
                ]),
    );
  }
}
