function likes(names) {

  if (names.length == 0) {
    return "no one likes this"
  }

  else if (names.length == 1) {
    return names + " likes this"
  }

  else if (names.length <= 3) {
    let lastName = names[names.length - 1]
    return `${ names.slice(0, names.length -1).join(", ") + " and " + lastName} like this`
  }

  else {
    return `${names[0] + ", " + names[1]} and ${names.length - 2} others like this`
  }
}

function strictEqual(x, y) {
  if (x !== y) {
    console.log(`expected "${x}" to equal "${y}"`)
  }
}

strictEqual(likes([]), 'no one likes this');
strictEqual(likes(['Peter']), 'Peter likes this');
strictEqual(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
strictEqual(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
strictEqual(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');