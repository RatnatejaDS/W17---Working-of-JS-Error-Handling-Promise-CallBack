// Write a function that takes two numbers as arguments and returns their sum. Declare a variable inside the function using the var keyword and log its value to the console before it is assigned a value to demonstrate variable hoisting

// Declaring a function 'addNumbers'
function addNumbers(a, b) {
    
    // Log the value of the variable before assignment
    console.log("Before assignment: " + result);

    // Assign the sum of a and b to the variable
    var result = a + b;

    // Log the value of the variable after assignment
    console.log("After assignment: " + result);

    // Return the result
    return result;
}

// Call the function with two numbers
const sum = addNumbers(5, 10);
console.log("Sum: " + sum);


// output 
            // Before assignment: undefined
            // After assignment: 15
            // Sum: 15


