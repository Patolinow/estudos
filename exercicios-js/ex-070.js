function goto(level, button) {
  if (!(level === 0 || level === 1 || level === 2 || level === 3) || !(button === "0" || button === "1" || button === "2" || button === "3")) {
    return 0
  }
  
  return Number(button) - level;
}


// Tests
function assertEquals(x, y) {
  if (x !== y) {
    console.log(`expected ${x} to deeply equal ${y}`)
  }
}

assertEquals(goto(0, '2'), 2)
assertEquals(3 + goto(3, '1'), 1)
assertEquals(2 + goto(2, '2'), 2)
assertEquals(goto(2, '4'), 0)
assertEquals(goto(undefined, '2'), 0)
assertEquals(goto(3, {}), 0)