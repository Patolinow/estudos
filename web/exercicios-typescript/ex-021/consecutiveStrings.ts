import assert from "assert";

function longestConsec(strarr: string[], k: number): string {
  if (k <= 0 || strarr.length < k) {
    return ""
  }

  let biggestString = ""

  strarr.forEach((str, index, strarr) => {
    const endIndex = index + k
    const actualConsec = strarr.slice(index, endIndex)
    const actualStringConsec = actualConsec.join("")

    if (biggestString.length < actualStringConsec.length) {
      biggestString = actualStringConsec
    }
  })

  return biggestString
}


// Tests
    assert.strictEqual(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta");
    assert.strictEqual(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh");
    assert.strictEqual(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3), "ixoyx3452zzzzzzzzzzzz");
    assert.strictEqual(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2), "")