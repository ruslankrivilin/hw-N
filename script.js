//Задача 1

// function min(a, b) {
//     if (a <= b) {
//         return a;
//     } else {
//         return b;
//     }
// }
// let result = min (4, 8);
// alert (result);

//Задача 2

// let question = prompt (`Введите число`);
// let number;
// function even(number) {
//     return number % 2 === 0 ? `Число четное` : `Число нечетное`;
// };
// let result = even(number);
// alert (result);

//Задача 3.1

// function square(x) {
//     alert (x*x);
// }

//Задача 3.2

// function square(x) {
//     return x*x;
// }
// let result = square(x);
// alert (result);

//Задача 4

// let age = prompt (`Сколько Вам лет ?`);

// if (age < 0) {

//     function printMessage() {
//         alert("Вы ввели неправильное значение");
//     }

// } else if (age >= 0 || age <= 12) {

//     function printMessage () {
//         alert (`Привет, друг!`);
//     }
    
// } else (age >= 13) {

//     function printMessage () {
//         alert (`Добро пожаловать!`);
//     }

// }

// printMessage();

//Задача 5

// function numberСheck(x, y) {
//     x = +(prompt('введите число')), 
//     y = +(prompt('введите число')); 
//     return isNaN(x) === false && isNaN(y) === false ? alert(x + y) : alert('Одно или оба значения не являются числом');
// }
// numberСheck ();

// Задача 6

// function numberСheck() {

//     n = prompt('введите число');
//     alert(isNaN(n) ? `Переданный параметр не является числом` : `n в кубе равняется ${n = n ** 3}`)

// };

// numberСheck();

//Задача 7

// function getRectangleArea() {
//     return 3,14 * this.radius * 2;
//   }
// function getRectanglePerimeter() {
//     return 2 * 3,14 * this.radius;
//   }
  
// const circle1 = {
//     radius: 4,
  
//     getArea : getRectangleArea,
//     getPerimeter : getRectanglePerimeter,
// };
  
// const circle2 = {
//     radius: 6,
  
//     getArea : getRectangleArea,
//     getPerimeter : getRectanglePerimeter,
// };
  
// alert(circle1.getPerimeter());
// alert(circle2.getArea());
// alert(circle1.getArea());
// alert(circle2.getPerimeter());

//Задача 8


function result(){
    let month = prompt (`Введите номер месяца`);
    if (month === 12 || month === 1 || month === 2) {
        alert(`зима`)
    } else if (month === 3 || month === 4 || month === 5) {
        alert(`весна`)
    } else if (month === 6 || month === 7 || month === 8) {
        alert(`лето`)
    } else if (month === 9 || month === 10 || month === 11) {
        alert(`осень`)
    } else if (isNaN(month)) {
        alert (`Переданный параметр не является числом`);
    }
}
