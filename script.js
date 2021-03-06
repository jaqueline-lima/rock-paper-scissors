function computerPlay() {
    let random = Math.random();
    if (random <= 1/3) {
        return "Rock";
    } else if (random <= 2/3) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let choices = document.querySelector('#choices');
    choices.textContent = `You picked ${playerSelection} and the computer picked ${computerSelection}`;

    if (playerSelection === computerSelection) {
        return 0;
    } else if ((playerSelection === "Rock" && computerSelection === "Paper") || (playerSelection === "Paper" && computerSelection === "Scissors") || (playerSelection === "Scissors" && computerSelection === "Rock")) {
        return -1;
    } else if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Rock") || (playerSelection === "Scissors" && computerSelection === "Paper")) {
        return 1;
    }
}

function showResult(roundResult) {
    let resultContainer = document.querySelector('#round-result');
    if (roundResult === 1) {
        resultContainer.textContent = "You win!";
    } else if (roundResult === 0) {
        resultContainer.textContent = "It's a tie!";
    } else if (roundResult === -1) {
        resultContainer.textContent = "You lose!";
    }
}

function showScore(playerWins, computerWins) {
    const playerScore = document.querySelector('#player-score');
    const computerScore = document.querySelector('#computer-score');
    playerScore.textContent = `You: ${playerWins}`;
    computerScore.textContent = `Computer: ${computerWins}`;
}

function finalResult(playerWins, computerWins) {
    if (playerWins === 5) {
        return "Congratulations! You reached 5 points!";
    } else if (computerWins === 5) {
        return "You lost! The computer reached 5 points!";
    }
}

let playerSelection,
    computerSelection,
    roundResult,
    playerWins = 0,
    computerWins = 0;
const result = document.querySelector('#final-result');

showScore(playerWins, computerWins);

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        result.textContent = '';
        computerSelection = computerPlay();
        playerSelection = button.textContent;
        roundResult = playRound(playerSelection, computerSelection);

        if (roundResult === 1) playerWins++;
        else if (roundResult === -1) computerWins++;

        showResult(roundResult);
        showScore(playerWins, computerWins);

        if ((playerWins === 5) || (computerWins === 5)) {
            result.textContent = finalResult(playerWins, computerWins);
            playerWins = 0;
            computerWins = 0;
        }
    })
})

