let head = document.getElementById('myID');
let id = head.getAttribute('id');
console.log(id);

let para = document.querySelector('.myClassAtt');
para.setAttribute("class", "myClass");
console.log(para);


//DOM Manipulation 
//Attributes
let att = document.querySelector('#myID');
console.log(att);
let val = att.getAttribute('id');
console.log(val);

att.setAttribute("id", "myId");


//style selector
let div = document.querySelector('div');
div.style.backgroundColor = 'purple';


//DOM Manipulation insertElement, deleteElement

let p1 = document.createElement('p');
let text = document.createTextNode("This is P tag content");
p1.appendChild(text);

// let div1 = document.createElement('div');
// div1.style.height = '100px';
// div1.style.width = '100px';
// div1.style.backgroundColor = 'aqua';
div.appendChild(p1);

div.remove();

let buton = document.createElement('button');
buton.setAttribute("value", "Click Me");
buton.innerHTML = "Click Me"
buton.style.backgroundColor = 'green';
buton.style.padding = "30px"
let b = document.querySelector('body').prepend(buton

)