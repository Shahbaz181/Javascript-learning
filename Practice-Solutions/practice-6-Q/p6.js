let gamenum= 54;
let usernum = prompt("Guess the random number :");
while (usernum != gamenum){
    usernum = prompt("You entered the wrong number , Try again :");
}

console.log("Congratulations, you guessed the correct number  ");