//Задание 1

// const people = [
//   { name: 'Глеб', age: 29 },
//   { name: 'Анна', age: 17 },
//   { name: 'Олег', age: 7 },
//   { name: 'Оксана', age: 47 }
// ];

// console.log(people.sort(function(a, b){
//   return a.age-b.age
// }));

//Задача 2

// function isPositive(number) {
//   return number >=0;
//   }
//   function isMale(person) {
//   return person.gender === 'male';
//   }
//   function filter(arr, callback) {
//   const resultArr = [];
//   arr.map((elem) => {
//     if (callback(elem))  {
//     resultArr.push(elem)
//   }
// });
//   return resultArr;
// }
  
//   console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
  
//   const people = [
//      {name: 'Глеб', gender: 'male'},
//      {name: 'Анна', gender: 'female'},
//      {name: 'Олег', gender: 'male'},
//      {name: 'Оксана', gender: 'female'}
//   ];
  
//   console.log(filter(people, isMale));

//Задача 3

// let timerId = setInterval(() => alert('tick'), 3000);

// setTimeout(() => { clearInterval(timerId); alert('30 секунд прошло'); }, 30000);

//Задача 4

// function delayForSecond(callback) {
//   setTimeout(callback, 1000);
//   callback();
// }

// delayForSecond(function () {
//   console.log('Привет, Глеб!');
// })

// Задание 5

// function delayForSecond(cb) {
//   setTimeout(() => {
//       console.log('Прошла одна секунда');
//       if(cb) { 	cb(); }

//   }, 1000)
// }


// function sayHi (name) {
//   console.log(`Привет, ${name}!`);
// }

// delayForSecond(setTimeout(() => (sayHi('Глеб')), 2000))



