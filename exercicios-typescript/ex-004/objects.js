"use strict";
const dog = {
    name: "Elton",
    surname: "Jorge",
    age: 12,
};
function printName(dog) {
    console.log(`${dog.name} ${dog.surname} with ${dog.age} years`);
}
printName(dog);
let coordinate = { x: 25, y: 21 };
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
const thisPoint = {
    x: 1,
    y: 5,
    z: 23,
};
console.log(randomCoordinate());
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
function calculatePayout(song) {
    return song.numStream * 0.0033;
}
const song = {
    title: "Amazing Melody",
    artist: "Yung Li",
    numStream: 3212441,
    credits: {
        producer: "Castro brothers",
        writer: "Alejandro",
    },
};
function printSong(song) {
    console.log(song.title + " - " + song.artist);
}
console.log(calculatePayout(song));
printSong(song);
const newUser = {
    id: 23242,
    username: "cakiguru",
};
const happyFace = {
    radius: 5,
    color: "yellow"
};
const christy = {
    numLives: 9,
    breed: "Husky",
    age: 5,
    live: true
};
//# sourceMappingURL=objects.js.map