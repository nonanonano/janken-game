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

const resultEl = document.getElementById('result');
const opponentArea = document.getElementById('opponent-area');
const buttonsDiv = document.querySelector('.buttons');
const nextBtn = document.getElementById('next-game');

function resetGame() {
    resultEl.textContent = '';
    opponentArea.style.display = 'none';
    const imgEl = document.getElementById('opponent-image');
    imgEl.style.display = 'none';
    nextBtn.style.display = 'none';
    buttonsDiv.style.display = 'block';
}

function playRound(playerSelection) {
    const computerSelection = computerPlay();
    let result;

    const imgEl = document.getElementById('opponent-image');
    imgEl.src = imageMap[computerSelection];
    imgEl.style.display = 'block';
    opponentArea.style.display = 'block';

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

    resultEl.textContent = result;
    buttonsDiv.style.display = 'none';
    nextBtn.style.display = 'block';
}

['rock', 'paper', 'scissors'].forEach(id => {
    document.getElementById(id).addEventListener('click', () => playRound(id));
});

nextBtn.addEventListener('click', resetGame);

resetGame();
