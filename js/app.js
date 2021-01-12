// data
const words = ["vulnerable", "invulnerable", "mandate",
"profitable", "nerve", "substantive", "candid", "candor", 
"dormant", "guilty", "equivocal", "gloom", "evident", 
"budget","convince", "assume", "reputation"];

// DOM
const $timeLeft = document.querySelector('.time-left');
const $word = document.querySelector('.word');
const $inputWord = document.querySelector('.input-word');
const $currentScore = document.querySelector('.current-score');
const $finalScore = document.querySelector('.final-score');

const shuffleWords = () => {
  const randomPick = Math.floor(Math.random() * words.length);

  $word.textContent = words[randomPick];
};

const compareWords = word => {
  if (word === $word.textContent) {
    shuffleWords();
    ++$currentScore.lastElementChild.textContent;
    $timeLeft.textContent = +$timeLeft.textContent + 2;
  }
};

const displayFinalScore = () => {
  $finalScore.style.display = 'block';
  $finalScore.lastElementChild.textContent = $currentScore.lastElementChild.textContent;
};

const timeLeftCount = setInterval(() => {
  --$timeLeft.textContent;
  if ($timeLeft.textContent === '0') {
    clearInterval(timeLeftCount);
    $inputWord.setAttribute('disabled','');
    displayFinalScore();
    window.alert('Times Up!');
  }
}, 1000);

$inputWord.addEventListener('keyup', e => {
  const word = e.target.value;

  if (e.key !== 'Enter') return;
  compareWords(word);
  e.target.value = '';
});