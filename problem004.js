// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.


(function problem004() {
  let nb = -1;

  for (let i = 999; i >= 100; i--) {
    for (let j = 999; j >= 100; j--) {
      if (String(i*j) === String(i*j).split("").reverse().join("")){
        if (i*j > nb) nb = i*j;
      } 
    }
  }

  return nb;
}());