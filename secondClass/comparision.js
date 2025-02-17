//Comparision Operators
let a = 5;
let b = 5;
let c = "5";

console.log("a==b: ", a==b);
console.log("a==c: ", a==c);
console.log("a===c: ", a===c);
console.log("a!==c: ", a!==c);
console.log(typeof(a));
console.log(typeof(c));
console.log("a<b: ",a<b);
console.log("a>b: ",a>b);
console.log("a<=b: ",a<=b);
console.log("a>=b: ",a>=b);
console.log("a!=b: ",a!=b);

//Logical Operator

// Simple Grading System using conditional Statement

let marks = 33;

if(marks<0 || marks>100){
    console.log("You enter invalid number! Please enter valid number!!");
}else{

    if(marks<=100 && marks >=80){
        console.log("Congrats! You got A+");
    }else if(marks>=70){
        console.log("Congrats! You got A");
    }else if(marks>=60){
        console.log("Congrats! You got A-");
    }else if(marks>=50){
        console.log("Congrats! You got B");
    }else if(marks>=40){
        console.log("Congrats! You got C");
    }else if(marks>=33){
        console.log("Congrats! You got D");
    }else if(marks>=0 && marks<=32){
        console.log("Sorry! You are fail in your exam!!!");
    }
}


//conditonal statement
let mode = "light";
let color;

if(mode === "dark"){
    color = "black";
}

if(mode === "light"){
    color = "white";
}

console.log(color);

// Ternary Operator
// condition? true output: false output;
let age = 15;

age>18? console.log("You are adult") : console.log("You are not adult");

//Switch Statement

let number = 3;

switch(number){

    case 1:
        console.log("congrats! 1. You are pass");
        break;
    case 2:
        console.log("congrats! 2. You are pass");
        break;
    default:
        console.log("Invalid!!");
        


}