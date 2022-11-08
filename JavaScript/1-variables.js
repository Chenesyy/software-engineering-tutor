//========== Variable Declaration ==========//
var fName = 'Aven'; //global scope. Not good in practice
let _age = 32; //local scope. Recommended in practice 
const sex = 'Female'; //unchanging variable
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
// console.log(age);
// console.log(sex);
/*---*/


//========== Strings ==========//
/*---*/
// const abc = 'Hello';
// const xyz = 'World';
// const qwerty = `${abc} ${xyz}`;

// console.log(qwerty);
// console.log(abc + ' ' + xyz);
/*---*/

/*---*/
// const text = 'Hello I'm Chester';
// const text = "Hello I'm Chester";
// console.log(text1);

// // const text2 = "I said: "Gwapo ako"";
// // const text2 = `I said: "Gwapo ako"`;
// // const text3 = 'I said: "Gwapo ako"';

// // console.log(text2);
// // console.log(text3);
/*---*/


//========== Type Coercion ==========//
//Type Coercion - the automatic or implicit conversion of values from one data type to another

/*---*/
// const combine = fName + age + false; //Type Coercion - the automatic or implicit conversion of values from one data type to another
// console.log(combine);
/*---*/


//========== Arrays ==========//
/*---*/
let numbersArray = [1, 2, 3, 4];
let alphabet_array = ['a', 'e', 'i', 'o', 'u'];
let BooleanArray = [true, true, false, true];

// let random_array = [1, 'string', 3, true, 'text', false];
// console.log(random_array);
/*---*/


//========== Objects ==========//
/*---*/
let employee = {
    employee_id: 1,
    first_name: 'Greg',
    last_name: 'Kelly'
}

// console.log(employee.first_name);
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