//Задание 1

// let user = `js`;
// console.log(user.toUpperCase())

//Задача 2

// const animals = ['Кошка', 'Кит', 'Комар', 'Носорог'];
// const searchStart = 'ко';

// animals.forEach((animal) => {
// 	if (animal.toLowerCase().includes(searchStart.toLowerCase())) {
// 		console.log(animal);
// 	}
// });

//Задача 3

// console.log (Math.ceil(32.58884)); // Возвращает значение числа, округлённое к большему целому.

// console.log (Math.floor(32.58884)); // Возвращает значение числа, округлённое к меньшему целому.

// console.log (Math.round(32.58884)); // Возвращает значение числа, округлённое до ближайшего целого.

//Задача 4


// let arr = [52, 53, 49, 77, 21, 32];

// console.log("Min:", Math.min(...arr));
// console.log("Max:", Math.max(...arr));

// Задание 5

// function getRandomInt(minValue, maxValue) {
//     return Math.round (Math.random() * (maxValue- minValue)) + minValue;

// }

// console.log(getRandomInt(1, 11));

// Задание 6

// function number (n) {
// let randomNumber = [];

// for(i = 0; i < (Math.floor(n/2)); i++) {
// randomNumber.push(Math.round(Math.random() * n));
// }

// return randomNumber;
// }

// console.log(number(5));

// Задание 7

// function result (minValue, maxValue) {
//    return Math.round(Math.random() * (maxValue - minValue) + minValue);
// }
// console.log (result(2, 6))

//Задание 8

// let myDate = new Date("28 April 2023");
// console.log(myDate); 

//Задание 9

// function getFutureDate(daysAhead) {
// 	const date = new Date();
// 	date.setDate(date.getDate() + daysAhead);
// 	return date;
// }
  
// const fourDays = getFutureDate(73);

// console.log(fourDays)

//Задание 10

// const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

// const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

// let myDate = new Date();

// let fullDate = myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + "- это " + days[myDate.getDay()] + " " + myDate.toLocaleTimeString(`ru-Ru`);

// console.log(fullDate);

//Задание 11

function results() {
    let list = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
list = list.sort(() => Math.random() - 0.5);
alert (list);

let questionOne = prompt (`Чему равнялся первый элемент массива?`);
let questionTwo = prompt (`Чему равнялся последний элемент массива?`);

if (questionOne.toLowerCase() === list [0].toLowerCase() && questionTwo.toLowerCase() === list [list.length - 1].toLowerCase()) {
    alert (`Поздравляю Вы угадали !`);
} else if (questionOne.toLowerCase() === list [0].toLowerCase() || questionTwo.toLowerCase() === list [list.length - 1].toLowerCase()) {
    alert (`Вы были близки к победе!`);
} else {
    alert (`Вы не угадали`);
}
}


