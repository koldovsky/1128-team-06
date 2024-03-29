//https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
//Find the smallest integer in the array

//Тимчук Юрій

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

//Ткач Євген
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}
//Токарева Дар'я

//Юрій Світуха

//Ярема Наталія +1
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}
//Михальська Мар'яна

//Мучкін Олександр

//Радіонов Павло +1

class SmallestIntegerFinder {
  findSmallestInt(arr) {
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < smallest) {
        smallest = arr[i];
      }
    }
    return smallest;
  }
}

//Волохов Антон
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}
//Затонський Степан

//Олексій Севастьянов

//https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
//Geometry Basics: Circle Circumference in 2D

//Тимчук Юрій

//Ткач Євген +1
function circleCircumference(circle) {
  return 2 * Math.PI * circle.radius;
}
//Токарева Дар'я

//Юрій Світуха

//Ярема Наталія
function circleCircumference(circle) {
  return 2 * Math.PI * circle.radius;
}
//Михальська Мар'яна

//Мучкін Олександр

//Радіонов Павло
function circleCircumference(circle) {
  return 2 * Math.PI * circle.radius;
}
//Волохов Антон
function circleCircumference(circle) {
  return 2 * Math.PI * circle.radius;
}
//Затонський Степан

//Олексій Севастьянов

//https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
//Training JS #12: loop statement --for..in and for..of

//Тимчук Юрій

//Ткач Євген
function giveMeFive(obj) {
  const result = [];
  for (const key in obj) {
    if (key.length === 5) result.push(key);
    if (obj[key].length === 5) result.push(obj[key]);
  }
  return result;
}
//Токарева Дар'я

//Юрій Світуха

//Ярема Наталія
function giveMeFive(obj) {
  const resultArray = [];
  for (const key in obj) {
    if (key.length === 5) {
      resultArray.push(key);
    }
    if (obj[key].length === 5) {
      resultArray.push(obj[key]);
    }
  }
  return resultArray;
}
//Михальська Мар'яна

//Мучкін Олександр

//Радіонов Павло +1

function giveMeFive(obj) {
  const result = [];
  for (const key in obj) {
    if (key.length === 5) {
      result.push(key);
    }
    if (obj[key].length === 5) {
      result.push(obj[key]);
    }
  }
  return result;
}

//Волохов Антон
function giveMeFive(obj) {
  const result = [];

  for (const key in obj) {
    if (key.length === 5) {
      result.push(key);
    }
    if (
      typeof obj[key] === "string" &&
      obj[key].length === 5 &&
      obj[key] !== key
    ) {
      result.push(obj[key]);
    }
  }

  return result;
}
//Затонський Степан

//Олексій Севастьянов

// =============================== Поглиблені задачки ===================================
//https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript
//Understanding closures - the basics

//Тимчук Юрій

//Ткач Євген

//Токарева Дар'я

//Юрій Світуха

//Ярема Наталія

//Михальська Мар'яна

//Мучкін Олександр

//Радіонов Павло

function buildFun(n) {
  let build = [];
  for (let i = 0; i < n; i++) {
    build.push(function () {
      return i;
    });
  }
  return build;
}

//Волохов Антон
function buildFun(n) {
  var res = [];

  for (var i = 0; i < n; i++) {
    // Create a closure
    res.push(
      (function (x) {
        return function () {
          return x;
        };
      })(i)
    );
  }

  return res;
}
//Затонський Степан

//Олексій Севастьянов

//https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript
//Fun with ES6 Classes #2 - Animals and Inheritance

//Тимчук Юрій

//Ткач Євген
class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }

  introduce() {
    return super.introduce() + "  Meow meow!";
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }

  greetMaster() {
    return `Hello ${this.master}`;
  }
}
//Токарева Дар'я

//Юрій Світуха

//Ярема Наталія

//Михальська Мар'яна

//Мучкін Олександр

//Радіонов Павло

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}
class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }
  introduce() {
    return `${super.introduce()}  Meow meow!`;
  }
}
class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}

//Волохов Антон
class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }
  introduce() {
    return `${super.introduce()}  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}
//Затонський Степан

//Олексій Севастьянов
