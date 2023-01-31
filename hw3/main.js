// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let x =1;
// if (x!==0) {
//     console.log('true');
// }else
//     console.log('false');

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = 31;
// if (time >= 0 && time <= 15) {
//     console.log('first decade');
// } else if (time >= 16 && time <= 30) {
//     console.log('second decade');
// } else if (time >= 31 && time <= 45) {
//     console.log('third decade');
// } else if (time >= 46 && time <= 59) {
//     console.log('fourth decade');
// } else {
//     console.log('error');
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day =21;
// if (day >= 1 && day <= 10) {
//     console.log('first decade');
// } else if (day >= 11 && day <= 20) {
//     console.log('second decade');
// } else if (day >= 21 && day <= 31) {
//     console.log('third decade');
// } else {
//     console.log('error');
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let days = +prompt();
// switch (days) {
//     case 1:
//         console.log('sunday');
//         break;
//     case 2:
//         console.log('monday');
//         break;
//     case 3:
//         console.log('tuesday');
//         break;
//     case 4:
//         console.log('wednesday');
//         break;
//     case 5:
//         console.log('thursday');
//         break;
//     case 6:
//         console.log('friday');
//         break;
//     case 7:
//         console.log('saturday');
//         break;
//     default:
//         console.log('777')
//
//
// }

//
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні
// let a =10;
// let b=15;
// if (a>b){
//     console.log('a');
// }
// else if (b>a){
//     console.log('b');
// }
// else {
//     console.log('error');
// }
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
//
