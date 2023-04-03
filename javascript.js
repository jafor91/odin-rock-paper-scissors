let choices = ["rock", "paper", "scissors"];

let score = {
    playerScore: 0,
    computerScore: 0,
    tiedGames: 0
};

const rockButton = document.querySelector('#rock-button');
const paperButton = document.querySelector('#paper-button');
const scissorsButton = document.querySelector('#scissors-button');
const resultsDiv1 = document.querySelector('#resultsDiv1');
const resultsDiv2 = document.querySelector('#resultsDiv2');
const resultsDiv3 = document.querySelector('#resultsDiv3');

function displayScore(){
    resultsDiv1.textContent = `Player's Score: ${score.playerScore}`;
    resultsDiv2.textContent = `Computer's Score: ${score.computerScore}`;
    resultsDiv3.textContent = `Tied Games: ${score.tiedGames}`;
}

rockButton.addEventListener('click', function(){
    const playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    if (score.playerScore == 5){
        resultsDiv1.textContent = `Player's Score: ${score.playerScore}`;
        resultsDiv2.textContent = `Computer's Score: ${score.computerScore}`;
        resultsDiv3.textContent = `Player Wins`;
    } else if (score.computerScore == 5){
        resultsDiv1.textContent = `Player's Score: ${score.playerScore}`;
        resultsDiv2.textContent = `Computer's Score: ${score.computerScore}`;
        resultsDiv3.textContent = `Computer Wins`;
    } else displayScore();
});

paperButton.addEventListener('click', function(){
    const playerSelection = 'paper';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    displayScore();
});

scissorsButton.addEventListener('click', function(){
    const playerSelection = 'scissors';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    displayScore();
});

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    let choice = choices[randomIndex];
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

// function game(){
//     // for (let i = 0; i < 5; i++){
//         const computerSelection = getComputerChoice()
//         console.log(`Player's selection is ${playerSelection}`);
//         console.log(playRound(playerSelection, computerSelection));
//         console.log(score);
//         console.log('');
//     // }
// }