<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>hello world</title>
</head>

<body>
  <h1>
    <?= print "olá mundo! \u{1F30E}"?>
  </h1>
  <h2>dados do servidor</h2>
  <p>
    <?php 
    $nome = "fabio";
    echo "<p>o meu nome é $nome </p>";
    phpinfo();
    ?>
  </p>
</body>

</html>