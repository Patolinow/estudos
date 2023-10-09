class Aluno {
  String nome = "";
  final List<double> notas = [];

  Aluno(this.nome);

  void addNota(double nota) {
    notas.add(nota);
  }
}
