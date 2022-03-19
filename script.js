function computerPlay() {
    let random = Math.random();
    if (random < 1/3) {
        return "Rock";
    } else if (random < 2/3) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function humanPlay() {
    let choice = prompt("Enter your choice for this turn (Rock, Paper, or Scissors): ")
    choice = capitalize(choice);
    return choice;
}

function capitalize(string) {
    let cap = string.charAt(0).toUpperCase();
    cap += string.slice(1).toLowerCase();
    return cap;
  }

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 0;
    } else if ((playerSelection === "Rock" && computerSelection === "Paper") || (playerSelection === "Paper" && computerSelection === "Scissors") || (playerSelection === "Scissors" && computerSelection === "Rock")) {
        return -1;
    } else if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Rock") || (playerSelection === "Scissors" && computerSelection === "Paper")) {
        return 1;
    }
}

function game() {
    let playerSelection;
    let computerSelection;
    let wins = 0;
    let losses = 0;
    for (let i = 0; i < 5; i++) {
        playerSelection = humanPlay();
        computerSelection = computerPlay();
        let roundResult = playRound(playerSelection, computerSelection);
        console.log(`Round ${i + 1}: `);
        if (roundResult === 1) {
            wins++;
            console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
        } else if (roundResult === 0) {
            console.log(`It's a tie! You both picked ${playerSelection}.`);
        } else if (roundResult === -1) {
            losses++;
            console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
        }
    }
    if (wins > losses) {
        return `Congratulations, you are the winner!\nYou won ${wins} out of 5.`;
    } else if (losses > wins) {
        return `The computer is the winner!\nYou lost ${losses} out of 5.`;
    } else if (wins === losses) {
        return `It's a tie!\nYou both won ${wins}.`;
    }
}

let finalResult = game();
console.log(finalResult);