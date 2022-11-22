//========== For...in vs For...of Array ==========//
/*---*/
let object = {
    empId: 123,
    fullName: 'Maria Clara',
    age: 13
};

// for (const i in object) { // returns the 'key' (index)
//     console.log(i);
// }

// // for (const i of Object.keys(object)) { // Objects are not iterable 
// //     console.log(i);
// // }

// // for (const [ key, value ] of Object.entries(object)) { 
// //     console.log(key + ': ' + value);
// // }
/*---*/


//========== Spread Operator ==========//
/*---*/
// let data = {
//     id: 123456789,
//     information: {
//         fname: 'Garner',
//         lname: 'Marvin',
//         age: 53
//     },
//     work: 'Software Engineer',
// }

// const dataCopy = {
//     ...data,
//     information: {
//         ...data.information,
//         age: 12
//     }
// };

// // data.information.age = 23;

// console.log(dataCopy);
// // console.log(data);
/*---*/

/*---*/
// let divisible5 = {
//     five: 5, 
//     ten: 10,
//     fifteen: 15,
//     twenty: 20
// };

// let divisible3 = {
//     three: 3,
//     six: 6,
//     nine: 9
// }

// const divisible3And5 = {
//     ...divisible3,
//     ...divisible5
// }

// // const divisible3And5Incorrect = { divisible3, divisible5 };

// console.log(divisible3And5);
// // console.log(divisible3And5Incorrect);
/*---*/
