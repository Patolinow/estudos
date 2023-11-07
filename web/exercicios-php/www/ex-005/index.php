<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>aritmética</title>
</head>

<body>
  <h1>Algumas curiosidades aritméticas</h1>
  <p>
    <?php
    // no php + é sempre pra somar e o . é pra concatenar
    var_dump("2.5" + "2"); // float(4.5)

    // no php antigo, ele converte as primeiras strings para números na soma de 2
    // strings com letras, hj em dia da erro (por isso está comentado )
    // var_dump("10 doláres" + "101 dalmatas") // float(111)

    // antes da versão 5.6 não existia o operador de potência
    $r = 5 ** 2;
    print"$r"; // 2

      ?>
  </p>

</body>

</html>