function contar(n1,n2,n3) {
    if (n1 < n2 && n2 < n3) {
      return "É uma sequência crescente"
    }
    else {
      return "Não é uma sequência crescente"
    }
  
}
console.log(contar(1,3,5))