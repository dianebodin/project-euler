// If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used ?
// NOTE: 
// Do not count spaces or hyphens. 
// For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. 
// The use of "and" when writing out numbers is in compliance with British usage.


(function problem017() {
  const unit = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  const ten = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  
  let n = 0;
  for (let i = 1; i < unit.length; i++) { //1 to 19
    n += unit[i].length; 
  }

  for (let i = 0; i < ten.length; i++) { //20 to 99
    for (let j = 0; j < 10; j++) { 
      if (j === 0) n += ten[i].length;
      else n += ten[i].length + unit[j].length;
    }
  }

  let cp = n;
  for (let i = 1; i < 10; i++) { //100 to 999
    n += unit[i].length + "hundred".length;
    n += cp;
    n += 99 * (unit[i].length + "hundred".length + "and".length);
  }

  n += "onethousand".length; //1000

  return n;
}());