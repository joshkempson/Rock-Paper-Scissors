let userChoice;
let userScore = 0;
let computerScore = 0;

function getUserChoice() {
    //userChoice  = prompt("Rock, Paper or Scissors?").toUpperCase();
    return userChoice
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "ROCK"
        case 1:
            return "PAPER"
        case 2:
            return "SCISSORS"
    }
}

function playRound(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        console.log("Draw!");
    } else if 
        ((userChoice === "ROCK" && computerChoice === "PAPER") ||
        (userChoice === "PAPER" && computerChoice === "SCISSORS") ||
        (userChoice === "SCISSORS" && computerChoice === "ROCK")) {
        computerScore++
    } else if 
        ((userChoice === "ROCK" && computerChoice === "SCISSORS") ||
        (userChoice === "SCISSORS" && computerChoice === "PAPER") ||
        (userChoice === "PAPER" && computerChoice === "ROCK")) {
        userScore++
    }
}

function trackingScore() {
    if ((userScore == 5) || (computerScore == 5)) {
        return 
    } else {
        let computerChoice = getComputerChoice();
        getUserChoice();
        playRound(userChoice, computerChoice);
        console.log("Your Score: " + userScore + " Computer Score: " + computerScore);
        trackingScore();
    }
}

trackingScore();