"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const narrowing_1 = __importDefault(require("../ex-016/narrowing"));
const narrowing_2 = require("../ex-016/narrowing");
axios_1.default
    .get("https://jsonplaceholder.typicode.com/users/1")
    .then((res) => {
    const data = res.data;
    console.log(data.name);
    console.log(data.address.city);
})
    .catch((e) => {
    console.error(e);
});
console.log((0, narrowing_1.default)(narrowing_2.stevie));
//# sourceMappingURL=types.js.map