var dog = {
    name: "Elton",
    surname: "Jorge",
    age: 12
};
function printName(dog) {
    console.log("".concat(dog.name, " ").concat(dog.surname, " with ").concat(dog.age, " years"));
}
printName(dog);
var coordinate = { x: 25, y: 21 };
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
var thisPoint = {
    x: 1,
    y: 5,
    z: 23
};
console.log(randomCoordinate());
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
function calculatePayout(song) {
    return song.numStream * 0.0033;
}
var song = {
    title: "Amazing Melody",
    artist: "Yung Li",
    numStream: 3212441,
    credits: {
        producer: "Castro brothers",
        writer: "Alejandro"
    }
};
function printSong(song) {
    console.log(song.title + " - " + song.artist);
}
console.log(calculatePayout(song));
printSong(song);
var newUser = {
    id: 23242,
    username: "cakiguru"
};
var happyFace = {
    radius: 5,
    color: "yellow"
};
var christy = {
    numLives: 9,
    breed: "Husky",
    age: 5,
    live: true
};
