//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
//Convert a string to an array
function stringToArray(string) {
  return string.split(" ");
}

//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
//DNA to RNA Conversion
function DNAtoRNA(dna) {
  return dna.replaceAll("T", "U");
}

//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
//Find Maximum and Minimum Values of a List
var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};

//https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
//Smallest value of an array
function min(arr, toReturn) {
  smallest = Math.min(...arr);
  return toReturn === "value" ? smallest : arr.indexOf(smallest);
}

// =============================== Поглиблені задачки ===================================

//https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript
//A wolf in sheep's clothing
function warnTheSheep(queue) {
  let reversedQueue = [...queue].reverse();
  let positionOfWolf = reversedQueue.indexOf("wolf");

  return positionOfWolf === 0
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${positionOfWolf}! You are about to be eaten by a wolf!`;
}

//https://www.codewars.com/kata/beginner-lost-without-a-map
//Beginner - Lost Without a Map
function maps(x) {
  return x.map((item) => item * 2);
}

//https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript
//Find the first non-consecutive number
function firstNonConsecutive(arr) {
  return (
    arr.find((value, index) => index > 0 && value !== arr[index - 1] + 1) ||
    null
  );
}

// =================================== Додаткові задачки по JS =================================

//https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
//You Can't Code Under Pressure #1
function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i * 2;
}

//https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
//Century From Year
function century(year) {
  return Math.ceil(year / 100);
}

//https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript
//Beginner Series #4 Cockroach
function cockroachSpeed(s) {
  return Math.floor((s * 100000) / 3600);
}

//https://www.codewars.com/kata/5a023c426975981341000014/train/javascript
//Third Angle of a Triangle
function otherAngle(a, b) {
  return 180 - a - b;
}

//https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
//Twice as old
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

//https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
//Get Nth Even Number
function nthEven(n) {
  return n * 2 - 2;
}

//https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
//What's the real floor?
function getRealFloor(n) {
  if (n > 0) n = n - (n >= 13 ? 2 : 1);
  return n;
}

//https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
//Beginner Series #2 Clock
function past(h, m, s) {
  return h * 3600000 + m * 60000 + s * 1000;
}

//https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
//Is n divisible by x and y?
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}