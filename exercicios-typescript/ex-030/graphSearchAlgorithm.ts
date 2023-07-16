import { expect, test } from '@jest/globals';
// graficos possuem 2 formas de serem representados, como

export function sum(a:number, b:number) {
  return a + b;
}


  test('sum', () => {
    expect(sum(1, 2)).toBe(3);
  });
