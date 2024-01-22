//Тимчук Юрій

//Ткач Євген
function makeNegative(num) {
  return num < 0 ? num : -num;
}
//Токарева Дар'я
function makeNegative(num) {
  if (num > 0) {
    return num * -1;
  } else {
    return num;
  }
}
//Юрій Світуха
function makeNegative(num) {
  if(num > 0){
    return -num;
  }
  else{
    return num;
  }
}

//Ярема Наталія
function makeNegative(num) {
  if (num > 0) return -num;
  else return num;
}
//Михальська Мар'яна

//Мучкін Олександр

//Радіонов Павло
function makeNegative(num) {
  // тут перевіряю, чи число вже є від'ємним
  if (num > 0) {
    // Якщо так, то змінюю його на від'ємне
    return -num;
  } else {
    // Якщо воно вже від'ємне, повертаю його без змін
    return num;
  }
}
console.log(makeNegative(1)); // вивід: -1
console.log(makeNegative(-5)); // вивід: -5
console.log(makeNegative(0)); // вивід: 0
console.log(makeNegative(0.12)); // вивід: -0.12
//Волохов Антон

//Затонський Степан
