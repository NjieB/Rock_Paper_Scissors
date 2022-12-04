const roshambo = ["rock","paper","scissors"];

function getComputerChoice(){
    const choice = roshambo[Math.floor(Math.random() * roshambo.length)];
    return choice;
}    
const score = document.querySelector('.score')
const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')
const outcomeDiv = document.querySelector('.outcome')

const computerSelection = getComputerChoice();

let x = 0 
let comp = 0 

function playRound(computerSelection,playerSelection){
    
    if (x == 5  ){
            const p = document.createElement('p')
            p.innerText = "WINNER: PLAYER"
            score.append(p)

        }
    else if (comp == 5) {
        const p = document.createElement('p')
            p.innerText = "WINNER: COMPUTER"
            score.append(p)


    }
    else if (computerSelection == "rock" && playerSelection == "scissors"){
        comp++ 
        const p = document.createElement('p')
        p.innerText = "Sorry, you lost." + " Computer: " + comp + "  Player: " + x ; 
        outcomeDiv.appendChild(p)
    }
    else if (computerSelection == "rock" &&  playerSelection == "paper"){
        x++
        const p = document.createElement('p')
        p.innerText = "Congrats, you won. +1 point" + " Computer: " + comp + "  Player: " + x ; 
        outcomeDiv.appendChild(p)
    }
    else if (computerSelection == "rock" && playerSelection == "rock"){
        const p = document.createElement('p')
        p.innerText = "Wow, it's a tie" + " Computer: " + comp + "  Player: " + x ; 
        outcomeDiv.appendChild(p)
    }
    else if (computerSelection == "scissors" && playerSelection == "paper"){
        comp++
        const p = document.createElement('p')
        p.innerText = "Sorry, you lost. " + " Computer: " + comp + "  Player: " + x ; 
        outcomeDiv.appendChild(p)
    }
    else if (computerSelection == "scissors" && playerSelection == "rock"){
        x++
        const p = document.createElement('p')
        p.innerText = "Congrats, you won. +1 point" + " Computer: " + comp + "  Player: " + x ; 
        outcomeDiv.appendChild(p)
    }
    else if (computerSelection == "scissors" && playerSelection == "scissors"){
        const p = document.createElement('p')
        p.innerText = "Wow, it's a tie"+ " Computer: " + comp + "  Player: " + x ; 
        outcomeDiv.appendChild(p)
    }
    else if (computerSelection == "paper" && playerSelection == "rock"){ 
        comp++
        const p = document.createElement('p')
        p.innerText = "Sorry, you lost. " + " Computer: " + comp + "  Player: " + x ; 
        outcomeDiv.appendChild(p)
    }
    else if (computerSelection == "paper" && playerSelection == "scissors"){
        x++
        const p = document.createElement('p')
        p.innerText = "Congrats, you won. +1 point" + " Computer: " + comp + "  Player: " + x ; 
        outcomeDiv.appendChild(p)
    }
    else if (computerSelection == "paper" && playerSelection == "paper"){
        const p = document.createElement('p')
        p.innerText = "Wow, it's a tie" + " Computer: " + comp + "  Player: " + x ; 
        outcomeDiv.appendChild(p)
    }
}

rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'rock'
    playRound(computerSelection,playerSelection)
})
paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'paper'
    playRound(computerSelection,playerSelection)
})
scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'scissors'
    playRound(computerSelection,playerSelection)
})
/* function game(){
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
Computer: ${comp} Player: ${x}
 */