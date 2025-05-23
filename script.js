function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function playRound(playerSelection) {
    const computerSelection = computerPlay();
    let result;

    if (playerSelection === computerSelection) {
        result = "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        result = `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        result = `You lose! ${computerSelection} beats ${playerSelection}.`;
    }

    const resultEl = document.getElementById('result');
    resultEl.textContent = result;
}

['rock', 'paper', 'scissors'].forEach(id => {
    document.getElementById(id).addEventListener('click', () => playRound(id));
});
