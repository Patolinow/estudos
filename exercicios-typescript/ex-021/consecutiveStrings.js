"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
function longestConsec(strarr, k) {
    if (k <= 0 || strarr.length < k) {
        return "";
    }
    let biggestString = "";
    strarr.forEach((str, index, strarr) => {
        const endIndex = index + k;
        const actualConsec = strarr.slice(index, endIndex);
        const actualStringConsec = actualConsec.join("");
        if (biggestString.length < actualStringConsec.length) {
            biggestString = actualStringConsec;
        }
    });
    return biggestString;
}
// Tests
assert_1.default.strictEqual(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta");
assert_1.default.strictEqual(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh");
assert_1.default.strictEqual(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3), "ixoyx3452zzzzzzzzzzzz");
assert_1.default.strictEqual(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2), "");
//# sourceMappingURL=consecutiveStrings.js.map