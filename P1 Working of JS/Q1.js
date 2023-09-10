// Write a function called "addNumbers" that takes two numbers as arguments and returns their sum.
//  Call the function before it is declared to demonstrate hoisting


// Defining Variables 
let a = 5
let b = 10

// Calling the function before declaration
const result = addNumbers(a, b);
console.log(result); // Output should be 15
 
// Function declaration
function addNumbers(a, b) {
    return a + b;
}

// Output ==> 15