/*In JavaScript 

Array is mutable = Its changable.
String is immutable = Its cannot changable.

*/

//Mutable
let marks = [30, 36, 48, 46, 37, 39, 49];
console.log(marks);
console.log(marks.length);
marks[0] = 35;
console.log(marks);

let heros = ['Iranman', 'Thor', 'Hulk', 'Spiderman', 'Antman', 'Saktiman'];
console.log(heros);
heros[2] = 'Selina Mam';
console.log(heros);

//Immutable
let str = 'Jahid';
console.log(str);
str[0] = 'N';
console.log(str);

for(let i = 0; i<heros.length; i++){
    console.log(i+1, heros[i]);
}

for(let hero of heros){
    console.log(hero);
}

for(let hero in heros){
    console.log(1+parseInt(hero), heros[hero].toUpperCase());
}

let scores = [85, 97, 44, 37, 76, 60];
let sum = 0;
for(let mark of scores){
    //console.log(typeof(mark));
 sum+=mark;
}
console.log(`The average score of the class: ${sum/scores.length}`);

let prices = [250, 645, 300, 900, 50];

// let i = 0;
// for(let val of prices){
//     let offer = val/10;
//     prices[i] = val - offer;
//     console.log(`The price of after offer: ${prices[i]}`);
//     i++;
// }

// for(let x = 0; x<prices.length; x++){
//     let offer = prices[x]/10;
//     prices[x] -=offer;
//     console.log(`The offer price is: ${prices[x]}`);
// }

let strArrays = ['jahid', 'mahim', 'pranto', 'tamim', 'ihan'];
console.log(strArrays);
console.log(strArrays.toString());
console.log(strArrays.push('tamim'));
console.log(strArrays);
console.log(strArrays.pop());
console.log(strArrays.concat(prices));
console.log(strArrays.unshift('ahmed'));
console.log(strArrays);
console.log(strArrays.shift());
console.log(strArrays);
console.log(strArrays.slice(1, 3));
console.log(strArrays.splice(0,1,'ahmed'));
console.log(strArrays); 


let companys = ['Bloomberg', 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix'];

let operation1 = companys.shift();
console.log(`First time update: ${companys}`);
let operation2 = companys.splice(1,1,'Ola');
console.log(`Second time update: ${companys}`);
let operation3 = companys.push('Amazon');
console.log(`Last updated array: ${companys}`);