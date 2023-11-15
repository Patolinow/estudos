<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>Exercicio PHP</title>
</head>
<body>
  <main>
    <pre>
      <?php 
      setcookie("dia-da-semana", "segunda", time() + 3600);
      session_start();
      $_SESSION["teste"] = "funcionou!";

      print "<h1>SuperGlobal GET </h1>";
      var_dump($_GET);

      print "<h1>SuperGlobal POST </h1>";
      var_dump($_POST);

      print "<h1>SuperGlobal REQUEST </h1>";
      var_dump($_REQUEST);

      print "<h1>SuperGlobal COOKIE </h1>";
      var_dump($_COOKIE);

      print "<h1>SuperGlobal SESSION </h1>";
      var_dump($_SESSION);

      print "<h1>SuperGlobal ENV </h1>";
      var_dump($_ENV);

      print "<h1>SuperGlobal SERVER </h1>";
      var_dump($_SERVER);

      print "<h1>SuperGlobal GLOBALS </h1>";
      var_dump($GLOBALS);

      ?>
    </pre>
  </main>
</body>
</html>