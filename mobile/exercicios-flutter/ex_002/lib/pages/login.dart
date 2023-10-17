import 'package:flutter/material.dart';

class LoginPage extends StatefulWidget {
  const LoginPage({super.key});

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color.fromARGB(255, 0, 3, 43),
      body: SafeArea(
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 24),
          width: double.infinity,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Container(
                margin: const EdgeInsets.only(top: 48),
                width: 200,
                height: 200,
                color: Colors.amber,
                child: const Icon(
                  Icons.person_2,
                  size: 175,
                ),
              ),
              Container(
                alignment: Alignment.centerLeft,
                padding: const EdgeInsets.only(left: 12),
                width: double.infinity,
                margin: const EdgeInsets.only(top: 48),
                color: Colors.cyan,
                height: 50,
                child: const Row(
                  children: [
                    Text("Email:"),
                    Expanded(child: Text("exemplo@mail.com"))
                  ],
                ),
              ),
              Container(
                padding: const EdgeInsets.only(left: 12),
                alignment: Alignment.centerLeft,
                width: double.infinity,
                margin: const EdgeInsets.symmetric(vertical: 16),
                color: Colors.cyan,
                height: 50,
                child: const Row(
                  children: [
                    Text("Senha:"),
                    Expanded(child: Text("senha123")),
                  ],
                ),
              ),
              Expanded(
                child: Column(
                  children: [
                    Container(
                      alignment: Alignment.center,
                      width: double.infinity,
                      color: Colors.red,
                      height: 50,
                      child: const Text("login"),
                    ),
                    Container(
                      alignment: Alignment.center,
                      width: double.infinity,
                      margin: const EdgeInsets.symmetric(vertical: 16),
                      color: Colors.red,
                      height: 50,
                      child: const Text("Cadastro"),
                    )
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
