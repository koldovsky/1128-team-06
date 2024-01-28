//Тимчук Юрій
function litres(time) {
  return Math.floor(time*0.5);
}
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
function litres(time) {
  return Math.floor(time * 0.5);
}

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
//накладаю обмеження, щоб при відємних значеннях не видавало відємної к-сті води. 
function litres(time) {
    if (time < 0) {
        return 0;
    } else if (time === 1) {
        return 0.5;
  //рахуємо скільки потрібно випити із раундінгом до меншого значення цілого. 
    } else {
        return Math.floor(time * 0.5);
    }
}
let x = litres(1);
console.log(x);
