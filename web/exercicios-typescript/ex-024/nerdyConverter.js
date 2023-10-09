"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
function nerdify(txt) {
    const regex = /[aAeEl]/g;
    const nerdyString = {
        a: "4",
        A: "4",
        e: "3",
        E: "3",
        l: "1",
    };
    return txt.replace(regex, match => (nerdyString)[match]);
}
// Test
assert_1.default.strictEqual(nerdify("Fund4m3nt41s"), "Fund4m3nt41s");
assert_1.default.strictEqual(nerdify("Seven"), "S3v3n");
assert_1.default.strictEqual(nerdify("Los Angeles"), "Los 4ng313s");
assert_1.default.strictEqual(nerdify("Seoijselawuue"), "S3oijs314wuu3");
//# sourceMappingURL=nerdyConverter.js.map