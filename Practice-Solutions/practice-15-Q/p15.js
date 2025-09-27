let newbtn = document.createElement("button");
newbtn.innerText = "Click me!";

newbtn.style.color = "white";
newbtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newbtn);