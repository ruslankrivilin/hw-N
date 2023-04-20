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
//     return (number % 2 === 0 ? `Число четное` : `Число нечетное`);
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
//     return isNaN(x) === false && isNaN(y) === false ? alert(x + y) : alert('Одно или оба значения не являются числом')
// }
// numberСheck ();

//Задача 6

// function numberСheck() {

//     (n = +(prompt('введите число')));
//     return isNaN(n) === false ? alert(`n в кубе равняется ${n = n ** 3}`) : alert('Переданный параметр не является числом')

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

    // let month = prompt (`Введите номер месяца`);
    // if (month === 12 || 1 || 2) {
        
    //     function result() {
    //         alert (`Зима`);
    //     }
        
    // } else if (month === 3 || 4 || 5) {
        
    //     function result() {
    //         alert (`Весна`);
    //     }
        
    // } else if (month === 6 || 7 || 8) {
        
    //     function result() {
    //         alert (`Лето`);
    //     }
        
    // } else if (month === 9 || 10 || 11) {
        
    //     function result() {
    //         alert (`Осень`);
    //     }
        
    // } else if (isNaN(n) === true) {
    //     function result() {
    //         alert ('Переданный параметр не является числом');
    //     }
    // }
    // result ();