// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// let sq = function (a, b) {
//     return a * b;
// }
//
// console.log(sq(5, 10));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// let sqR = function (r) {
//     return 3.14 * (r * r);
// }
//
// console.log(sqR(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// let sqC = function (h, r) {
//     return ((2*3.14)*(r*r))+((2*3.14)*r*h)
// }
//
// console.log(sqC(5, 2));

// - створити функцію яка приймає масив та виводить кожен його елемент

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// for (const user of users) {
//     console.log(user)
// }

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// let par = function (text) {
//     document.write(`<p>${text}</p>`)
// }
//
// par('Music');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let list = function (text) {
//     document.write(`
//     <ul>
//     <li>${text}</li>
//     <li>${text}</li>
//     <li>${text}</li>
// </ul>`)
// }
//
// list('to do');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let list1 = function (text, num) {
//     `<ul>`
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     `</ul>`
// }
//
// list1('any text', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arrAll = [1, 2, 3, 'text', true, NaN, undefined, false];
//
// let arrList = function (arr) {
//     `<ul>`
//     for (const arrElement of arr) {
//         document.write(`<li>${arrElement}</li>`)
//     }
//     `</ul>`
// }
//
// arrList(arrAll);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// let arrBlock = function (arr) {
//     for (const arrElement of arr) {
//         document.write(`<div>${arrElement.name} ${arrElement.age} ${arrElement.status}</div>`)
//     }
// }
//
// arrBlock(users);

// - створити функцію яка повертає найменьше число з масиву

// let arrNum = [10, 5, 8, 22, 18, 73, 55, 13];
//
// let bigNum = function (arr) {
//     let num = arr[0];
//     for (const arrElement of arr) {
//         if (arrElement < num) {
//             num = arrElement;
//     }
//     }
//     console.log(num);
// }
//
// bigNum(arrNum);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let arrNum = [10, 5, 8, 22, 18, 73, 55, 13];
// let arrNum1 = [1, 5, 10];
//
// let summ = function (arr) {
//     let sum = 0;
//     for (const arrElement of arr) {
//         sum += arrElement;
//     }
//     console.log(sum)
// }
//
// summ(arrNum);
// summ(arrNum1);