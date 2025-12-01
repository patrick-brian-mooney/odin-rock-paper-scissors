var humanScore = 0;
var computerScore = 0;
var ties = 0;

function getComputerChoice() {
    if (Math.random() <= (1/3)) {
        return "rock"
    } else if (Math.random() <= (1/2)) {
        return "paper"
    } else {
        return "scissors"
    }
}

function setScoreText() {
    const statusNode = document.querySelector('#status-display');

    statusNode.innerHTML = `<h2>Scoreboard</h2>
    <p>Human wins: ${humanScore}</p>
    <p>Computer wins: ${computerScore}</p>
    <p>Ties: ${ties}</p>
    <p>Total games: ${humanScore + computerScore + ties}</p>`;
}

function upperFirst(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

function checkForGameEnd() {
    console.log('Checking for game end ...')
    if ((humanScore >= 5) || (computerScore >= 5)) {
        console.log('Game should be over!')
        const narrNode = document.querySelector('#status-display');

        let newPara = document.createElement('div');
        newPara.innerHTML = `<h3><strong>${(humanScore >= 5)?'Human':'Machine'} victory!</strong></h3><p>Reload page to play another round.</p>`;
        narrNode.appendChild(newPara);

        const rockBut = document.querySelector('#rock');
        const paperBut = document.querySelector('#paper');
        const scissorsBut = document.querySelector('#scissors');

        rockBut.disabled = true;
        paperBut.disabled = true;
        scissorsBut.disabled = true;
    }
}

function playRound(humanChoice, computerChoice) {
    // If humanChoice and computerChoice are specified, play a round and update
    // the stats; otherwise, just provide default text in the relevant panes
    const narrNode = document.querySelector('#narrative');
    let text = '';

    if ((humanChoice !== undefined) && (computerChoice !== undefined)) {
        if (humanChoice == computerChoice) {
            ties = ties + 1;
            text = `<p>Tie! We both picked ${humanChoice}.`;
        } else if ((humanChoice == 'rock' && computerChoice == 'paper') || (humanChoice == 'paper' && computerChoice == 'scissors') || (humanChoice == 'scissors' && computerChoice == 'rock')) {
            computerScore = computerScore + 1;
            text = `<p>You lose! ${upperFirst(computerChoice)} beats ${humanChoice}.</p>`;
        } else {
            humanScore = humanScore + 1;
            text = `<p>You win! ${upperFirst(humanChoice)} beats ${computerChoice}.</p>`;
        }
    }

    setScoreText();

    text = text + '<p>Make your choice below; I will make my own choice at the same time.</p>';
    narrNode.innerHTML = text;

    checkForGameEnd();
}

function handleRock(evt) {
    evt.preventDefault();
    playRound('rock', getComputerChoice());
}

function handlePaper(evt) {
    evt.preventDefault();
    playRound('paper', getComputerChoice());
}

function handleScissors(evt) {
    evt.preventDefault();
    playRound('scissors', getComputerChoice());
}

function setup() {
    humanScore = 0;
    computerScore = 0;
    ties = 0;

    playRound();

    const rockBut = document.querySelector('#rock');
    const paperBut = document.querySelector('#paper');
    const scissorsBut = document.querySelector('#scissors');

    rockBut.onclick = handleRock;
    paperBut.onclick = handlePaper;
    scissorsBut.onclick = handleScissors;
}

setup();

console.log('... JavaScript code loaded!')
