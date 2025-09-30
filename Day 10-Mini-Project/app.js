let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // player X , player O
let count = 0;    // track total moves

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],   
];

const resetgame = () => {
    turnO = true;
    count = 0;   // reset count also
    enableboxes();
    msgcontainer.classList.add("hide");
};

boxes.forEach(box => {
    box.addEventListener("click", () =>{
        if(turnO){
            box.innerText = "O";
            box.style.color = "#E40066";
            turnO = false;
        } else{
            box.innerText = "X";
            box.style.color = "#00B4D8";
            turnO = true;
        }
        box.disabled = true;

        count++;  // increase move count
        checkWinner();
    });
});

const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText ="";
    }
};

const showWinner = (winner) => {
    msg.innerText = `🎉 Congratulation's, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};

const showDraw = () => {
    msg.innerText = "🤝 It's a Draw! No Winner.";
    msgcontainer.classList.remove("hide");
    disableboxes();
};

const checkWinner = () => {
    for (let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !== "" && pos2Val !== "" && pos3Val !== ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
                return; 
            }
        }
    }

    // if all 9 moves used but no winner → draw
    if (count === 9) {
        showDraw();
    }
};

newgamebtn.addEventListener("click" , resetgame);
resetbtn.addEventListener("click" , resetgame);
