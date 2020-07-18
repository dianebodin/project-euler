// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.


(function problem002() {
  const limit = 4000000;
  let tab = [1, 2];
  let i = 0;
  
  while (++i) {
    let n = tab[i-1] + tab[i];
    if (n < limit) tab.push(n);
    else break;
  }

  let res = tab
  .filter(elm => elm%2 === 0)
  .reduce((acc, elm) => acc+elm);

  return res;
}());