function myFunction(x, y){
    let m = x, n=y;
    let sum = m + n;
    console.log(sum);
}
myFunction(20, 50);

function multiply(x, y){
    let m = x, n=y;
    let multiply = m * n;
    return multiply;
}
let result = multiply(20, 5);
console.log(result);


//Arrow Function in JS
const division = (num1, num2) =>{return num1/num2};
let result1 = division(35, 9);

console.log(`The division result is: ${result1}`);