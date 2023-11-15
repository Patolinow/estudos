<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>

  <p>
    <?php
    function comp($numbers, $squareNumbers) {

      if (is_null($numbers) || is_null($squareNumbers)) {
        return false;
      }

      $numbersMap = array_map( fn($item) => $item * $item,$numbers);
  
      sort($numbersMap ,SORT_NUMERIC);
      sort($squareNumbers ,SORT_NUMERIC);

      return $numbersMap == $squareNumbers;
    }
    // class AreTheyTheSameTest extends TestCase
// {
//     private function revTest($actual, $expected) {
//         $this->assertSame($expected, $actual);
//     }
//     public function testBasics() {        
//         $a1 = [121, 144, 19, 161, 19, 144, 19, 11];
//         $a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
//         $this->revTest(comp($a1, $a2), true);
//         $a1 = [121, 144, 19, 161, 19, 144, 19, 11];
//         $a2 = [11*21, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
//         $this->revTest(comp($a1, $a2), false);
//     }
// }
    
    $a1 = [121, 144, 19, 161, 19, 144, 19, 11];
    $a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
    print(comp($a1, $a2) ? "true" : "false") . " should be true AND ";

    $a1 = [121, 144, 19, 161, 19, 144, 19, 11];
    $a2 = [11 * 21, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
    print(comp($a1, $a2) ? "true" : "false") . " should be false AND ";

    $a1 = [121, 144, 19, 161, 19, 144, 19, 11];
    $a2 = [121, 14641, 20736, 36100, 25921, 361, 20736, 361];
    print(comp($a1, $a2) ? "true" : "false") . " should be false ";

    ?>
  </p>

</body>

</html>