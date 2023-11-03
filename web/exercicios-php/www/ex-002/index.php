<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>php</title>
</head>

<body>
  <h1>exemplo de php</h1>
  <p>
    <?php
    date_default_timezone_set("America/Sao_Paulo");
    echo "hoje é dia " . date("d/M/Y");
    echo " e a hora é " . date("G:i:s");
    ?>
  </p>
  <p>
    <?php
    $nome = "alguem";
    $sobrenome = "aí";
    const PAIS = "Brasil";
    const NOME_COMPLETO = "$nome $sobrenome";

    print "Olá $nome $sobrenome! Você é do " . PAIS;
    ?>
  </p>
</body>

</html>