//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
//Convert a string to an array

//Тимчук Юрій

//Ткач Євген

//Токарева Дар'я
function stringToArray(string){
    let wordsArr = [];
    let currentWord= '';
    
    for(let i=0; i<string.length; i++){
      if(string[i]!==' ' && i!==string.length-1){
      currentWord+=string[i];
      }
      else if(string[i]!==' ' && i===string.length-1){
        currentWord+=string[i];
        wordsArr.push(currentWord);
        console.log('latest symbol',wordsArr);
      }
      else{
        wordsArr.push(currentWord);
        currentWord='';
      }
      }
    return wordsArr;
  }
//Юрій Світуха

//Ярема Наталія
function stringToArray(inputString) {
    return (inputString.split(" "));
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

//Ткач Євген

//Токарева Дар'я

//Юрій Світуха

//Ярема Наталія

//Михальська Мар'яна

//Мучкін Олександр

//Радіонов Павло

function DNAtoRNA(dnaString) {
    const rnaString = dnaString.replace(/T/g, 'U');
    return rnaString;
}

//Волохов Антон

//Затонський Степан

//Олексій Севастьянов



//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
//Find Maximum and Minimum Values of a List

//Тимчук Юрій

//Ткач Євген

//Токарева Дар'я

//Юрій Світуха

//Ярема Наталія
var min = function(list){
    
    return Math.min.apply(null,list);
}
var max = function(list){
   
    return Math.max.apply(null,list);
}
console.log(Math.max(1, 3, 2))

//Михальська Мар'яна

//Мучкін Олександр

//Радіонов Павло

function max(numbers) {
    return numbers.reduce((maxValue, current) => Math.max(maxValue, current), -Infinity);
}

function min(numbers) {
    return numbers.reduce((minValue, current) => Math.min(minValue, current), Infinity);
}

//Волохов Антон

//Затонський Степан

//Олексій Севастьянов



//https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
//Smallest value of an array

//Тимчук Юрій

//Ткач Євген

//Токарева Дар'я

//Юрій Світуха

//Ярема Наталія

//Михальська Мар'яна

//Мучкін Олександр

//Радіонов Павло

function min(arr, returnType) {
    if (returnType === 'value') {
        return Math.min(...arr);
    } else if (returnType === 'index') {
        return arr.indexOf(Math.min(...arr));
    }
}

//Волохов Антон

//Затонський Степан

//Олексій Севастьянов



//https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript
//A wolf in sheep's clothing

//Тимчук Юрій

//Ткач Євген

//Токарева Дар'я

//Юрій Світуха

//Ярема Наталія

//Михальська Мар'яна

//Мучкін Олександр

//Радіонов Павло

function warnTheSheep(queue) {
    const wolfIndex = queue.reverse().indexOf('wolf');
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

//Токарева Дар'я

//Юрій Світуха

//Ярема Наталія

//Михальська Мар'яна

//Мучкін Олександр

//Радіонов Павло
function maps(arr) {

    return arr.map(value => value * 2);
}

//Волохов Антон

//Затонський Степан

//Олексій Севастьянов



//https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript
//Find the first non-consecutive number

//Тимчук Юрій

//Ткач Євген

//Токарева Дар'я

//Юрій Світуха

//Ярема Наталія

//Михальська Мар'яна

//Мучкін Олександр

//Радіонов Павло

function firstNonConsecutive(arr) {
    return arr.find((value, index) => index > 0 && value !== arr[index - 1] + 1) || null;
}

//Волохов Антон

//Затонський Степан

//Олексій Севастьянов



//https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
//You Can't Code Under Pressure #1

//Тимчук Юрій

//Ткач Євген

//Токарева Дар'я

//Юрій Світуха

//Ярема Наталія

//Михальська Мар'яна

//Мучкін Олександр

//Радіонов Павло

//Волохов Антон

//Затонський Степан

//Олексій Севастьянов



//https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
//Century From Year

//Тимчук Юрій

//Ткач Євген

//Токарева Дар'я

//Юрій Світуха

//Ярема Наталія

//Михальська Мар'яна

//Мучкін Олександр

//Радіонов Павло

//Волохов Антон

//Затонський Степан

//Олексій Севастьянов



//https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript
//Beginner Series #4 Cockroach

//Тимчук Юрій

//Ткач Євген

//Токарева Дар'я

//Юрій Світуха

//Ярема Наталія

//Михальська Мар'яна

//Мучкін Олександр

//Радіонов Павло

//Волохов Антон

//Затонський Степан

//Олексій Севастьянов



//https://www.codewars.com/kata/5a023c426975981341000014/train/javascript
//Third Angle of a Triangle

//Тимчук Юрій

//Ткач Євген

//Токарева Дар'я

//Юрій Світуха

//Ярема Наталія
function otherAngle(a, b) {
  
    return ((180-a-b));
  }
//Михальська Мар'яна

//Мучкін Олександр

//Радіонов Павло

//Волохов Антон

//Затонський Степан

//Олексій Севастьянов



//https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
//Twice as old

//Тимчук Юрій

//Ткач Євген

//Токарева Дар'я

//Юрій Світуха

//Ярема Наталія

//Михальська Мар'яна

//Мучкін Олександр

//Радіонов Павло

//Волохов Антон

//Затонський Степан

//Олексій Севастьянов



//https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
//Get Nth Even Number

//Тимчук Юрій

//Ткач Євген

//Токарева Дар'я

//Юрій Світуха

//Ярема Наталія

//Михальська Мар'яна

//Мучкін Олександр

//Радіонов Павло

//Волохов Антон

//Затонський Степан

//Олексій Севастьянов



//https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
//What's the real floor?

//Тимчук Юрій

//Ткач Євген

//Токарева Дар'я

//Юрій Світуха

//Ярема Наталія

//Михальська Мар'яна

//Мучкін Олександр

//Радіонов Павло

//Волохов Антон

//Затонський Степан

//Олексій Севастьянов



//https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
//Beginner Series #2 Clock

//Тимчук Юрій

//Ткач Євген

//Токарева Дар'я

//Юрій Світуха

//Ярема Наталія

//Михальська Мар'яна

//Мучкін Олександр

//Радіонов Павло

//Волохов Антон

//Затонський Степан

//Олексій Севастьянов



//https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
//Is n divisible by x and y?

//Тимчук Юрій

//Ткач Євген

//Токарева Дар'я

//Юрій Світуха

//Ярема Наталія

//Михальська Мар'яна

//Мучкін Олександр

//Радіонов Павло

//Волохов Антон

//Затонський Степан

//Олексій Севастьянов


