let userChoice;
let userScore = 0;
let computerScore = 0;

function getUserChoice(input) {
    console.log("A");

    if (input == "rock") {
        userChoice = "ROCK";
    } else if (input == "paper") {
        userChoice = "PAPER";
    } else if (input == "scissors") {
        userChoice = "SCISSORS";
    }

    return userChoice;
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

function game() {
        let computerChoice = getComputerChoice();
        playRound(userChoice, computerChoice);
        userScoreDisplay.textContent = userScore;
        computerScoreDisplay.textContent = computerScore;
}

const container1 = document.querySelector('#container1');
const userScoreDiv = document.querySelector('.div1.user');
const computerScoreDiv = document.querySelector('.div1.computer');

const userScoreDisplay = document.createElement('h2');
const computerScoreDisplay = document.createElement('h2');
userScoreDiv.appendChild(userScoreDisplay);
computerScoreDiv.appendChild(computerScoreDisplay);

userScoreDisplay.setAttribute('class', 'displayScore')
computerScoreDisplay.setAttribute('class', 'displayScore')

userScoreDisplay.textContent = 0;
computerScoreDisplay.textContent = 0;

const btnRock = document.querySelector('.btns.rock');
const btnPaper = document.querySelector('.btns.paper');
const btnScissors = document.querySelector('.btns.paper');

btnRock.addEventListener('click', function() {
    getUserChoice("rock");
    game();
    trackingScore();
});
btnPaper.addEventListener('click', function() {
    getUserChoice("paper");
    game();
    trackingScore();
});
btnScissors.addEventListener('click', function() {
    getUserChoice("scissors");
    game();
    trackingScore();
});

function trackingScore() {
    if (userScore == 5) {
        userScoreDisplay.textContent = "Winner!";
        computerScoreDisplay.textContent = "Loser!";
        return 
    } else if (computerScore == 5) {
        userScoreDisplay.textContent = "Loser!";
        computerScoreDisplay.textContent = "Winner!";
        return
    } else {
        return
    }
}