<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>Resultado</title>
</head>

<body>
  <header>
    <h1>Resultado do processamento</h1>
  </header>
  <main>
    <p>
      <?php
      // $_GET + $_POST + $_COOKIE = $_REQUEST
      // var_dump($_REQUEST); 
      
      $name = $_GET["nome"] ?? "Usuário";
      $surname = $_GET["sobrenome"] ?? "";

      print "É um prazer te conhecer $name $surname!";
      ?>
    </p>

    <p><a href="javascript:history.go(-1)">Voltar</a></p>
  </main>
</body>

</html>