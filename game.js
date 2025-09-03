let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    if (Math.random() <= (1/3)) {
        return "rock"
    } else if (Math.random() <= (1/2)) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    let attempts = 0
    let resp = null

    while (resp != 'rock' && resp != 'paper' & resp != 'scissors') {
        resp = prompt((attempts > 0) ? 'That is not a valid choice. Rock, paper, or scissors?' : 'What move do you make?')
        resp = resp.trim().toLowerCase()
        attempts++
    }

    return resp
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log('tie');
    } else if ((humanChoice == 'rock' && computerChoice == 'paper') || (humanChoice == 'paper' && computerChoice == 'scissors') || (humanChoice == 'scissors' && computerChoice == 'rock')) {
        console.log('You lose! ' + computerChoice + ' beats ' + humanChoice);
        humanScore++ ;
    } else {
        console.log('You win! ' + humanChoice + ' beats ' + computerChoice)
        computerScore++ ; 
    }
}

console.log('... JavaScript code loaded!')
