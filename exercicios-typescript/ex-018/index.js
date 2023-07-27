"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const dog_1 = __importDefault(require("./dog"));
const shelter_1 = __importDefault(require("./shelter"));
console.log("i'm index!");
const elton = new dog_1.default("Elton", "Aussie", 2);
console.log(elton);
console.log((0, utils_1.add)(1, 5));
const buffy = new shelter_1.default("Buffy", "Pitbul", 2, true);
console.log("now with webpack!");
console.log("teste 12315");
//# sourceMappingURL=index.js.map