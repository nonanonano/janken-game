function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

const imageMap = {
    rock: 'aite-gu.png',
    paper: 'aite-pa.png',
    scissors: 'aite-choki.png'
};

function resetGame() {
    document.getElementById('opponent-image').style.display = 'none';
    document.getElementById('opponent-image').src = '';
    document.getElementById('result').textContent = '';
    document.getElementById('next-game').style.display = 'none';
    document.querySelector('.buttons').style.display = 'block';
}

function playRound(playerSelection) {
    const computerSelection = computerPlay();
    let result;

    const imgEl = document.getElementById('opponent-image');
    imgEl.src = imageMap[computerSelection];
    imgEl.style.display = 'block';

    if (playerSelection === computerSelection) {
        result = 'あいこです';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        result = 'あなたの勝ちです';
    } else {
        result = 'あなたの負けです';
    }

    const resultEl = document.getElementById('result');
    resultEl.textContent = result;

    document.querySelector('.buttons').style.display = 'none';
    document.getElementById('next-game').style.display = 'inline-block';
}

['rock', 'paper', 'scissors'].forEach(id => {
    document.getElementById(id).addEventListener('click', () => playRound(id));
});

document.getElementById('next-game').addEventListener('click', resetGame);
