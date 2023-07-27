"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const killerGarageGPT_1 = require("./killerGarageGPT");
describe('electric-garage-door', () => {
    it('should handle "P" command', () => {
        (0, chai_1.expect)((0, killerGarageGPT_1.door)('P')).to.equal('1');
    });
    it('should handle "P.." command', () => {
        (0, chai_1.expect)((0, killerGarageGPT_1.door)('P..')).to.equal('123');
    });
    it('should handle "P...." command', () => {
        (0, chai_1.expect)((0, killerGarageGPT_1.door)('P....')).to.equal('12345');
    });
    it('should handle "P......P......" command', () => {
        (0, chai_1.expect)((0, killerGarageGPT_1.door)('P......P......')).to.equal('12345554321000');
    });
    it('should handle "P.P.." command', () => {
        (0, chai_1.expect)((0, killerGarageGPT_1.door)('P.P..')).to.equal('12222');
    });
    it('should handle "P.O...." command', () => {
        (0, chai_1.expect)((0, killerGarageGPT_1.door)('P.O....')).to.equal('1210000');
    });
    it('should handle "..P...O....." command', () => {
        (0, chai_1.expect)((0, killerGarageGPT_1.door)('..P...O.....')).to.equal('001234321000');
    });
    it('should handle "P....P..O." command', () => {
        (0, chai_1.expect)((0, killerGarageGPT_1.door)('P....P..O.')).to.equal('1234543234');
    });
});
//# sourceMappingURL=test.js.map