const myArrowFuction = (number1, number2) =>{

    let sum = number1 + number2;
    return sum;
}

let num1 = 75, num2 = 30;
let result = myArrowFuction(num1, num2);

console.log(`The sum of two number ${num1} and ${num2} is: ${result}`);

let array1 = [2, 3, 4, 5, 6, 7, 8, 9];
array1.forEach((num) =>{
    console.log(num*num);
})

const square =(num) =>{
    console.log(num*num);
}

//array1.forEach(square);