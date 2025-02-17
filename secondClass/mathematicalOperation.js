//Operator in JS
// Used to perform some operation on data.
/*
Arithmetic Operators
    like: +, -, *, /
Modulus
Exponentiation
Increment
Decrement
*/

// Arithmetic Operator example
let a = 5;
let b = 2;
let sum = a + b; // sum of a and b = 7
let div = a / b; // divide of a and b = 2.5
let mul = a * b; // mulitiply of a and b = 10
let sub = a - b; // subtraction of a and b = 3
console.log("Sum: "+sum);
console.log("Divide: "+div);
console.log("Multiply: "+mul);
console.log("Subtraction: "+sub);

//Modulus
let modulus = a%b; // modulus of a and b = 1
console.log("Modulus: "+modulus);

//Exponentiation
let expo = a**b; // Exponentiation of a and b = 1
console.log("Exponentiation: "+expo);
//Increment
let increment = ++a; // Increment of a = 6
console.log("Pre-increment: "+increment);
//Decrement
let decrement = --a; // Decrement of a = 6
console.log("Pre-decrement: "+decrement);


//Unary Operator

let x = 10;
let y = 8;

console.log("x = ", x, "& y = ", y);
x = x + 1;
y = y + x;
console.log("x = ", x, "& y = ", y);
x += 5;
y -= 6;
console.log("x = ", x, "& y = ", y);