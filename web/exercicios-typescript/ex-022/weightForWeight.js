"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
function orderWeight(str) {
    const allWeightsString = str.split(" ");
    const allWeightsSummed = allWeightsString.map((weight) => {
        const summed = weight
            .split("")
            .map(Number)
            .reduce((preSum, actual) => actual + preSum, 0);
        return summed;
    });
    const weightsObject = allWeightsString.map((weight, index) => {
        return {
            weightString: weight,
            weightSum: allWeightsSummed[index],
        };
    });
    const allWeightsSortedObject = weightsObject.sort((a, b) => {
        if (a.weightSum > b.weightSum) {
            return 1;
        }
        if (a.weightSum < b.weightSum) {
            return -1;
        }
        if (a.weightString < b.weightString) {
            return -1;
        }
        return 0;
    });
    const allWeightsSorted = allWeightsSortedObject
        .map((a) => {
        return a.weightString;
    })
        .join(" ");
    return allWeightsSorted;
}
// Tests
assert_1.default.strictEqual(orderWeight("103 123 4444 2000 99"), "2000 103 123 4444 99");
assert_1.default.strictEqual(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"), "11 11 2000 10003 22 123 1234000 44444444 9999");
//# sourceMappingURL=weightForWeight.js.map