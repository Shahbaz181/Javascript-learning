//DOM Manipulation

// 1️⃣ DOM Manipulation using ID

let heading = document.getElementById("main-heading"); 
console.log(heading);

let headings = document.getElementById("main-heading"); 
console.dir(headings);

// 2️⃣ DOM Manipulation using Class
let clas= document.getElementsByClassName("info-text");
console.log(clas);

let classes= document.getElementsByClassName("info-text");
console.dir(classes);

// 3️⃣ DOM Manipulation using Tag

let buttons = document.getElementsByTagName("button");
console.log(buttons);

let button = document.getElementsByTagName("button");
console.dir(button);

// Query Selctor

let element = document.querySelector("p");
console.log(element);

let elements = document.querySelectorAll("p");
console.log(elements);

let first = document.querySelector(".info-text");
console.log(first);

let firstclass = document.querySelector("#demo-img");
console.log(firstclass);

console.log(headings.tagName);

console.log(firstclass.tagName);

console.log(element.tagName);

console.log(document.body.firstChild)
console.log(document.body.lastChild)

console.log(document.querySelector("div").children);

let div =document.querySelector("div");
console.dir(div)

let divs =document.querySelectorAll("div");
console.dir(divs)

// learned about tag name, innerText , innerHTMl ,textContent
