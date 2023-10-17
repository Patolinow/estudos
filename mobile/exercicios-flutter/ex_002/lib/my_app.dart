import 'package:ex_002/pages/home.dart';
import 'package:ex_002/pages/login.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: const LoginPage(),
      // tira o debug banner
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
          primarySwatch: Colors.red, textTheme: GoogleFonts.robotoTextTheme()),
    );
  }
}
