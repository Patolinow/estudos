let thisString: string = "asdasdasd";
thisString = "newsa";
thisString.toLowerCase();
console.log(thisString);

let thisNumber: number = 9;
thisNumber += 2;
console.log(thisNumber);

let gameOver: boolean = true;
gameOver = false;

// Type Inference
let tvShow = "Olive Kitteridge";
// tvShow = 23;

let gyroLive = true;
gyroLive = false;
// gyroLive = "true"

let anything: any = "asdf";
anything = 123;

const movies = ["arrival", "aliens"];

let foundMovies: string;

for (const movie of movies) {
  if (movie === "arrival") {
    foundMovies = movie
  }
}

// foundMovies = 2
