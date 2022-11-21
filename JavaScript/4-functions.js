/*---*/
// let number = "nine one three"

// const split_string = number.split(" ");

// // first number
// if (split_string[0] === "one") {
//     split_string[0] = "1"
// }
// else if (split_string[0] === "two") {
//     split_string[0] = "2"
// }
// else if (split_string[0] === "two") {
//     split_string[0] = "2"
// }
// else if (split_string[0] === "three") {
//     split_string[0] = "3"
// }
// else if (split_string[0] === "four") {
//     split_string[0] = "4"
// }
// else if (split_string[0] === "five") {
//     split_string[0] = "5"
// }
// else if (split_string[0] === "six") {
//     split_string[0] = "6"
// }
// else if (split_string[0] === "seven") {
//     split_string[0] = "7"
// }
// else if (split_string[0] === "eight") {
//     split_string[0] = "8"
// }
// else if (split_string[0] === "nine") {
//     split_string[0] = "9"
// }
// else {
//     split_string[0] = "0"
// }

// // second number
// if (split_string[1] === "one") {
//     split_string[1] = "1"
// }
// else if (split_string[1] === "two") {
//     split_string[1] = "2"
// }
// else if (split_string[1] === "two") {
//     split_string[1] = "2"
// }
// else if (split_string[1] === "three") {
//     split_string[1] = "3"
// }
// else if (split_string[1] === "four") {
//     split_string[1] = "4"
// }
// else if (split_string[1] === "five") {
//     split_string[1] = "5"
// }
// else if (split_string[1] === "six") {
//     split_string[1] = "6"
// }
// else if (split_string[1] === "seven") {
//     split_string[1] = "7"
// }
// else if (split_string[1] === "eight") {
//     split_string[1] = "8"
// }
// else if (split_string[1] === "nine") {
//     split_string[1] = "9"
// }
// else {
//     split_string[1] = "0"
// }

// // third number
// if (split_string[2] === "one") {
//     split_string[2] = "1"
// }
// else if (split_string[2] === "two") {
//     split_string[2] = "2"
// }
// else if (split_string[2] === "three") {
//     split_string[2] = "3"
// }
// else if (split_string[2] === "four") {
//     split_string[2] = "4"
// }
// else if (split_string[2] === "five") {
//     split_string[2] = "5"
// }
// else if (split_string[2] === "six") {
//     split_string[2] = "6"
// }
// else if (split_string[2] === "seven") {
//     split_string[2] = "7"
// }
// else if (split_string[2] === "eight") {
//     split_string[2] = "8"
// }
// else if (split_string[2] === "nine") {
//     split_string[2] = "9"
// }
// else {
//     split_string[2] = "0"
// }

// console.log(split_string[0] + split_string[1] + split_string[2]);
/*---*/

/*---*/
// function convert(number) {
//     if (number === "one") {
//         return "1"
//     }
//     else if (number === "two") {
//         return "index"
//     }
//     else if (number === "three") {
//         return "3"
//     }
//     else if (number === "four") {
//         return "4"
//     }
//     else if (number === "five") {
//         return "5"
//     }
//     else if (number === "six") {
//         return "6"
//     }
//     else if (number === "seven") {
//         return "7"
//     }
//     else if (number === "eight") {
//         return "8"
//     }
//     else if (number === "nine") {
//         return "9"
//     }
//     else {
//         return "0"
//     }
// }

// let numberSample = "nine one three";

// const numberSample_split = number.split(" ");

// console.log(convert(numberSample_split[0]) + convert(numberSample_split[1]) + convert(numberSample_split[2]));
/*---*/


//========== Functions ==========//
// Three ways in declaring functions:
// Function Declaration
// Function Expression
// Arrow Function

/*---*/
// Function Declaration
// function sum1 (a, b) {
//     return a + b;
// }

// console.log(`Using sum2 = ${sum1(4, 1)}`);
/*---*/

/*---*/
// Function Expression
// const sum2 = function(a, b) {
//     return a + b;
// } 

// console.log(`Using sum2 = ${sum2(4, 1)}`);
/*---*/

/*---*/
// // Arrow Function
// const sum3 = (a, b) => a + b; //returns implicitly

// console.log(`Using sum3 = ${sum3(4, 1)}`);
/*---*/

/*---*/
// // Arrow Function inside curly braces
// const sum4 = (a, b) => { 
//     return a + b;
// }

// const sum5 = (a, b) => {
//     console.log('//Line 1');
//     console.log('//Line 2');
//     console.log('//Line 3');
//     return a + b;
// }

// console.log(`Using sum4 = ${sum4(4, 1)}`);
// console.log(`Using sum5 = ${sum5(4, 1)}`);
/*---*/

/*---*/
// No parameters?
// const print = () => console.log("Hello I'm inside print()");
// print();
/*---*/


//========== Optional/Default Parameters ==========//
/*---*/
// const functionWithoutDefault = (Fname, Mname, Lname) => {
//     return `Hello! My full name is ${Lname}, ${Fname} ${Mname}`;
// };

// console.log(functionWithoutDefault('Ni Chester', 'Super', 'Pogi'));

// // const functionWithDefault = (Fname, Mname = 'Sobra', Lname) => {
// //     return `Hello! My full name is ${Lname}, ${Fname} ${Mname}`;
// // };

// // console.log(functionWithDefault('Ni Chester', undefined, 'Pogi'));

// // // const functionAllDefault = (Fname = 'Ni Aven', Mname = 'Sobra', Lname = 'Pangit') => {
// // //     return `Hello! My full name is ${Lname}, ${Fname} ${Mname}`;
// // // };

// // // console.log(functionAllDefault());
/*---*/


//========== Rest Parameters ==========//
/*---*/
// const employees = (emp1, emp2, emp3) => {
//     return `Employee 1: ${emp1}\nEmployee 2: ${emp2}\nEmployee 3: ${emp3}`;
// };

// console.log(employees('Jane', 'John', 'Jake'));

// // const employees = (emp1, emp2, emp3, ...emp) => {
// //     return `Employee 1: ${emp1}\nEmployee 2: ${emp2}\nEmployee 3: ${emp3}`;
// // };

// // console.log(employees('Jane', 'John', 'Jake', 'Jean'));

// // // const employeesModified = (...emp) => {
// // //     for (let i = 0; i < emp.length; i++) {
// // //         console.log(`Employee ${i+1}: ${emp[i]}`);
// // //     }
// // // };

// // // employeesModified('Jane', 'John', 'Jake', 'Jean', 'Jian', 'Jade', 'Jimi', 'Jazz');
/*---*/

//========== Problem with JS ==========//
/*---*/
// // Doesn't catch potential erros
// const multiplyTwoNumbers = (number1, number2) => {
//     return number1 * number2;
// }

// console.log(multiplyTwoNumbers(2,3));
// // console.log(multiplyTwoNumbers(2,3,4,5,6,7,8,9));
// // // console.log(multiplyTwoNumbers(2));
/*---*/

/*---*/
// // arguments object (not very common in practice)
// const multiplyTwoNumbers = function() {
//     let product = 1;
//     for (let i = 0; i < arguments.length; i++) {
//         product *= arguments[i];
//     }
//     return product;
// }

// console.log(multiplyTwoNumbers(2,3,4,5,6,7,8,9));
/*---*/


//========== Return Tricks ==========//
/*---*/
// const isEven = (number) => {
//     const result = number % 2 === 0 ? true : false;
//     return result;
// }
// console.log(`3 is an even number: ${isEven(3)}`);
// console.log(`5 is an even number: ${isEven(5)}`);
// console.log(`123347348372 is an even number: ${isEven(123347348372)}`);

// // const isEven = (number) => {
// //     return number % 2 === 0;
// // }
/*---*/

/*---*/
// const isGreaterThan10LessThan100 = (num) => {
//     if (num > 10 && num < 100) {
//         return true;
//     }
//     return false;
// }

// console.log(`34 is greater than 10 and less than 100: ${isGreaterThan10LessThan100(34)}`);
// console.log(`100 is greater than 10 and less than 100: ${isGreaterThan10LessThan100(100)}`);

// // const isGreaterThan10LessThan100 = (num) => {
// //     return num > 10 && num < 100;
// // }
/*---*/

/*---*/
// const isOddOrisDivisibleBy3 = (num) => {
//     if (num % 2 !== 0 || num % 3 === 0) return true;
//     return false;
// }

// console.log(`34 is an odd number and/or divisible by 3: ${isOddOrisDivisibleBy3(34)}`);
// console.log(`71 is an odd number and/or divisible by 3: ${isOddOrisDivisibleBy3(71)}`);
// console.log(`93 is an odd number and/or divisible by 3: ${isOddOrisDivisibleBy3(93)}`);

// // const isOddOrisDivisibleBy3 = (num) => {
// //     return num % 2 !== 0 || num % 3 === 0;
// // }
/*---*/

/*---*/
// const isEvenNumber = (num) => {
//     return num % 2 === 0 ? `${num} is an even number` : `${num} is an odd number`;
// }

// console.log(isEvenNumber(12));
// console.log(isEvenNumber(35));
/*---*/


//========== Overloading vs Overriding ==========//
// JavaScript does not support method overloading

/*---*/
// const isEvenNumber = (num) => {
//     return num % 2 === 0 ? `${num} is an even number` : `${num} is an odd number`;
// }

// const isEvenNumber = (string) => {
//     return string === 'even' ? `It is an ${even} number` : `It is not an ${even} number`;
// }

// console.log(isEvenNumber(12));
// console.log(isEvenNumber(35));
/*---*/