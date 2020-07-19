// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number ?


(function problem007() {

  function primeNumbers(nb) {
    for (let i = 2; i < nb; i++) {
      if (nb%i === 0) return false;
    }
    return nb > 1;
  }

  let index = 10001;
  let cp = 0;
  let j = 1;

  while (j++) {
    if (primeNumbers(j)) cp++;
    if (cp === index) return j;
  }

  return -1;
}());