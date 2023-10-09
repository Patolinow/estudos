"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
function humanReadable(totalTimeInSeconds) {
    if (totalTimeInSeconds >= 360000) {
        throw new Error("can't handle such a big time");
    }
    let hours = 0, minutes = 0, seconds = 0;
    for (let runningTime = 0; runningTime < totalTimeInSeconds; runningTime++) {
        seconds++;
        if (seconds == 60) {
            minutes++;
            seconds = 0;
        }
        if (minutes == 60) {
            hours++;
            minutes = 0;
        }
    }
    return `${hours.toLocaleString("pt-BR", {
        minimumIntegerDigits: 2,
    })}:${minutes.toLocaleString("pt-BR", {
        minimumIntegerDigits: 2,
    })}:${seconds.toLocaleString("pt-BR", {
        minimumIntegerDigits: 2
    })}`;
}
// Tests
assert_1.default.equal(humanReadable(0), "00:00:00", "humanReadable(0)");
assert_1.default.equal(humanReadable(5), "00:00:05", "humanReadable(5)");
assert_1.default.equal(humanReadable(60), "00:01:00", "humanReadable(60)");
assert_1.default.equal(humanReadable(86399), "23:59:59", "humanReadable(86399)");
assert_1.default.equal(humanReadable(359999), "99:59:59", "humanReadable(359999)");
//# sourceMappingURL=hoursConverter.js.map