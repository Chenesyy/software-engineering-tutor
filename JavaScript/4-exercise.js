//*****Exercise #1*****//
// Given an integer, determine whether the integer is odd or even. 
// Console log the output "XX is an even/odd number" where XX is the given integer



//*****Exercise #2*****//
// Given an integer, compute for its factorial



//*****Exercise #3*****//
// Find the bug

const rows = 7;
let output = '';

for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= i; j++) {
        output += j + '  ';
    }
    console.log(output);
    output = '';
}