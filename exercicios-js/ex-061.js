// Comparador (basicamente o que fica dentro dos parenteses do .sort())
var comparator = function(a,b) {
  let aFirstWord = a.split(" ")[0].split("")
  let bFirstWord = b.split(" ")[0].split("")

  if (aFirstWord.includes("a") || bFirstWord.includes("a")) {
    aFirstWord.includes("a") ? aFirstWord = ["1"] : bFirstWord = ["1"]
  }

  if (aFirstWord.includes("O") || bFirstWord.includes("O")) {
    aFirstWord.includes("O") ? aFirstWord = ["1", "3"] : bFirstWord = ["1", "3"]
  }

  return Number(aFirstWord.join("")) < Number(bFirstWord.join("")) ? 0 : -1
}

// Embaralhador
var shuffle = function(list) {
  var shuffled = []
  for (var i = 0; i < list.length; i++) shuffled.push(list[i]);
  for (var i = 0; i < shuffled.length; i++) {
    if (Math.random() > 0.5) {
      j = (i+3) % shuffled.length;
      // swap lines i & j
      var tmp = shuffled[i]
      shuffled[i] = shuffled[j]
      shuffled[j] = tmp
    }
  }
  return shuffled
}

// Linhas da musica que deve ser organizada após ser embaralhada
var lines = [
  "On the 12th day of Christmas my true love gave to me",
  "12 drummers drumming,",
  "11 pipers piping,",
  "10 lords a leaping,",
  "9 ladies dancing,",
  "8 maids a milking,",
  "7 swans a swimming,", 
  "6 geese a laying,", 
  "5 golden rings,", 
  "4 calling birds,",
  "3 French hens,", 
  "2 turtle doves and", 
  "a partridge in a pear tree."    
];

// Arrumando alguns nomes para ficarem mais facilmente entendiveis
var shuffled = shuffle(lines);
var actual = shuffled.sort(comparator);
var expected = lines;

// Teste de funcionalidade
function test(x, y) {
 (x == y ? console.log(`Christmas is cancelled! expected: \n \n${x}\n\n to deeply equal to: \n\n${y}\n`) : console.log("Congratulations! Chirstmas was saved! now we can sing \n\n" + x.join("\n")))
}

test(actual, expected)