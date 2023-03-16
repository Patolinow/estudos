import { expect } from 'chai';
import { door } from './killerGarageGPT';

describe('electric-garage-door', () => {
  it('should handle "P" command', () => {
    expect(door('P')).to.equal('1');
  });

  it('should handle "P.." command', () => {
    expect(door('P..')).to.equal('123');
  });

  it('should handle "P...." command', () => {
    expect(door('P....')).to.equal('12345');
  });

  it('should handle "P......P......" command', () => {
    expect(door('P......P......')).to.equal('12345554321000');
  });

  it('should handle "P.P.." command', () => {
    expect(door('P.P..')).to.equal('12222');
  });

  it('should handle "P.O...." command', () => {
    expect(door('P.O....')).to.equal('1210000');
  });

  it('should handle "..P...O....." command', () => {
    expect(door('..P...O.....')).to.equal('001234321000');
  });

  it('should handle "P....P..O." command', () => {
    expect(door('P....P..O.')).to.equal('1234543234');
  });
});
