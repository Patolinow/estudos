import 'package:ex_002/pages/home.dart';
import 'package:flutter/material.dart';

class LoginPage extends StatefulWidget {
  const LoginPage({super.key});

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  var email = TextEditingController(text: "exemplo@mail.com");
  String senha = "";
  bool isObscure = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey.shade50,
      body: SingleChildScrollView(
        child: ConstrainedBox(
          constraints:
              BoxConstraints(maxHeight: MediaQuery.of(context).size.height),
          child: SafeArea(
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 24),
              width: double.infinity,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  Padding(
                    padding: const EdgeInsets.only(top: 48),
                    child: Image.network(
                        "https://storage.googleapis.com/cms-storage-bucket/a9d6ce81aee44ae017ee.png",
                        height: 400),
                  ),
                  Container(
                    alignment: Alignment.centerLeft,
                    padding: const EdgeInsets.only(left: 12),
                    width: double.infinity,
                    margin: const EdgeInsets.only(top: 48),
                    height: 50,
                    child: TextField(
                      decoration: const InputDecoration(
                          hintText: "Email", prefixIcon: Icon(Icons.mail)),
                      controller: email,
                    ),
                  ),
                  Container(
                    padding: const EdgeInsets.only(left: 12),
                    alignment: Alignment.centerLeft,
                    width: double.infinity,
                    margin: const EdgeInsets.symmetric(vertical: 16),
                    height: 50,
                    child: TextField(
                      decoration: InputDecoration(
                          contentPadding: const EdgeInsets.only(top: 16),
                          hintText: "Senha",
                          prefixIcon: const Icon(Icons.lock),
                          suffixIcon: GestureDetector(
                              onTap: () {
                                setState(() {
                                  isObscure = !isObscure;
                                });
                              },
                              child: Icon(isObscure
                                  ? Icons.visibility_off
                                  : Icons.visibility))),
                      onChanged: (value) {
                        senha = value;
                      },
                      obscureText: !isObscure,
                    ),
                  ),
                  Expanded(
                    child: Column(
                      children: [
                        SizedBox(
                          width: double.infinity,
                          child: TextButton(
                            onPressed: () {
                              if (email.text.trim() != "" &&
                                  senha.trim() != "") {
                                ScaffoldMessenger.of(context).showSnackBar(
                                    const SnackBar(
                                        content: Text(
                                            "Login efetuado com sucesso!")));
                                Navigator.pushReplacement(
                                    context,
                                    MaterialPageRoute(
                                        builder: (context) =>
                                            const HomePage()));
                              } else {
                                ScaffoldMessenger.of(context).showSnackBar(
                                    const SnackBar(
                                        content:
                                            Text("Erro ao efetuar login")));
                              }
                            },
                            style: ButtonStyle(
                                backgroundColor: MaterialStatePropertyAll(
                                    Colors.blue.shade400),
                                shape: MaterialStatePropertyAll(
                                    RoundedRectangleBorder(
                                        borderRadius:
                                            BorderRadius.circular(12)))),
                            child: Text(
                              "login",
                              style: TextStyle(color: Colors.grey.shade50),
                            ),
                          ),
                        ),
                        Container(
                          alignment: Alignment.center,
                          width: double.infinity,
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
        ),
      ),
    );
  }
}
