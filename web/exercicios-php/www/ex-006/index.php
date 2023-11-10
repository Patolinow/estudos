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
    function comp($a1, $a2) {
      $isEqual = true;


      if ($a1 == null || $a2 == null) {
        return false;
      }

      for ($i = 0; $i < sizeof($a1); $i++) {
        $isEqualOrSquare = in_array($a1[$i], $a2) || in_array($a1[$i] * $a1[$i], $a2);

        if (!$isEqualOrSquare) {
          $isEqual = false;
          break;
        }
      }

      return $isEqual;
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
    print(comp($a1, $a2) ? "true" : "false") . " should be false";

    ?>
  </p>

</body>

</html>