"use strict";
const nums = [];
const colored = [];
function identity(item) {
    return item;
}
identity(nums);
identity(colored);
function pickRandom(item) {
    return item[Math.floor(Math.random() * item.length)];
}
console.log(pickRandom([1, 2, 5, 8]));
function merge(obj1, obj2) {
    return {
        ...obj1,
        ...obj2,
    };
}
const merged = merge({ name: "colt" }, { pets: ["blue", "red", 5] });
console.log(merged);
function printDoubleLength(thing) {
    return thing.length * 2;
}
console.log(printDoubleLength("yes"));
function makeEmptyList() {
    return [];
}
const makeStrings = makeEmptyList();
class Playlist {
    queue = [];
    add(el) {
        this.queue.push(el);
    }
}
const songs = new Playlist();
const videos = new Playlist();
