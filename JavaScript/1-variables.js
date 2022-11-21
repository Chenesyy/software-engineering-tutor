//========== Variable Declaration ==========//
var fName = 'Aven'; //global scope. Not good in practice
let _age = 32; //local scope. Recommended in practice 
const sex = 'Female'; //unchanging variable. Recommended in practice
// const 123abc = false; //cannot start with numbers
// const &abc = true; //cannot start with symbols

/*---*/
// if (true) {
//     var lName = 'Chong';
//     let food = 'Burger';
// }

// console.log(lName);
// console.log(food);
/*---*/

/*---*/
// fName = 'Derrick';
// _age = 12;
// sex = 'Male';

// console.log(fName);
// console.log(_age);
// console.log(sex);
/*---*/


//========== Strings ==========//
/*---*/
// const abc = 'Hello';
// const xyz = "World";
// const qwerty = `${abc} ${xyz}`;

// console.log(qwerty);
// console.log(abc + ' ' + xyz);

// console.log(`Hello, I work at the biggest company in the ${xyz}.`);
// console.log('Hello, I work at the biggest company in the ' + xyz);
/*---*/

/*---*/
// const text = 'Hello I'm Chester';
// const text = "Hello I'm Chester";
// console.log(text);

// // const text2 = "I said: "Gwapo ako"";
// // const text2 = `I said: "Gwapo ako"`;
// // const text3 = 'I said: "Gwapo ako"';

// // console.log(text2);
// // console.log(text3);
/*---*/

/*---*/
// Improvement: escape characters in string like \n \t etc
/*---*/


//========== Arithmetic Operators ==========//
// Operators:
// + (Addition)
// - (Subtraction)
// * (Multiplication)
// / (Division)
// % (Modulo)
// ++ (Increment)
// -- (Decrement)
// += (Addition Assignment)
// -= (Subtraction Assignment)
// *= (Multiplication Assignment)
// /= (Division Assignment)

/*---*/
// let modulo1 = 10 % 2; //Returns the pinaka unang natira when doing division
// let modulo2 = 11 % 2;

// console.log(modulo1); //0
// console.log(modulo2); //1
/*---*/

/*---*/
// let divisible1 = 71 % 3; //Use case: Can determine whether a number is divisible by 3
// let divisible2 = 72 % 3;

// console.log(`71 is not divisible by 3 because the modulo value is ${divisible1}. Whereas 72 is divisible by 3 because the modulo value is ${divisible2}`);
/*---*/

/*---*/
// let number10 = 10;
// console.log(`Pre-increment = ${++number10}`);

// let numberTen = 10;
// console.log(`Post-increment = ${numberTen++}`);
// console.log(`Post-increment = ${numberTen}`);

// let numberShi = 10;
// console.log(`Pre-decrement = ${--numberShi}`);

// let numberSampu = 10;
// console.log(`Post-decrement = ${numberSampu--}`);
// console.log(`Post-decrement = ${numberSampu}`);
/*---*/

/*---*/
// let sample = 18;
// let sampleResult = 18 + 2;
// console.log(sampleResult);

// sample += 2;
// console.log(sample);

// let sample2 = 18;
// let sampleResult2 = 18 - 2;
// console.log(sampleResult2);

// sample2 -= 2;
// console.log(sample2);

// let sample3 = 18;
// let sampleResult3 = 18 * 2;
// console.log(sampleResult3);

// sample3 *= 2;
// console.log(sample3);

// let sample4 = 18;
// let sampleResult4 = 18 / 2;
// console.log(sampleResult4);

// sample4 /= 2;
// console.log(sample4);
/*---*/


//========== Type Coercion ==========//
//Type Coercion - the automatic or implicit conversion of values from one data type to another

/*---*/
// const combine = fName + _age + false; //Type Coercion - the automatic or implicit conversion of values from one data type to another
// console.log(combine);

// const sum = '123' - 12;
// console.log(sum);
/*---*/


//========== Arrays ==========//
/*---*/
let numbersArray = [1, 2, 3, 4]; // Camel case
let alphabet_array = ['a', 'e', 'i', 'o', 'u']; // Snake case
let BooleanArray = [true, true, false, true]; // Pascal case

// let random_array = [1, 'string', 3, true, 'text', false];
// console.log(random_array);
/*---*/


//========== Objects ==========//
/*---*/
let employee = {
    employee_id: 1,
    first_name: 'Greg',
    last_name: 'Kelly'
} // key : value aka Key-value pair

// console.log(employee.first_name); // dot notation
// console.log(employee['last_name']);
/*---*/

//========== Destructuring ==========//
/*---*/
let [index0, index1, index2] = numbersArray;
let [firstElement, secondElement] = [123, 321];

// console.log(index2);
// console.log(`The reverse order of ${firstElement} is ${secondElement}`);
/*---*/

/*---*/
let { employeeId, firstName, lastName } = employee;
let { food, drink } = {
    food: 'Karekare',
    drink: 'Milktea'
}

// console.log(firstName);
// console.log(`I like to eat ${food} with ${drink}`);
/*---*/