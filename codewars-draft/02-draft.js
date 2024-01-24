//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
//Convert a string to an array

//Тимчук Юрій

function stringToArray(string) {
  return string.split(" ");
}

//Ткач Євген
function stringToArray(string) {
  return string.split(" ");
}

//Токарева Дар'я
function stringToArray(string) {
  let wordsArr = [];
  let currentWord = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      if (currentWord !== "") {
        wordsArr.push(currentWord);
      }
      currentWord = "";
    } else {
      currentWord += string[i];
    }
    if (i === string.length - 1) {
      wordsArr.push(currentWord);
    }
  }
  return wordsArr;
}
//Юрій Світуха
function stringToArray(string) {
  return string.split(" ");
}
//Ярема Наталія
function stringToArray(inputString) {
  return inputString.split(" ");
}

//Михальська Мар'яна

//Мучкін Олександр

//Радіонов Павло

function stringToArray(inputString) {
  return inputString.split(" ");
}
let result1 = stringToArray("Robin Singh");
console.log(result1);
let result2 = stringToArray("I love arrays they are my favorite");
console.log(result2);

//Волохов Антон

//Затонський Степан

//Олексій Севастьянов

//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
//DNA to RNA Conversion

//Тимчук Юрій

function DNAtoRNA(dna) {
  let resultRna = dna.split("");
  for (let i = 0; i < resultRna.length; i++) {
    if (resultRna[i] === "T") {
      resultRna[i] = "U";
    }
  }
  let rna = resultRna.join("");
  return rna;
}

//Ткач Євген
function DNAtoRNA(dna) {
  return dna.replaceAll("T", "U");
}

//Токарева Дар'я
function DNAtoRNA(dna) {
  let rna = "";
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "T") {
      rna += "U";
    } else {
      rna += dna[i];
    }
  }
  return rna;
}
//Юрій Світуха

//Ярема Наталія

//Михальська Мар'яна

//Мучкін Олександр

//Радіонов Павло

function DNAtoRNA(dnaString) {
  const rnaString = dnaString.replace(/T/g, "U");
  return rnaString;
}

//Волохов Антон

//Затонський Степан

//Олексій Севастьянов

//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
//Find Maximum and Minimum Values of a List

//Тимчук Юрій

var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};

//Ткач Євген
var min = function (list) {
  list.sort((a, b) => a - b);
  return list[0];
};

var max = function (list) {
  list.sort((a, b) => b - a);
  return list[0];
};
//Токарева Дар'я
var min = function (list) {
  let minNum = list[0];

  for (let i = 0; i < list.length; i++) {
    if (list[i] < minNum) {
      minNum = list[i];
    }
  }
  return minNum;
};

var max = function (list) {
  let maxNum = list[0];

  for (i = 0; i < list.length; i++) {
    if (list[i] > maxNum) {
      maxNum = list[i];
    }
  }
  return maxNum;
};
//Юрій Світуха

//Ярема Наталія
var min = function (list) {
  return Math.min.apply(null, list);
};
var max = function (list) {
  return Math.max.apply(null, list);
};
console.log(Math.max(1, 3, 2));

//Михальська Мар'яна

//Мучкін Олександр

//Радіонов Павло

function max(numbers) {
  return numbers.reduce(
    (maxValue, current) => Math.max(maxValue, current),
    -Infinity
  );
}

function min(numbers) {
  return numbers.reduce(
    (minValue, current) => Math.min(minValue, current),
    Infinity
  );
}

//Волохов Антон

//Затонський Степан

//Олексій Севастьянов

//https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
//Smallest value of an array

//Тимчук Юрій

function min(arr, toReturn) {
  smallest = Math.min(...arr);
  return toReturn === "value" ? smallest : arr.indexOf(smallest);
}

//Ткач Євген
function min(arr, toReturn) {
  const minValue = Math.min(...arr);
  return toReturn === "value" ? minValue : arr.indexOf(minValue);
}
//Токарева Дар'я
function min(arr, toReturn) {
  if (toReturn === "value") {
    return minValue(arr);
  } else {
    return minIndex(arr);
  }
}

function minValue(arr) {
  return arr[minIndex(arr)];
}

function minIndex(arr) {
  let minNumIndex = 0;
  let minNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minNum) {
      minNum = arr[i];
      minNumIndex = i;
    }
  }
  return minNumIndex;
}
//Юрій Світуха

//Ярема Наталія

//Михальська Мар'яна

//Мучкін Олександр

//Радіонов Павло

function min(arr, returnType) {
  if (returnType === "value") {
    return Math.min(...arr);
  } else if (returnType === "index") {
    return arr.indexOf(Math.min(...arr));
  }
}

//Волохов Антон

//Затонський Степан

//Олексій Севастьянов

//https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript
//A wolf in sheep's clothing

//Тимчук Юрій

function warnTheSheep(queue) {
  let reversedQueue = [...queue].reverse();
  let positionOfWolf = reversedQueue.indexOf("wolf");

  return positionOfWolf === 0
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${positionOfWolf}! You are about to be eaten by a wolf!`;
}

//Ткач Євген
function warnTheSheep(queue) {
  for (let i = queue.length - 1; i >= 0; i--) {
    if (queue[i] === "wolf") {
      return "Pls go away and stop eating my sheep";
    } else if (queue[i - 1] === "wolf") {
      return `Oi! Sheep number ${
        queue.length - i
      }! You are about to be eaten by a wolf!`;
    }
  }
}
//Токарева Дар'я
function warnTheSheep(queue) {
  let j = 0;
  for (let i = queue.length - 1; i >= 0; i--) {
    if (queue[i] === "wolf") {
      if (j === 0) {
        return "Pls go away and stop eating my sheep";
      }
      return "Oi! Sheep number " + j + "! You are about to be eaten by a wolf!";
    }
    j++;
  }
}
//Юрій Світуха

//Ярема Наталія

//Михальська Мар'яна

//Мучкін Олександр

//Радіонов Павло

function warnTheSheep(queue) {
  const wolfIndex = queue.reverse().indexOf("wolf");
  return wolfIndex === 0
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${wolfIndex}! You are about to be eaten by a wolf!`;
}

//Волохов Антон

//Затонський Степан

//Олексій Севастьянов

//https://www.codewars.com/kata/beginner-lost-without-a-map
//Beginner - Lost Without a Map

//Тимчук Юрій

//Ткач Євген
function maps(x) {
  return x.map((item) => item * 2);
}
//Токарева Дар'я
function maps(x) {
  let arr = [];
  for (let i = 0; i < x.length; i++) {
    arr[i] = x[i] * 2;
  }
  return arr;
}
//Юрій Світуха

//Ярема Наталія

//Михальська Мар'яна

//Мучкін Олександр

//Радіонов Павло
function maps(arr) {
  return arr.map((value) => value * 2);
}

//Волохов Антон

//Затонський Степан

//Олексій Севастьянов

//https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript
//Find the first non-consecutive number

//Тимчук Юрій

//Ткач Євген
function firstNonConsecutive(arr) {
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] - arr[i - 1] !== 1) return arr[i];
  }
  return null;
}
//Токарева Дар'я
function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i > 0) {
      let diff = arr[i] - arr[i - 1];
      if (diff !== 1) {
        return arr[i];
      }
    }
  }
  return null;
}
//Юрій Світуха

//Ярема Наталія

//Михальська Мар'яна

//Мучкін Олександр

//Радіонов Павло

function firstNonConsecutive(arr) {
  return (
    arr.find((value, index) => index > 0 && value !== arr[index - 1] + 1) ||
    null
  );
}

//Волохов Антон

//Затонський Степан

//Олексій Севастьянов

//https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
//You Can't Code Under Pressure #1

//Тимчук Юрій

//Ткач Євген
function doubleInteger(i) {
  return i * 2;
}
//Токарева Дар'я
function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i * 2;
}
//Юрій Світуха

//Ярема Наталія
function doubleInteger(i) {
  if (Number.isInteger(i)) return 2 * i;
}

//Михальська Мар'яна

//Мучкін Олександр

//Радіонов Павло
function doubleInteger(n) {
  return n * 2;
}

//Волохов Антон

//Затонський Степан

//Олексій Севастьянов

//https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
//Century From Year

//Тимчук Юрій

//Ткач Євген
function century(year) {
  let approxCentury = Math.floor(year / 100);
  return year % 100 == 0 ? approxCentury : approxCentury + 1;
}
//Токарева Дар'я
function century(year) {
  let century = (year - (year % 100)) / 100;
  if (year % 100 > 0) {
    return century + 1;
  } else if (year % 100 === 0) {
    return century;
  }
}
//Юрій Світуха

//Ярема Наталія
function century(year) {
  return Math.ceil(year / 100);
}

//Михальська Мар'яна

//Мучкін Олександр

//Радіонов Павло
function century(year) {
  return Math.floor((year - 1) / 100) + 1;
}

//Волохов Антон

//Затонський Степан

//Олексій Севастьянов

//https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript
//Beginner Series #4 Cockroach

//Тимчук Юрій

//Ткач Євген
function cockroachSpeed(s) {
  return Math.floor((s * 100000) / 3600);
}
//Токарева Дар'я
function cockroachSpeed(s) {
  let cmSec = (s * 100000) / 3600;
  return s !== 0 ? Math.floor(cmSec) : 0;
}
//Юрій Світуха

//Ярема Наталія
function cockroachSpeed(s) {
  return Math.floor((100000 * s) / 3600);
}

//Михальська Мар'яна

//Мучкін Олександр

//Радіонов Павло
function cockroachSpeed(I) {
  return Math.floor((I * 100000) / 3600);
}

//Волохов Антон

//Затонський Степан

//Олексій Севастьянов

//https://www.codewars.com/kata/5a023c426975981341000014/train/javascript
//Third Angle of a Triangle

//Тимчук Юрій

//Ткач Євген
function otherAngle(a, b) {
  return 180 - a - b;
}
//Токарева Дар'я

//Юрій Світуха

//Ярема Наталія
function otherAngle(a, b) {
  return 180 - a - b;
}
//Михальська Мар'яна

//Мучкін Олександр

//Радіонов Павло
function otherAngle(angle1, angle2) {
  return 180 - angle1 - angle2;
}

//Волохов Антон

//Затонський Степан

//Олексій Севастьянов

//https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
//Twice as old

//Тимчук Юрій

//Ткач Євген
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs((dadYearsOld - sonYearsOld) * 2 - dadYearsOld);
}
//Токарева Дар'я

//Юрій Світуха

//Ярема Наталія
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(2 * (dadYearsOld - sonYearsOld) - dadYearsOld);
}

//Михальська Мар'яна

//Мучкін Олександр

//Радіонов Павло
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}
//Волохов Антон

//Затонський Степан

//Олексій Севастьянов

//https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
//Get Nth Even Number

//Тимчук Юрій

//Ткач Євген
function nthEven(n) {
  return n * 2 - 2;
}
//Токарева Дар'я

//Юрій Світуха

//Ярема Наталія
function nthEven(n) {
  return n * 2 - 2;
}
//Михальська Мар'яна

//Мучкін Олександр

//Радіонов Павло
function nthEven(n) {
  return n * 2 - 2;
}

//Волохов Антон

//Затонський Степан

//Олексій Севастьянов

//https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
//What's the real floor?

//Тимчук Юрій

//Ткач Євген
function getRealFloor(n) {
  if (n > 0) n = n - (n >= 13 ? 2 : 1);
  return n;
}
//Токарева Дар'я

//Юрій Світуха

//Ярема Наталія

//Михальська Мар'яна

//Мучкін Олександр

//Радіонов Павло
function getRealFloor(americanFloor) {
  if (americanFloor <= 0) {
    return americanFloor;
  } else if (americanFloor === 1) {
    return 0;
  } else if (americanFloor >= 13) {
    return americanFloor - 2;
  } else {
    return americanFloor - 1;
  }
}
//Волохов Антон

//Затонський Степан

//Олексій Севастьянов

//https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
//Beginner Series #2 Clock

//Тимчук Юрій

//Ткач Євген
function past(h, m, s) {
  return h * 3600000 + m * 60000 + s * 1000;
}
//Токарева Дар'я

//Юрій Світуха

//Ярема Наталія
function past(h, m, s) {
  if (0 <= h <= 23 && 0 <= m <= 59 && 0 <= s <= 59)
    return 3600000 * h + 60000 * m + 1000 * s;
}
//Михальська Мар'яна

//Мучкін Олександр

//Радіонов Павло
function past(h, m, s) {
  const millisecondsInSecond = 1000;
  const secondsInMinute = 60;
  const minutesInHour = 60;
  return (
    h * minutesInHour * secondsInMinute * millisecondsInSecond +
    m * secondsInMinute * millisecondsInSecond +
    s * millisecondsInSecond
  );
}

//Волохов Антон

//Затонський Степан

//Олексій Севастьянов

//https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
//Is n divisible by x and y?

//Тимчук Юрій

//Ткач Євген
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}
//Токарева Дар'я

//Юрій Світуха

//Ярема Наталія
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}

//Михальська Мар'яна

//Мучкін Олександр

//Радіонов Павло
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}

//Волохов Антон

//Затонський Степан

//Олексій Севастьянов
