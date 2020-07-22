// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?


(function problem003() {
  let n = 600851475143;
  let arr = [];
  let i = 1;

  while (i++ < n) {
    while (n%i === 0) { 
      arr.push(i);
      n = n/i;
    }
  }

  return arr[arr.length-1];
}());