//Тимчук Юрій

//Ткач Євген
function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}
//Токарева Дар'я
function lovefunc(flower1, flower2) {
  return (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
    (flower1 % 2 !== 0 && flower2 % 2 === 0)
    ? true
    : false;
}
//Юрій Світуха

//Ярема Наталія
function lovefunc(flower1, flower2) {
  if (flower1 % 2 === 0 && flower2 % 2 !== 0) {
    return true;
  }
  if (flower1 % 2 !== 0 && flower2 % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
//Михальська Мар'яна

//Мучкін Олександр

//Радіонов Павло
function lovefunc(flower1, flower2) {
  // Перевіряю, чи кількість пелюсток різна за парність
  return (
    (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
    (flower1 % 2 !== 0 && flower2 % 2 === 0)
  );
}
// використання:
console.log(lovefunc(2, 3)); // Вивід: true
console.log(lovefunc(4, 6)); // Вивід: false
console.log(lovefunc(7, 8)); // Вивід: true
//Волохов Антон

//Затонський Степан
