// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.


(function problem010() {

  function primeNumbers(nb) {
    for (let i = 2; i < nb; i++) {
      if (nb%i === 0) return false;
    }
    return nb > 1;
  }

  let limit = 2000000;
  let cp = 0;
  for (let i = 2; i < limit; i++) {
    if (primeNumbers(i)) cp += i;
  }

  return cp;
}());