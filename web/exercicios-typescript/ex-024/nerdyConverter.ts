import assert from "assert";

function nerdify(txt: string): string {
  interface NerdyString {
    [key: string]: string;
  }

  const regex = /[aAeEl]/g
  const nerdyString: NerdyString = {
    a: "4",
    A: "4",
    e: "3",
    E: "3",
    l: "1",
  };

  return txt.replace(regex, match => (nerdyString)[match]);
}

// Test
assert.strictEqual(nerdify("Fund4m3nt41s"), "Fund4m3nt41s");
assert.strictEqual(nerdify("Seven"), "S3v3n");
assert.strictEqual(nerdify("Los Angeles"), "Los 4ng313s");
assert.strictEqual(nerdify("Seoijselawuue"), "S3oijs314wuu3");
