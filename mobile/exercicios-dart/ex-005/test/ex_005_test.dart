import 'package:ex_005/ex_005.dart';
import 'package:test/test.dart';

void main() {
  test('Basic tests', () {
    expect(rgb(148, -20, 211), equals('9400D3'));
    expect(rgb(255, 255, 300), equals('FFFFFF'));
    expect(rgb(255, 255, 255), equals('FFFFFF'));
    expect(rgb(0, 0, 0), equals('000000'));
    expect(rgb(148, 0, 211), equals('9400D3'));
    expect(rgb(144, 195, 212), equals('90C3D4'));
    expect(rgb(212, 53, 12), equals('D4350C'));
  });
}
