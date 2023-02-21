"use strict";
var thisString = "asdasdasd";
thisString = "newsa";
thisString.toLowerCase();
console.log(thisString);
var thisNumber = 9;
thisNumber += 2;
console.log(thisNumber);
var gameOver = true;
gameOver = false;
// Type Inference
var tvShow = "Olive Kitteridge";
// tvShow = 23;
var gyroLive = true;
gyroLive = false;
// gyroLive = "true"
var anything = "asdf";
anything = 123;
var movies = ["arrival", "aliens"];
var foundMovies;
for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
    var movie = movies_1[_i];
    if (movie === "arrival") {
        foundMovies = movie;
    }
}
// foundMovies = 2
