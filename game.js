function getComputerChoice() {
    if (Math.random() <= (1/3)) {
        return "rock"
    } else if (Math.random() <= (1/2)) {
        return "paper"
    } else {
        return "scissors"
    }
}

console.log('... JavaScript code loaded!')