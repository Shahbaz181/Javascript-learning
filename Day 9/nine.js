let bth = document.querySelector("#btn");

btn.onclick = () => {
    console.log("Button was clicked")
};


let box1= document.querySelector(".box1");
box1.onmouseover = () => {
    console.log("you are entered in a div box")
};

let Button = document.querySelector("bth2");
bth2.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX);
    console.log(evt.clientY);
};

bth3.addEventListener("click", ()=>{
    console.log("Button  clicked - 01")
})

bth3.addEventListener("click", ()=>{
    console.log("Button  clicked - 02")
})

bth3.addEventListener("click", (evt)=>{
    console.log("Button  clicked - 03");
    console.log(evt.type);
    console.log(evt);
})



bth4.addEventListener("click", ()=>{
    console.log("Button  clicked - 1");
})
bth4.addEventListener("click", ()=>{
    console.log("Button  clicked - 2");
})
const handler3 =()=>{
    console.log("Button  clicked - 3");
};
bth4.addEventListener("click", handler3);


bth4.addEventListener("click", ()=>{
    console.log("Button  clicked - 4");
});

bth4.removeEventListener("click" , handler3);