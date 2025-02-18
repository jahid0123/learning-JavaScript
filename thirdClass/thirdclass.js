//for loops
for(let i=1; i<=5; i++){
    console.log("Jahid Ahmed!!")
}


//while loop
let i = 1;
while(i<=5){
    console.log("i is: ", i);
    i++;
}


//do while loop
let x = 1;
do{
    console.log("x is: ", x);
    x++
}while(x<=10);

//for of loop
//note this loop use for String and Arrays
let str = "JAHID AHMED";
for(let ver of str){
    console.log("Character is: ", ver);
}


//for in loop
//note this loop use for object
for(let i=1; i<=10; i+=2){
    console.log("Even number is: ", i);
}


let gameNumber = 5;
//let guessNumber = prompt("Guess the number: ");

while(gameNumber !=5){
    guessNumber = prompt("Yor guess wrong number! Choose again!!");
}
console.log("Congratulations! You guess the right one!");


// Template literal Example
let obj={
    item: "Pen",
    price: 10,
    qty: 5
}

let specialTypeString = `This is template literal`;

let output = `The cost of ${obj.item} is ${obj.price} BDT.`;
console.log(output);

//String Interpolation Example...

let data1 =  `The result is: ${1+2+3}`;
console.log(data1);


//String methods in JS

let data2 = "Jahid Ahmed ";
let m = data2.toLowerCase();
let n = data2.toUpperCase();
console.log(data2.length);
console.log(m);
console.log(n);
console.log(data2.trim());


console.log(data2.slice(0,4));

console.log(data2.concat(data1));

console.log(data1.replace('The result is:', 'Value: '));

console.log(data2.charAt(0));


let fullname = prompt('Enter your full name: ');
let username = '@'+fullname+fullname.length;
console.log(username);
