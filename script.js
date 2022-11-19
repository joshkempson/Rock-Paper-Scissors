const userInput = prompt("Rock, Paper or Scissors?")
const computerChoice = ""


function playRound(userChoice, computerChoice) {
    if (userChoice == computerChoice) {
        console.log("Draw!")
    } else {
        console.log("A")
    }
}

function getComputerChoice() {
    var computerInput = Math.floor(Math.random() * 9)

    if (computerInput > 3) {
        computerChoice = "rock"
    } else if (computerInput < 5) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissors"
    }

    return computerChoice
}

playRound(userInput, computerChoice)