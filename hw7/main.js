// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname , email, phone) {
//     this.id=id;
//     this.name=name;
//     this.surname=surname;
//     this.email=email;
//     this.phone=phone;
//
//
// }
// const user1 = new User(777,'Petya','Parkinson','ryed.saf@gmai.com',380974566415);
// const user2 = new User(780,'Ivan','Garkinson','ryed.dffg@gmai.com',380974566442);
// const user3 = new User(763,'Vasya','Garcia','ryed.fdf@gmai.com',380974566443);
// const user4 = new User(772,'Grisha','Jackson','ryed.fdfd@gmai.com',380974566445);
// const user5 = new User(778,'Slavik','Merfi','ryed.fd@gmai.com',380974566448);

// const arrayUsers = [];
// arrayUsers.push(user1,user2,user3,user4,user5);
// console.log(arrayUsers);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// const filter = arrayUsers.filter(value => value.id%2===0);
// console.log(filter);
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// const sort = arrayUsers.sort((a, b) => {
//     return a.id - b.id;
// });
// console.log(sort);
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class Client {
//
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// const user1 = new Client(777,'Petya','Parkinson','ryed.saf@gmai.com',380974566415,['cola','pepsi','fanta','sprite','burn',]);
// const user2 = new Client(780,'Ivan','Garkinson','ryed.dffg@gmai.com',380974566442,['cola']);
// const user3 = new Client(763,'Vasya','Garcia','ryed.fdf@gmai.com',380974566443,['pepsi','sprite']);
// const user4 = new Client(772,'Grisha','Jackson','ryed.fdfd@gmai.com',380974566445,['shwepps','burn','mojito']);
// const user5 = new Client(778,'Slavik','Merfi','ryed.fd@gmai.com',380974566448,['cola','pepsi','fanta','sprite']);


// створити пустий масив, наповнити його 10 об'єктами Client

// const arrClients = [];
// arrClients.push(user1,user2,user3,user4,user5);
// console.log(arrClients);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)'

// console.log(arrClients.sort((a, b) => a.order.length - b.order.length));


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model,producer,year,maxSpeed,engine) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//
//     this.engine = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     this.info = function () {
//         for (const carKey in this) {
//             if (typeof this[carKey] !== 'function'){
//                 console.log(`${carKey} -- ${this[carKey]}`);
//             }
//         }
//     }
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
//
// const car = new Car('Toyota','Japan','2000',200,2.5);
// console.log(car);
// car.engine();
// car.info();
// car.increaseMaxSpeed(50);
// car.changeYear(2020);
// car.addDriver({name: 'Vasya'});
// console.log(car);
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car{
//     constructor(model,producer,year,maxSpeed,carEngine) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.carEngine = carEngine;
//     }
//
//
//     engine () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     info () {
//         for (const carKey in this) {
//             if (typeof this[carKey] !== 'function'){
//                 console.log(`${carKey} -- ${this[carKey]}`);
//             }
//         }
//     }
//
//     increaseMaxSpeed (newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//
//     changeYear (newValue) {
//         this.year = newValue;
//     }
//
//     addDriver (driver) {
//         this.driver = driver;
//     }
// }
//
// const car = new Car('Toyota','Japan','2000',200,3.4);
// console.log(car);
// car.engine();
// car.info();
// car.increaseMaxSpeed(50);
// car.changeYear(2020);
// car.addDriver({name: 'Vasya'});
// console.log(car);
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// class Cinderella {
//
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//
//     }
// }
//
// const cinderella1 = new Cinderella('Gabriel', 25, 36);
// const cinderella2 = new Cinderella('Julieta', 30, 35);
// const cinderella3 = new Cinderella('Roma', 27, 41);
// const cinderella4 = new Cinderella('Nastia', 28, 34);
// const cinderella5 = new Cinderella('Tania', 23, 38);
//
// const arrCinderella = [];
// arrCinderella.push(cinderella1, cinderella2, cinderella3, cinderella4, cinderella5);
// console.log(arrCinderella);


// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// class Prince {
//
//     constructor(name, age, findFootSize) {
//         this.name = name;
//         this.age = age;
//         this.findFootSize = findFootSize;
//     }
// }
//
// const prince = new Prince('Ioan', 35, 34);
// const findCindarella = (arr, boy) => {
//     for (const item of arr) {
//         if (item.footSize === boy.findFootSize) {
//             console.log(`My cindarella is ${item.name}`);
//
//         }
//     }
//
// }
// findCindarella(arrCinderella,prince);
//
// const find = arrCinderella.find(value => value.footSize===prince.findFootSize);
// console.log(find);


//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку