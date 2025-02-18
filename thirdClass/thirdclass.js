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
for(let i=1; i<=100; i+=2){
    console.log("Even number is: ", i);
}


let gameNumber = 53470;
let guessNumber = prompt("Guess the number: ");

while(gameNumber !=guessNumber){
    guessNumber = prompt("Yor guess wrong number! Choose again!!");
}
console.log("Congratulations! You guess the right one!")