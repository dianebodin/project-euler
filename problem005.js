// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20 ?


(function problem005() {
  let nb = 1;
  let cp = 0;
  let i = 0;

  while (cp !== 20 && ++i) {
    if (nb%i === 0) cp++;
    else {
      cp = 0,
      i = 0;
      nb++;
    }
  }

  return nb;
}());