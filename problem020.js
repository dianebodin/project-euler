// n! means n × (n − 1) × ... × 3 × 2 × 1
// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
// Find the sum of the digits in the number 100!


(function problem020() {
  let i = 1n;
  let n = 1n;

  while (i <= 100) {
    n *= i;
    i++;
  }

  let res = n
    .toString()
    .split("")
    .map((el) => Number(el))
    .reduce((acc, val) => acc+val);

  return res;
}());