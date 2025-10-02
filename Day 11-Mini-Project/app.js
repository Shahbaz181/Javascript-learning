let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara =document.querySelector("#user-score");
const compScorePara =document.querySelector("#comp-score");

const genComputerchoice = () => {
    // rock paper scissors
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame =() => {
    console.log("Game was Draw!");
    msg.innerText = "Game was Draw. Play Again!";
    msg.style.backgroundColor ="#081b31";
}


const showWinner =(userWin,userchoice,compChoice) =>{
    if(userWin){
        userscore++;
        userScorePara.innerText = userscore;
        console.log("You Win!");
        msg.innerText = `You Win! Your ${userchoice} beats ${compChoice}` ;
        msg.style.backgroundColor ="green"; 
    }else{
        compscore++;
        compScorePara.innerText = compscore;
        console.log("You Lose");
        msg.innerText = `You Lose. ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor ="red";
    }
}

const playGame = (userchoice) => {
    console.log("user choice is : ", userchoice);
    //Generate computer choice
    const compChoice = genComputerchoice();
    console.log("Computer choice : ",compChoice);

    if(userchoice === compChoice){
        //Draw Game// 
        drawGame();
    } else {
        let userWin = true;
        if(userchoice==="rock"){
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }else if (userchoice === "paper"){
            //rock,scissors
            userWin = compChoice ==="scissors" ? false : true;
        } else{
            //rock ,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userchoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click" ,() =>{
        const userchoice = choice.getAttribute("id");
        playGame(userchoice)
    });
});
