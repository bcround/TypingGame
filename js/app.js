// data
const words = ["vulnerable", "invulnerable", "mandate",
"profitable", "nerve", "substantive", "candid", "candor", 
"dormant", "guilty", "equivocal", "gloom", "evident", 
"budget","convince", "assume", "reputation"];
let timeLeftCount;

// DOM
const $timeLeft = document.querySelector('.time-left');
const $word = document.querySelector('.word');
const $inputWord = document.querySelector('.input-word');
const $currentScore = document.querySelector('.current-score');
const $finalScore = document.querySelector('.final-score');

const shuffleWords = () => {
  const randomPick = Math.floor(Math.random() * words.length);

  if (!words.length) {
    finishGame();
    window.alert('You finished all!');
  }

  $word.textContent = words[randomPick];
  words.splice(randomPick, 1);
};

const compareWords = word => {
  if (word === $word.textContent) {
    ++$currentScore.lastElementChild.textContent;
    $timeLeft.textContent = +$timeLeft.textContent + 2;
    shuffleWords();
  }
};

const displayFinalScore = () => {
  $finalScore.style.display = 'block';
  $finalScore.lastElementChild.textContent = $currentScore.lastElementChild.textContent;
};

const finishGame = () => {
  clearInterval(timeLeftCount);
  $inputWord.setAttribute('disabled', '');
  displayFinalScore();
  $timeLeft.textContent = 0;
};

$inputWord.addEventListener('keyup', e => {
  const word = e.target.value;

  if (e.key !== 'Enter') return;
  compareWords(word);
  e.target.value = '';
});

const init = () => {
  shuffleWords();
  $timeLeft.textContent = 10;

  timeLeftCount = setInterval(() => {
    --$timeLeft.textContent;
    if ($timeLeft.textContent === '0') {
      finishGame();
      window.alert('Times Up!');
    }
  }, 1000);
};

document.addEventListener('DOMContentLoaded', init);