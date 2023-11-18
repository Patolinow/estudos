<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>conversor de moedas</title>
</head>
<body>
  <?php 
  $valor = $_POST["valor"] ?? 0;
  $apiDolar = file_get_contents("https://economia.awesomeapi.com.br/last/USD-BRL");
  $dolar = json_decode($apiDolar, true)["USDBRL"]["bid"];
  $valorConvertido = number_format($valor / $dolar, 2);
  ?>
  <main>
  <h2>Conversor de moedas 3.0</h2>

    <form action="<?=$_SERVER["PHP_SELF"] ?>" method="post" >
      <label for="valor">Quantos R$ você tem na carteira?</label>
      <input type="number" name="valor" id="valor" step="0.01">
      <button type="submit">Converter</button>
    </form>
  </main>
  <section>
    <h2>Conversor de moedas 3.0</h2>
    <p>Seus R$<?=number_format($valor,2,",",".")?> reais equivalem a $<?=$valorConvertido?> dólares.</p>
  </section>
</body>
</html>