const choices = ['rock', 'paper', 'scissors']

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    let choice = choices[randomIndex];
    console.log(`Computer's choice is ${choice}`);
    return choice;
}

function playRound(playerSelection, computerSelection){
    playerSelection.toLowerCase();
    if (playerSelection === computerSelection){
        return `It's a tie`;
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        return `You lose! Paper beats Rock`;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        return `You win! Rock beats Scissors`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        return `You win! Paper beats Rock`;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        return `You lose! Scissors beats Paper`;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        return `You lose! Rock beats Paper`;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        return `You win! Scissors beats Paper`;
    }
}


const playerSelection = "rock";
console.log(`Your selection is ${playerSelection}`);
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));