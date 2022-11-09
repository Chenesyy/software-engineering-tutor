//========== For Loop ==========//
// for (initialization; condition; increment/decrement/updation)

/*---*/
// let sum = 0;
// for (let x = 0; x < 10; x++) {
//     // console.log(x);
//     sum += x;
// }

// console.log(sum); //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
/*---*/

/*---*/
// const fruits = ['apple', 'orange', 'watermelon', 'pineapple', 'grapes'];
// console.log(fruits[1]);

// // for (let i = 0; i < fruits.length; i++) {
// //     console.log(fruits[i]);
// // }
/*---*/

/*---*/
// Problem when using var
// for (let i = 0; i < 2; i++) {
//     console.log(i);
// }

// console.log(i);
/*---*/


//========== Breaks & Continue ==========//
/*---*/
const threshold = 5;

// for (let i = 0; i < Number.MAX_SAFE_INTEGER; i++) { //9007199254740991
//     if (i === threshold) {
//         break;
//     }
//     console.log(i);
// }
/*---*/

/*---*/
// for (let i = 0; i < 10; i++) {
//     if (i === threshold) {
//         continue;
//     }
//     console.log(i);
// }
/*---*/


//========== While Loop ==========//
/*---*/
// while (true) {
//     console.log('infinity');
// }
/*---*/

/*---*/
// let timer = 4;

// while (timer > 0) {
//     console.log(`I am still cooking. Wait for ${timer}min/s`);
//     timer--;
// }
/*---*/

/*---*/
// let product = 1;

// while (product > 0 && product < 1000) {
//     const randomNum = Math.floor(Math.random() * 10); //random number from 0-9
//     product *= randomNum;
//     console.log(product);
// }
/*---*/


//========== Do While Loop ==========//
/*---*/
// let product = 0;

// while (product > 0 && product < 1000) {
//     const randomNum = Math.floor(Math.random() * 10); //random number from 0-9
//     product *= randomNum;
//     console.log(product);
// }

// // do {
// //     const randomNum = Math.floor(Math.random() * 10); //random number from 0-9
// //     product *= randomNum;
// //     console.log(product);
// // } while (product > 0 && product < 1000);
/*---*/