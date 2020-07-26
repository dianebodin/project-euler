// 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
// What is the sum of the digits of the number 2^1000 ?


(function problem016() {
  let n = BigInt(2**1000);
  
  let res = String(n)
    .split("")
    .map(el => Number(el))
    .reduce((acc, val) => acc+val);

  return res;
}());