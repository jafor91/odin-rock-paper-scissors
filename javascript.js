const choices = ['rock', 'paper', 'scissors']

let playerSelection = window.prompt('Select: rock, paper or scissors');

let score = {
    playerScore: 0,
    computerScore: 0,
    tiedGames: 0
}

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    let choice = choices[randomIndex];
    console.log(`Computer's choice is ${choice}`);
    return choice;
}

function playRound(playerSelection, computerSelection){
    playerSelection.toLowerCase();
    if (playerSelection === computerSelection){
        score.tiedGames +=1
        return `It's a tie`;
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        score.computerScore +=1;
        return `You lose! Paper beats Rock`;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        score.playerScore +=1;
        return `You win! Rock beats Scissors`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        score.playerScore +=1;
        return `You win! Paper beats Rock`;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        score.computerScore +=1;
        return `You lose! Scissors beats Paper`;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        score.computerScore +=1;
        return `You lose! Rock beats Paper`;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        score.playerScore +=1;
        return `You win! Scissors beats Paper`;
    }
}

function game(){

    for (let i = 0; i < 5; i++){
        const computerSelection = getComputerChoice()
        console.log(`Player's selection is ${playerSelection}`);
        console.log(playRound(playerSelection, computerSelection));
        console.log(score);
        console.log('');
    }
}

game()