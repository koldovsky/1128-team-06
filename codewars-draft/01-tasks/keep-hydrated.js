//Тимчук Юрій

//Ткач Євген
function litres(time) {
  return Math.floor(time * 0.5);
}
//Токарева Дар'я
function litres(time) {
  let litresPerHour = 0.5;
  return litresPerHour * time - ((litresPerHour * time) % 1);
}
//Юрій Світуха

//Ярема Наталія
function litres(time) {
  return Math.floor(time*0.5);
}

//Михальська Мар'яна

//Мучкін Олександр

//Радіонов Павло
function litres(time) {
  // Помножую час на швидкість пиття води 
  return Math.floor(time * 0.5);
}
console.log(litres(3)); // Вивід: 1
console.log(litres(6.7)); // Вивід: 3
console.log(litres(11.8)); // Вивід: 5
//Волохов Антон

//Затонський Степан
