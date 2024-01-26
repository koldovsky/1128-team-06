//https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
//Find the smallest integer in the array
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

//https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
//Geometry Basics: Circle Circumference in 2D
function circleCircumference(circle) {
  return 2 * Math.PI * circle.radius;
}

//https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
//Training JS #12: loop statement --for..in and for..of
function giveMeFive(obj) {
  const result = [];
  for (const key in obj) {
    if (key.length === 5) result.push(key);
    if (obj[key].length === 5) result.push(obj[key]);
  }
  return result;
}

// =============================== Поглиблені задачки ===================================
//https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript
//Understanding closures - the basics
function buildFun(n) {
  let build = [];
  for (let i = 0; i < n; i++) {
    build.push(function () {
      return i;
    });
  }
  return build;
}

//https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript
//Fun with ES6 Classes #2 - Animals and Inheritance
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
