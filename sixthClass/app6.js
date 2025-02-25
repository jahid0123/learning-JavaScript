console.log(document.body.childNodes[1]);
let heading = document.getElementById('heading').innerText = 'Learn JavaScript!';
document.getElementById('paragraph').innerHTML = '<i>We are learning JavaScript DOM menupulation!.</i>';
console.log(heading);
console.dir(heading);

let heading2 = document.getElementById('demo');
console.log(heading2);

let heading3 = document.getElementsByClassName('demo');
console.log(heading3);

let button =  document.getElementById('myId');
console.log(button);

let button2 =  document.getElementsByClassName('myClass');
console.log(button2);

let paragraph = document.getElementsByTagName('p');
console.log(paragraph);

// getElementById re


//DOM Manipulation using query Selector by tag..
let selector = document.querySelector("p");
//its return first element/paragraph of the document.
console.log(selector);

let selectorAll = document.querySelectorAll("p");
//its return a node list of the document by the specific tag/class/id.
console.log(selectorAll);


//DOM Manipulation using query Selector by ID..
let selectorId = document.querySelector("#myId");
//its return first element/paragraph of the document.
console.log(selectorId);

let selectorAllId = document.querySelectorAll("#myId");
//its return a node list of the document by the specific tag/class/id.
console.log(selectorAllId);

//DOM Manipulation using query Selector by ID..
let selectorClass = document.querySelector(".myClass");
//its return first element/paragraph of the document.
console.log("This the single element by select class", selectorClass);

let selectorAllClass = document.querySelectorAll(".myClass");
//its return a node list of the document by the specific tag/class/id.
console.log("This the all node by selectAll class",selectorAllClass);

let text = document.getElementById('textId');

const para = document.createElement('p');
const pText = document.createTextNode("Hello JavaScript");
const appendText = document.createTextNode("Apna College");
//let afterappend = para.appendChild(pText);
para.appendChild(pText);
let element = document.getElementById('abcd');
element.appendChild(para);

let hello = document.getElementById('hello');
hello.innerText = hello.innerText + " form Apna College Students";

let divs = document.querySelectorAll('.box');
// divs[0].innerText = "This is the first Div";
// divs[1].innerText = "This is the Second Div";
// divs[2].innerText = "This is the Third Div";

let indx = 1;

for(let div of divs){
    div.innerText = `This is the div inner Text ${indx}`;
    indx++;
}








