// Write a function called "multiplyNumbers" that takes two numbers as arguments and returns their product.
// Use function expressions to define the function and call the function before it is declared to demonstrate
// hoisting

// Call the function expression before declaration
const result = multiplyNumbers(5, 10);
console.log(result);

// Define the function expression
const multiplyNumbers = function(a, b) {
  return a * b;
};

// NOTE : In JavaScript, function expressions are not hoisted in the same way as function declarations. Therefore, we cannot call a function expression before it's declared.

// Output ==>  ReferenceError: Cannot access 'multiplyNumbers' before initialization