// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//   document.write(`<div>Chao</div>`)
//
// }
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//   document.write(`<div>${i} Chao</div>`)
//
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i =0;
// while (i<20) {
//     document.write(`<h1>Orlen</h1>`)
//     i++;
//
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i =0;
// while (i<20) {
//     document.write(`<h1>${i} Orlen</h1>`)
//     i++;
//
// }


// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// document.write(`<ul>`)
// // for (const listOfItem of listOfItems) {
// //     document.write(`<li>${listOfItem}</li>`)
// // }
// // document.write(`</ul>`)

// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву


//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
// for (let product of products) {
//     document.write(`
//     <div class="product-card">
//         <h3 class="product-title">Назва - ${product.title}, Ціна -  ${product.price} </h3>
//         <img src="${product.image}" alt="${product.title}" class="product-image">
// </div> `)
// }


// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//
//
//
// --------------------
//     є масив
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
// for (let user of users) {
//     if (!user.status) {
//         console.log(user)
//     }
//
// }
// for (let user of users) {
//     if (!user.status) {
//         console.log(user)
//     }
//
// }
// for (let user of users) {
//     if (user.age>30) {
//         console.log(user)
//     }
//
// }
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років

// let array = [2,17,13,6,22,31,45,66,100,-18] ;
// let i =0;
// while (i<array.length) {
//     console.log(array[i]);
//     i++
// }

// 1. перебрати його циклом while

//     2. перебрати його циклом for
// let array = [2,17,13,6,22,31,45,66,100,-18] ;
// for (let i = 0; i < array.length; i++) {
//     // const arrayElement = array[i];
//     console.log(array[i])
//
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 0;
// while (i < array.length) {
//     if (i % 2 !== 0) {
//         console.log([i]);
//
//     }
//     i++;
// }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 1; i < array.length; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
//
// }
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 2; i < array.length; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
//
// }
// 7. замінити кожне число кратне 3 на слово "okten"
// let arr = [3, 2, 5, 9, 21];
// let newArr = [];
// for (const number of arr) {
//     if (number % 3 == 0) {
//         newArr.push('okten');
//
//
//     }
// }
// console.log(newArr);

// let arr = [3, 2, 5, 9, 21];
// foreach



// 8. вивести масив в зворотньому порядку.
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = array.length - 1; i >= 0; i--) {
//     const arrayElement = array[i];
//     console.log(array[i]);
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому ц
// иклі (с заду на перед)

// Створити пустий масив,та заповнити його 50 парними чслами за допомогою циклу
// let arr = [];
// for (let i = 0,j = 0; i < 100; i++) {
//     if (i %2===0){
//         arr [j]=i;
//         j++
//     }
// }
// console.log(arr);
//непарні:
// let arr = [];
// for (let i = 0,j = 0; i < 100; i++) {
//     if (i %2){
//         arr [j]=i;
//         j++
//     }
// }
// console.log(arr);
//Зповнити масив 20 рандомними числами:
// let arr=[];
// for (let i = 0; i <20; i++) {
//     arr [i]=Math.floor(Math.random()*100);
//
// }
// console.log(arr);
//Зповнити масив 20 рандомними числами:в діапазоні від 8-732;
// let arr=[];
// for (let i = 0; i <20; i++) {
//     arr [i]=Math.floor(Math.random()*(732-8)+8);
//
// }
// console.log(arr);


