// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.

// let word1 = 'Hello';
// let word2 = 'owu';
// let word3 = 'com';
// let word4 = 'ua';
// let number1 = 1;
// let number2 = 10;
// let number3 = -999;
// let number4 = 123;
// let number5 = 3.14;
// let number6 = 2.7;
// let number7 = 16;
// let boolean1 = true;
// let boolean2 = false;

// Вивести кожну змінну за допомогою: console.log , alert, document.write

// console.log(word1);
// console.log(word2);
// console.log(word3);
// console.log(word4);
// console.log(number1);
// console.log(number2);
// console.log(number3);
// console.log(number4);
// console.log(number5);
// console.log(number6);
// console.log(number7);
// console.log(boolean1);
// console.log(boolean2);
//
// alert(word1);
// alert(word2);
// alert(word3);
// alert(word4);
// alert(number1);
// alert(number2);
// alert(number3);
// alert(number4);
// alert(number5);
// alert(number6);
// alert(number7);
// alert(boolean1);
// alert(boolean2);
//
// document.write(word1);
// document.write(word2);
// document.write(word3);
// document.write(word4);
// document.write(number1);
// document.write(number2);
// document.write(number3);
// document.write(number4);
// document.write(number5);
// document.write(number6);
// document.write(number7);
// document.write(boolean1);
// document.write(boolean2);

//- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

// let firstName = "Denys ";
// let middleName = "Volodymirovich ";
// let lastName = 'Dyrda';

// let person = firstName + middleName + lastName;

// console.log(person);

//- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;

// let a = 100;
// let b = '100';
// let c = true;

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

// let name = prompt('Ім\'я?', 'Введіть текст');
// let name2 = prompt('По-батькові?', 'Введіть текст')
// let age = +prompt('Вік?', 'Введіть число');
// console.log(`${name} ${name2}. ${age} роки`);

// - Взяти змінні з завдання вище та зєднати їх в одну змінну (конкатинація).

// let line = name + ' ' + name2 + '. Вік: ' + age + 'роки';
// console.log(line);

// - За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to number JS"). Вивести їх в консоль.

// let firstNumber = +prompt('Введіть число');
// let secondNumber = +prompt('Введіть число');
// let thirdNumber = +prompt('Введіть число');
//
// console.log(firstNumber, secondNumber, thirdNumber);

// - За допомогою prompt() отримати 4 числа. Привести їх до числа за допомогою parseInt. Додати їх всі мож собою і результат вивести в консоль.

// let num1 = prompt('Введіть число');
// let num2 = prompt('Введіть число');
// let num3 = prompt('Введіть число');
// let num4 = prompt('Введіть число');

// console.log(parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4));

// - За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat.
// Просумувати їх. Отрманий результат записати в змінну result. Вивести цю змінну в консоль.

// let num1 = prompt('Введіть число');
// let num2 = prompt('Введіть число');
// let num3 = prompt('Введіть число');
//
// let result = parseFloat(num1) + parseFloat(num2) + parseFloat(num3);
//
// console.log(result);

// - За допомогою prompt() отримати 3 числа з плаваючою точкою. Заокруглити їх (Google "round number JS"). Просумувати їх між собою. Результат вивести в консоль.

// let num1 = parseFloat(prompt('Введіть число'));
// let num2 = parseFloat(prompt('Введіть число'));
// let num3 = parseFloat(prompt('Введіть число'));
//
// console.log(num1, num2, num3);
//
// let res = Math.round(num1) + Math.round(num2) + Math.round(num3)
//
// console.log(res);

// - За допомогою prompt() отримати 2 цілих числа.
//     Перше число - це число яке будуть підносити до степеня. Друге число - це число яке являється степенню.
//     За допомогою Math.pow (Google) піднести перше число в степінь другого числа.
//     Example. Число 1 = 5. Число 2 = 2. Результат = 25

// let num1 = +prompt('Введіть число');
// let num2 = +prompt('Введіть число');
//
// let res = Math.pow(num1, num2);
//
// console.log(res);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.

// let a = 100;
// let b = '100';
// let c = true;
//
// console.log(typeof a, typeof b, typeof c);

// - Поставет відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразаї не використовувати однакові оператори!!!

// 5 < 6 -> true
// 5 > 6 -> false
// 5 === 6 -> false
// 5 >= 6 -> false
// 10 === 10 -> true
// 10 == 10 -> true
// 10 > 10 -> false
// 10 < 10 -> false
// 10 != 10 -> false
// 123 === '123' -> false
// 123 == '123' -> true

// Додатково:
//     - Подивіться на наступні вирази і спробуйте вгадати яким буде вивід в консоль. Перевірте себе.

// console.log(132 > 100 && 45 < 12 ); // false
// console.log(34 > 33 && 23 < 90 ); // true
// console.log(99 > 100 && 45 > 12 ); // false
// console.log(132 > 100 || 45 < 12 ); // true
// console.log(111 > 11 || 45 < 111 ); // true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ); // true
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) ); // true
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ); // false
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 )); // true
// console.log(!!'-1'); //true
// console.log(!!-1); // true
// console.log(!!'0'); // true
// console.log(!!'null'); // false
// console.log(!!'undefined'); //false
// console.log(!!(3/'owu')); //true
// console.log((111 > 11 || 45 < 111) ||  !!'0'); //true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); // false

// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
// 1. Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
// За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.

// let str = 'Привіт';
// let num = 123;
// let flag = true;
// let txt = 'true';

// console.log(typeof str);
// console.log(typeof num);
// console.log(typeof flag);
// console.log(typeof txt);

// 2. Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних оператцій отримайте числа:

// let a1 = 4 * 8 + 2;
// let a2 = 2 * 2 * 3;
// let a3 = 10 * 6 + 6;
// let a4 = 15 * 2 * 3;
// let a5 = 30 * 3 - 3;
//
// console.log(a1, a2, a3, a4, a5);

// 3.  Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:

// let a6 = 5%3;
// let a7 = 3%5;
// let a8 = 5 + '3';
// let a9 = '5' - 3;
// let a10 = 75 + 'кг';
//
// console.log(a6, a7, a8, a9, a10);

// 4. Напищіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значееня площі зберігати в змінній s.

// let height = 23;
// let width = 10;
//
// let s = height * width;
//
// console.log(s);


// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.

// let heightC = 10;
// let dC = 4;
//
// let v = 3.14 * Math.pow(dC, 2) * heightC;
//
// console.log(v);

// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).

// let n = 3;
// let m = 4;
//
// let k = Math.sqrt( Math.pow(n, 3) + Math.pow(m, 2)); // ??? kak izvlech kvadratnuy koren
//
// let k1 = Math.hypot(n, m);
//
// console.log(k, k1);

// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log

// let str = 'Hello world';
//
// document.write(str);
// alert(str);
// console.log(str);

// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).

// alert('Denis Dyrda \n 32 year \n IT');

// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//     Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//     Вывести в документ содержимое переменной concatenation спомощью document.write

// let str1 = 'Кто ';
// let str2 = 'ты ';
// let str3 = 'такой?';
// let concatenation = str1 + str2 + str3;
//
// document.write(concatenation);

// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?

// let str = "20";
// let a = 5;
//
// document.write(str + a + "<br/>");
// document.write(str - a + "<br/>");
// document.write(str * "2" + "<br/>");
// document.write(str / 2 + "<br/>");

// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?

// console.log(
// parseInt("3.14"),
// parseInt("-7.875"),
// parseInt("435"),
// parseInt("Вася"));

// 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже

// let str = prompt("Enter something", "ho-ho")
// console.log(str);