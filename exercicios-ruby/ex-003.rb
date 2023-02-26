def trim(string, size)
  if size <= 3 && string.length > size
    return "#{string[0, size]}..."

  elsif string.length > size
    return "#{string[0, size - 3]}..."

  else 
    return string

  end
end

def assert_equals(x, y)
  return x == y ? "passed!" : "expected '#{x}' deeply equal to '#{y}'"
end

puts assert_equals(trim("Creating kata is fun", 14), "Creating ka...")
puts assert_equals(trim("Hey", 2), "He...")
puts assert_equals(trim("He", 1), "H...")
puts assert_equals(trim("Hey", 3), "Hey")
puts assert_equals(trim("Coding rocks", 12), "Coding rocks")
puts assert_equals(trim("Code Wars is pretty rad", 50), "Code Wars is pretty rad")
puts assert_equals(trim("London is freezing", 18), "London is freezing")
puts assert_equals(trim("mKSTp fEQUY", 3), "mKS...")

