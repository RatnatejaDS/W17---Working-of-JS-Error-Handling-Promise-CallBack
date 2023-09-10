// Declare a variable using let inside a block scope and attempt to log its value to the console before it is assigned a value to demonstrate the temporal dead zone

{
    // This is a block scope

    // Trying to log 'x' before it is declared
    console.log(" 'x' before it is declared : " + x); // This will result in a ReferenceError

    // Variable 'x' is declared with 'let,' but not assigned yet
    let x;

    // Trying to log 'X' before assigning a value to it 
    console.log("'X' before assigning a value to it : " + x); // This will give undefined
    
    // Now, let's assign a value to 'x'
    x = 10;

    // Now that 'x' has a value, we can log it
    console.log( "'X' After assigning a value to it : " + x); // This will log '10'
}

console.log('Outside the Scope : ');
// 'x' is not accessible outside the block scope
console.log(x); // This will result in a ReferenceError


// Output 
        // ReferenceError: Cannot access 'x' before initialization
        // 'X' before assigning a value to it : undefined
        // 'X' After assigning a value to it : 10
        // Outside the Scope : 
        // ReferenceError: x is not defined 