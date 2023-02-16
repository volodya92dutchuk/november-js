//Деструктеризація обєкта,його розбір
// let user = {
//     name: 'kokos',
//     age: 31,
//     wife: {
//         name: 'olya',
//         age: 40
//     }
//
// }
// let {name, age,wife,wife:{name:wName,age:wAge}} = user;
// console.log(user);
//Перетворювання обєкта в стрінгу,та навпак:


// let user = {
//     name: 'kokos',
//     age: 31,
//     wife: {
//         name: 'olya',
//         age: 40
//     }
// }
// // console.log(user);
// let stringify = JSON.stringify(user);
// console.log(typeof stringify,stringify);
//
// let parse = JSON.parse(stringify);
// console.log(parse);


// const copyCenter = obj => {
//     return JSON.parse(JSON.stringify(obj));
// };;

//Замикання обєкта,інкапсуляція:
//
// function userBuilder(name, age) {
//     let user = {name, age};
//     return {
//         getName() {
//             return user.name;
//         },
//         getAge() {
//             return user.age;
//
//         },
//         setAge(age) {
//             if (age > 0) {
//                 user.age = age;
//             }
//         },
//     }
// }
//
// let builder = userBuilder('vasya', 31);
// console.log(builder);
//
// console.log(builder.getAge());
// console.log(builder.getName());
// builder.setAge(-100);
// console.log(builder.getAge());

//Створити функцію яка приймає масив чисел,сумує та повертає їх:
// let arr = [1, 2, 3];
// const sum = (arr) => {
//     let sum = 0;
//     for (const item of arr) {
//         sum += item;
//
//
//     }
//     return sum;
// }
// console.log(sum(arr));

// //Спред оператор,клонування:
//
// let user = {
//     name: 'kokos',
//     age: 31,
//     wife: {
//         name: 'olya',
//         age: 40
//     }
// };
// let user3 = {...user,status:false,name:'palma'};
// console.log(user3);

//Як за допомогою map and спред оператора,додаємо до масиву щось нове:
// let users = [
//     {name:'Petro',age:22,status:true},
//     {name:'Ivan',age:23,status:true},
//     {name:'Gavrosha',age:24,status:false},
//     {name:'Roma',age:25,status:true},
//     {name:'Pedro',age:26,status:false},
//
// ];
//Старий метод:
// console.log(users.map((value, index) => ({
//         name: value.name,
//         age: value.age,
//         status: value.status,
//         id: index + 1,
//
//     }
// )));

//Новий:
// console.log(users.map((value, index) => ({...value, id: index + 1})));



