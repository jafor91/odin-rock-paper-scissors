const choices = ['rock', 'paper', 'scissors']

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    console.log (randomIndex);
    let computerChoice = choices[randomIndex];
    
    console.log(computerChoice);
    return computerChoice;
}

getComputerChoice()