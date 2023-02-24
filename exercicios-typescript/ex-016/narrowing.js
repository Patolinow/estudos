"use strict";
function triplify(value) {
    if (typeof value === "string") {
        return value.repeat(3);
    }
    return value * 3;
}
const thisNum = triplify(2);
const thiString = triplify("hi");
console.log(thisNum, thiString);
function equalityNarrowing(a, b) {
    if (a == b) {
        a;
        b;
    }
}
function getRuntime(media) {
    if ("numEpisodes" in media) {
        return media.numEpisodes * media.episodeDuration;
    }
    return media.duration;
}
const amadeus = {
    title: "Amadeus",
    duration: 170,
};
console.log(getRuntime(amadeus));
function printFullDate(date) {
    if (!(date instanceof Date)) {
        date = new Date();
    }
    console.log(date.getFullYear);
}
class Users {
    username;
    constructor(username) {
        this.username = username;
    }
}
class Company {
    name;
    constructor(name) {
        this.name = name;
    }
}
function printsName(entity) {
    if (entity instanceof Company) {
        entity.name;
    }
}
function isCat(animal) {
    return animal.numLives !== undefined;
}
function makeNoise(animal) {
    if (isCat(animal)) {
        return "Meow";
    }
    return "Bark";
}
function getFarmAnimalSound(animal) {
    switch (animal.__type) {
        case "Pig":
            return "Oink!";
        case "Cow":
            return "Moo!";
        case "Rooster":
            return "Co Co";
        default:
            const sNGH = animal;
    }
}
const stevie = {
    name: "Stevie Chicks",
    weight: 5,
    age: 24,
    __type: "Rooster",
};
console.log(getFarmAnimalSound(stevie));
