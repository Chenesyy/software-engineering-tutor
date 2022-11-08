//========== If-Else ==========//
/*---*/
if (true) {
    console.log('Inside if block');
}
/*---*/

/*---*/
// if (false) {
//     console.log('Inside if block');
// } else if (true) {
//     console.log('Inside else if block');
// }
/*---*/

/*---*/
// if (false) {
//     console.log('Inside if block');
// } else if (false) {
//     console.log('Inside else if block');
// } else {
//     console.log('Inside else block');
// }
/*---*/


//========== Relational Operators ==========//
// Operators:
// < (less than)
// > (greater than)
// <= (less than equal to)
// >= (greater than equal to)
// == (equals)
// != (not equal)
// === (strictly equals)
// !== (strictly not equal)

/*---*/
let number = 1;
let string = '1';

// if (number == string) console.log('Inside if block with equals');
// // if (number === string) console.log('Inside if block with strictly equals');
/*---*/

/*---*/
let dos = 2;
let two = '2';

// if (dos != two) console.log('Inside if block with not equal');
// // if (dos !== two) console.log('Inside if block with strictly not equal');
/*---*/


//========== Logical Operators ==========//
// Operators:
// && (AND)
// || (OR)
// ! (NOT)

/*---*/
// if (true && true) {
//     console.log('Both conditions needs to be true');
// }

// if (true && false) {
//     console.log('Even at least one false will make the condition false');
// }
/*---*/

/*---*/
// if (true || false) {
//     console.log('At least one condition needs to be true');
// }

// if (false || false) {
//     console.log('None of the conditions are true');
// }
/*---*/

/*---*/
// if (true && !false) {
//     console.log('Turning false into true by using NOT operator');
// }

// if (!true || true) {
//     console.log('Even though I turned true to false, there is still another true');
// }
/*---*/

/*---*/
// let number1 = 10;
// let number2 = 3;
// const sum = number1 + number2;
// let total = 13;
// let bool = false;

// if (total === sum && bool === true) {
//     console.log('Nasa loob ng if block!');
// } else if (total === sum || bool === true) {
//     console.log('Nasa loob ng else if block!');
// }
/*---*/


//========== Ternary Operator ==========//
// Useful when you have if and else part 

/*---*/
// let x = 5;
// let y = 3;

// const result1 = x > 2 ? 'Yes, 5 is greater than 2' : 'No, 5 is not greater than 2';
// const result2 = x === y ? 'Yes, 5 is equals to 3' : 'No, 5 is not equals to 3';

// console.log(result1);
// console.log(result2);
/*---*/

/*---*/
// let z = 10;

// const result3 = 
//     z < 10 ? 'Yes, 10 is less than 10' :
//     z > 10 ? 'Yes, 10 is greater than 10' :
//     z === 10 ? 'Yes, 10 is equals to 10' :
//     'No conditions passed'

// console.log(result3);
/*---*/


//========== Chaining If-Else ==========//
// const day = 'Saturday';

// if (day === 'Sunday') {
//     console.log('Today is Sunday!');
// } else if (day === 'Monday') {
//     console.log('Today is Monday!');
// } else if (day === 'Tuesday') {
//     console.log('Today is Tuesday!');
// } else if (day === 'Wednesday') {
//     console.log('Today is Wednesday!');
// } else if (day === 'Thursday') {
//     console.log('Today is Thursday!');
// } else if (day === 'Friday') {
//     console.log('Today is Friday!');
// } else if (day === 'Saturday') {
//     console.log('Today is Saturday!');
// } else {
//     console.log('Wala na ibang araw');
// }


//========== Switch-Case ==========//
/*---*/
// const day = 'Monday';

// switch (day) {
//     case 'Sunday':
//         console.log('Today is Sunday!');
//         break;
//     case 'Monday':
//         console.log('Today is Monday!');
//         break;
//     case 'Tuesday':
//         console.log('Today is Tuesday!');
//         break;
//     case 'Wednesday':
//         console.log('Today is Wednesday!');
//         break;
//     case 'Thursday':
//         console.log('Today is Thursday!');
//         break;
//     case 'Friday':
//         console.log('Today is Friday!');
//         break;
//     case 'Saturday':
//         console.log('Today is Saturday!');
//         break;
//     default:
//         console.log('Wala na ibang araw');
//         break;
// }
/*---*/

/*---*/
// const day = 'Monday';

// switch (day) {
//     case 'Sunday':
//         console.log('Today is Sunday!');
//     case 'Monday':
//         console.log('Today is Monday!');
//     case 'Tuesday':
//         console.log('Today is Tuesday!');
//     case 'Wednesday':
//         console.log('Today is Wednesday!');
//     case 'Thursday':
//         console.log('Today is Thursday!');
//     case 'Friday':
//         console.log('Today is Friday!');
//     case 'Saturday':
//         console.log('Today is Saturday!');
//     default:
//         console.log('Wala na ibang araw');
// }
/*---*/