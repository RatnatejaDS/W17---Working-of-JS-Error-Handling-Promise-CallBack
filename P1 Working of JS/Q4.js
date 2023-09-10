// Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign them values and log their values to the console before and after they are declared to demonstrate variable hoisting


// NOTE : 

// In JavaScript, variables declared with 'let' and 'const' are subject to a concept called "hoisting."

// This means that the variable is moved to the top of its containing block or function during the compilation phase, but it's not initialized.

// So, when we try to console.log(a), a exists due to hoisting but has no value assigned to it, which is why it throws an error, typically "ReferenceError: Cannot access 'a' before initialization."

// Variables declared with 'var' are also hoisted to the top of their containing function or script, but they are initialized with a default value of 'undefined'. 

// So, when we try to console.log(a), a exists due to hoisting and has the value undefined. That's why it doesn't throw an error, and we see "undefined" in the console.


// Trying to access the values before scope
console.log('Trying to access before the scope : ');
console.log('a = ' + a); // 'a' is accessed before declaration; this will throw an error
console.log('b = ' + b); // 'b' is accessed before declaration; this will not throw an error but will log 'undefined'
console.log('c = ' + c); // 'c' is accessed before declaration; this will throw an error

// Inside the scope
if (true) {
    console.log('Inside the Scope : ');

    console.log('Before Declaration : ')
    console.log('a = ' + a); // 'a' is accessed before declaration; this will  throw an error 
    console.log('b = ' + b); // 'b' is accessed before declaration; this will not throw an error but will log 'undefined'
    console.log('c = ' + c); // 'c' is accessed before declaration; this will  throw an error

    let a // Variable 'a' is declared with let, not hoisted, and is in the Temporal Dead Zone (TDZ)
    var b // Variable 'b' is declared with var, hoisted, and initialized with 'undefined'
    const c = 6 // Variable 'c' is declared with const, hoisted, and initialized with 6

    console.log('Before Assigning values : ');
    console.log('a = ' + a); // 'a' is accessed before assignment; this will not throw an error but will log 'undefined'
    console.log('b = ' + b); // 'b' is accessed before assignment; this will not throw an error but will log 'undefined'
    console.log('c = ' + c); // 'c' is accessed after declaration and initialization; this will log '6'

    a = 1 // Variable 'a' is assigned a value
    b = 2 // Variable 'b' is assigned a value

    console.log('After Assigning values : ');
    console.log('a = ' + a); // 'a' is accessed after assignment; this will log '1'
    console.log('b = ' + b); // 'b' is accessed after assignment; this will log '2'
    console.log('c = ' + c); // 'c' is accessed after declaration and initialization; this will log '6'
}

console.log('Trying to access after the scope : ');
console.log('a = ' + a); // 'a' is accessed after the scope and is declared as 'let' which is local scope, this will throw an error.
console.log('b = ' + b); // 'b' is accessed after the scope; and is declared as 'var' which is Global scope, this will log '2'
console.log('c = ' + c); // 'c' is accessed after the scope and is declared as 'const' which is local scope, this will throw an error.



// Output 

// Trying to access before the scope : 
// ReferenceError: a is not defined
// b = undefined
// ReferenceError: c is not defined

// Inside the Scope : 
// Before Declaration:
// ReferenceError: Cannot access 'a' before initialization
// b = undefined
// ReferenceError: Cannot access 'c' before initialization

// Before Assigning values :
// a = undefined
// b = undefined
// c = 6

// After Assigning values :
// a = 1
// b = 2
// c = 6

// Trying to access after the scope :
// ReferenceError: a is not defined
// b = 2
// ReferenceError: c is not defined