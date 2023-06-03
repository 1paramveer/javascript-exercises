const fibonacci = function (number) {
  if (+number < 0) {
    return "OOPS";
  }
  let fib = [1, 1];
  for (let i = 2; i < +number; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib.reverse()[0];
};
// Do not edit below this line
module.exports = fibonacci;
