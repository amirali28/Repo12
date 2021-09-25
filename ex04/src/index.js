// Only change code below this line
function sumFibonacci(num) {
  var prev = 0;
  var curr = 1;
  var result = 0;
  if (num < 3 && num > 0) {
    return 1;
  }
  while (curr <= num) {
    if (curr % 2 !== 0) {
      result = result + curr;
    }
    curr = curr + prev;
    prev = curr - prev;
  }
  return result;
}

// Only change code above this line

console.log(sumFibonacci(1)); //Change this line
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;
