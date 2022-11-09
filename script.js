const roshambo = ["rock","paper","scissors"];

function getComputerChoice(){
    const choice = roshambo[Math.floor(Math.random() * roshambo.length)];
    return choice;
}    




const computerSelection = getComputerChoice();

let x = 0 

function playRound(computerSelection,playerSelection){
    
    if (computerSelection == "rock" && playerSelection == "scissors"){
        x--
        return "Sorry, you lost."
    }
    else if (computerSelection == "rock" &&  playerSelection == "paper"){
        x++ 
        return "Congrats, you won. +1 point"  
    }
    else if (computerSelection == "rock" && playerSelection == "rock"){
        return "Wow, it's a tie"
    }
    else if (computerSelection == "scissors" && playerSelection == "paper"){
        x--
        return "Sorry, you lost. -1 point"
    }
    else if (computerSelection == "scissors" && playerSelection == "rock"){
        x++
        return "Congrats, you won! +1 point"
    }
    else if (computerSelection == "scissors" && playerSelection == "scissors"){
        return "Wow, it's a tie"
    }
    else if (computerSelection == "paper" && playerSelection == "rock"){
        x--
        return "Sorry, you lost -1 point"
    }
    else if (computerSelection == "paper" && playerSelection == "scissors"){
        x++
        return "Congrats, you won! +1 point"
    }
    else if (computerSelection == "paper" && playerSelection == "paper"){
        return "Wow it's a tie"
    }
}


function game(){
for (let i = 1; i < 6; i++){
    const playerSelection = prompt("Rock, Paper, or Scissors").toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(computerSelection,playerSelection))
  
}
if (x >= 3){ 
    return "Congrats you won the game with " + x + " points"
}
    else {
  return "You lost with " + x + " points -_-"  
}


};
console.log(game());

