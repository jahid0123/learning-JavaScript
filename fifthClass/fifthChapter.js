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
let division = (num1, num2) =>{return num1/num2};
let result1 = division(35, 9);

console.log(`The division result is: ${result1}`);


//practice 

function countVowel(str){

    let count = 0;
    for(let char of str){
        if(char =='a' || char =='e' || char =='i' || char =='o' || char =='u'){
            count++;
            console.log(char);
        }
    }
    
    return count;
}

let vowel = countVowel('Jahid');
console.log(vowel);

const numberOfVowel = (str)=>{
    let count = 0;
    for(let word of str){
        if(word =='a' || word =='e' || word =='i' || word =='o' || word =='u' || word =='A' || word =='E' || word =='I' || word =='O' || word =='U'){
            count++;
        }
    }
    return count;
}
 let wordCount = numberOfVowel('Ahmed');
 console.log(`The number of word count: ${wordCount}`);

//forEach loop function..
//forEach is a Higher Order function/Method.
//forEach Higher Order function/Method take a function as parameter and also can return function/method.
 let strName= ['Jahido', 'Mahim', 'Prantou', 'Tamim', 'Ihanee'];
 strName.forEach(function myFunc(val, idx, strName){
    let wordCount = numberOfVowel(val);
    console.log(wordCount, idx, strName );
 });

 let arraynumber = [1, 2, 3, 4, 5];

 arraynumber.forEach(function myF(i){
    console.log(i*i);
 })


 //Map method in Js
 let array1 = [1, 2, 3, 4, 5];
 array1.map((val) =>{
    console.log(`This is the Map Key value: ${val}`);
 })

 //create new array using Map...
 let newArray = array1.map((val1)=>{
    return val1*2
 })

 console.log(newArray);