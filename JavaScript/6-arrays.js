//========== Arrays ==========//
/*---*/
let numbers_array = [1, 2, 3, 4];
let vowelsArray = ['a', 'e', 'i', 'o', 'u'];
let BooleanArray = [true, true, false, true];
let random_array = [1, 'a', 3, true, 'five', false];
/*---*/


//========== For...in vs For...of ==========//
/*---*/
// for (let i = 0; i < vowelsArray.length; i++) {
//     console.log(vowelsArray[i]);
// }

// // for (i in vowelsArray) { // returns the 'key' (index)
// //     console.log(i);
// // }

// // for (i of vowelsArray) { // return the 'value' 
// //     console.log(i);
// // }
/*---*/


//========== For Each ==========//
/*---*/
let numbers_to_string = [];

// // basic for loop
// for (let i = 0; i < numbers_array.length; i++) {
//     numbers_to_string.push(String(numbers_array[i]));
// }
// console.log(numbers_to_string);

// // forEach
// // numbers_to_string = [];
// // numbers_array.forEach(num => numbers_to_string.push(String(num)));
// // console.log(numbers_to_string);
/*---*/

/*---*/
// numbers_array.forEach((num, idx) => { 
//     console.log(`${idx}: ${num}`);
// });
/*---*/


//========== Map ==========//
/*---*/
// const new_numbers_array = numbers_array.map(el => el += 1);

// console.log(new_numbers_array);
/*---*/

/*---*/
// const new_array = BooleanArray.map(bool => {
//     if (bool) {
//         return 'optimistic';
//     }
//     return 'pessimistic';
// });

// console.log(new_array);
/*---*/

/*---*/
// const NewBooleanArray = BooleanArray.map((bool, idx) => `${idx}: ${bool}` );

// console.log(NewBooleanArray);
/*---*/


//========== Find ==========//
/*---*/
// const meronBa1 = vowelsArray.find(vowel => vowel === 'a');
// const meronBa2 = vowelsArray.find(vowel => vowel === 'v');

// console.log(meronBa1);
// console.log(meronBa2);
/*---*/

/*---*/
const numArray = [12, 44, 78, 2, 48, 29, 91, 100];

// const numero = numArray.find(num => num === 2);

// console.log(numero);
/*---*/

/*---*/
// const evenNums = numArray.find(num => num % 2 === 0); // it will only return the first occurence

// console.log(evenNums);
/*---*/


//========== Filter ==========//
/*---*/
// const evenNums = numArray.filter(num => num % 2 === 0);

// console.log(evenNums);
/*---*/

/*---*/
// let kpops = ['mamamoo', 'blackpink', 'redvelvet', 'itzy', 'momoland', 'bts'];

// const modifiedWords = kpops.filter(kpop => kpop.length > 4);
// console.log(modifiedWords);
/*---*/


//========== Spread Operators ==========//
/*---*/
// Taking off the array
// let sample_array = [[ 2, 54, 76 ]];

// console.log(sample_array);
// console.log(...sample_array);
/*---*/

/*---*/
// When copying
// let names = ['Aven', 'Sy', 'Panget'];
// let namesCopy = ['Chester', 'Pogi', ...names, 'Sobra'];
// // let namesCopyCopy = [ ...names, ...namesCopy ];

// console.log(namesCopy);
// // console.log(namesCopyCopy);
/*---*/

/*---*/
// let animals = ['Dog', 'Cat', 'Horse', 'Turtle'];
// let animals_copy = animals;
// // let animals_copy = [...animals];

// animals_copy.push('Dinosaur');

// console.log(animals);
/*---*/

/*---*/
// const sum = (a, b, c, d, e) => {
//     return a + b;
// };

// // const sum = (...numbers) => {
// //     let total = 0;
// //     numbers.forEach(number => {
// //         total += number;
// //     });
// //     return total;
// // };

// let array = [1,2,3,4,5];

// console.log(sum(1,2,3,4,5));
// console.log(sum(...array));
/*---*/

/*---*/
let array = [12, 45, 46, 15, 10, 91];

// console.log(Math.min(...array));
/*---*/

/*---*/
// let [idx0, idx1, ...idxn] = array;

// console.log(idx0);
// console.log(idx1);
// console.log(idxn);
/*---*/
