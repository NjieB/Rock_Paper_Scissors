const roshambo = ["rock","paper","scissors"];

function getComputerChoice(){
    const choice = roshambo[Math.floor(Math.random() * roshambo.length)];
    return choice;
}    
getComputerChoice();

