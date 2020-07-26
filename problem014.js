// The following iterative sequence is defined for the set of positive integers:
// n → n/2 (n is even)
// n → 3n + 1 (n is odd)
// Using the rule above and starting with 13, we generate the following sequence:
// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
// Which starting number, under one million, produces the longest chain ?
// NOTE: Once the chain starts the terms are allowed to go above one million.


(function problem014() {
  let limit = 1000000;
  let start = 1;
  let n = 0;
  let cp = 0;
  let max_cp = 0;
  let res = 0;
  
  while (start < limit) {
    n = start;
    cp = 0;

    while (n != 1) {
      if (n%2 === 0) n = n/2;
      else n = n*3 + 1;
      cp++;
    }

    if (cp > max_cp) { 
      max_cp = cp;
      res = start;
    }

    start++;
  }

  return res;
}());