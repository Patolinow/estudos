"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dog_1 = __importDefault(require("./dog"));
class ShelterDog extends dog_1.default {
    hasShelter;
    constructor(name, breed, age, hasShelter) {
        super(name, breed, age);
        this.hasShelter = hasShelter;
    }
}
exports.default = ShelterDog;
//# sourceMappingURL=shelter.js.map