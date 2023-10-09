const solution = function ([head,...tail], options) {
  
  if (!tail.length) {
    return head == "" ? [head] : [head + 2 * options.modifier]
  }
  
  return [head + 2 * options.modifier, ...solution(tail, options)];
}

console.log(solution([1,2,3],{modifier: 2}))
// solution = [5, 6, 7]
