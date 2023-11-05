<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>tipos primitivos</title>
</head>

<body>
  <h1>testes de primitivos</h1>

  <?php
  // no início de um número:
  
  // 0x = hexadecimal
  // 0b = binário
  // 0 = octal
  
  $octal = 010; //8
  $hexadecimal = 0xa1; // 161
  $binario = 0b11001; // 25
  
  $elevado = 3e2; // 3 elevado a 10^2
  
  var_dump($octal);

  $solteiro = true;
  $casado = false;

  // false n imprime nd, enquanto false imprime 1 por conta dos valores falsy e truthy
  print "<p>ele está solteiro? $solteiro, então ele é casado $casado </p>";

  // interpretação de strings n funcionam em single quote: '' só em double quote: ""
  $nome = 'fabio';
  $sobrenome = "neves";
  const ESTADO = "BA";

  // so é possivel interpolar variaveis numa string
  print "<p>$nome $sobrenome \u{1F596} e moro no estado ESTADO </p>"; // fabio neves 🖖 e moro no estado ESTADO
  print '<p>$nome $sobrenome \u{1F596} e moro no estado </p>'.ESTADO; // $nome $sobrenome \u{1F596} e moro no estado BA

  // string hereDoc
  echo <<<TEST
  alguma coisa
            $nome
  TEST;

  // string nowDoc
  echo <<<'TEST'
  alguma coisa
            $nome
  TEST;

  
  

  ?>
</body>

</html>