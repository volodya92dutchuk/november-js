// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function area(a,b) {
//  return (a*b);
// }
// let x =area(5,5);
// console.log(x);
//  Або варіант із стрілочною;,якщо одна дія можна так записати;
// let square = (a,b)=>a*b;
// console.log(square(6,5));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let squareC = (r)=>Math.PI*Math.pow(r,2);
// console.log(squareC(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let squareCyl = (h,r)=>Math.PI*Math.pow(r ,2)*h;
// console.log(squareCyl(10, 8));
// - створити функцію яка приймає масив та виводить кожен його елемент
// function arrayPrinter(arr) {
//     for (let arrElement of arr) {
//         console.log(arrElement);
//
//     }
//
//
// }
// arrayPrinter(['string', true, 23, 30]);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function writeHtml(text) {
//     document.write(`<p>${text}</p>`);
//
//
// }
//
// writeHtml("Щось та й виходить");
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function foo(text) {
//     document.write(`
// <ul>
// <li>${text}</li>
// <li>${text}</li>
// <li>${text}</li>
//
// </ul>
//     `)
// }
// foo('Hello my bro');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function foo(text, num) {
//     document.write(`<ul>`)
//     for (let i = 0; i < num; i++) {
//         document.write(`
//     <li>${text}</li>`)
//     }
//
//
// }
//
// document.write(`</ul>`)
//
//
// foo('Are you ok?', 7);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arr = [12, true, false, 'string'];
// let elem = function (array) {
//     document.write(`<ul>`)
//     for (const arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`)
//
//     }
//     document.write(`<ul></ul>`)
//
//
// }
// elem(arr);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let arr = [
//     {
//         id: 1,
//         name: "Kostia",
//         age: 32
//     },
//     {
//         id: 2,
//         name: 'Petya',
//         age: 15
//     }
// ];
// let elem = function (array) {
//     for (const arrayElement of array) {
//         document.write(`<div>${arrayElement.id}---${arrayElement.name}---${arrayElement.age}</div>`)
//
//     }
//
// }
// elem(arr)
// - створити функцію яка повертає найменьше число з масиву
// let arr=[-5,3,85,10,7];
// function foo(array) {
//     let min = array[0];
//     for (let item of array) {
//         if (item<min){
//             min=item;
//         }
//
//     }
//     return min;
//
// }
//
// console.log(foo(arr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arr=[10,1,2];
// const foo = array => {
//     let sum =0;
//     for (let item of array) {
//         sum+=item;
//
//     }
//     return sum;
//
// };
//
// console.log(foo(arr));

// /Створити функцію яка повертає найбільше число з масиву
// let arr =  [200,5,7,101];
// const max= (array)=>{
//     let max = array[0];
//     for (let item of array) {
//         if (item>max){
//             max=item;
//         }
//
//     }
//     return max;
// }
// console.log(max(arr));