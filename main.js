window.addEventListener('load', init);

//Globals
const levels = {
	easy: 5,
	medium: 3,
	hard: 2
}

const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const massage = document.querySelector('#massage');
const seconds = document.querySelector('#seconds');

const words = ['hat', 'constant', 'education', 'mathematics', 'siblings', 'documents',
'multiplication', 'simplify', 'justice', 'generate', 'calculate', 'bother', 'respect',
'grateful', 'establishment', 'pressure', 'cocktail', 'nutrition', 'congratulations', 'electrical', 
'engineering', 'university', 'Nigeria', 'country', 'committee', 'transmission', 'distribution'];

// Initialize Game
function init() {
	seconds.innerHTML = currentLevel;
	showWord(words);
	setInterval(countdown, 1000);
	setInterval(checkStatus, 50);
	wordInput.addEventListener('input', startMatch);
}

function startMatch() {
	if (matchWord()) {
		isPlaying = true;
		time = currentLevel + 1;
		showWord(words);
		wordInput.value = '';
		score++;
	}
	if (score === -1) {
		score.innerHTML = 0;
	} else {
		scoreDisplay.innerHTML = score;
	}

}

// StartMatch function helping function
// NB. it matches currentWord to wordInput
function matchWord() {
	if (wordInput.value === currentWord.innerHTML) {
		massage.innerHTML = 'Correct!!!';
		return true;
	} else {
		massage.innerHTML = '';
		return false;
	}
}

function showWord(words) {
	const randIndex = Math.floor(Math.random() * words.length);
	currentWord.innerHTML = words[randIndex];
}

function countdown() {
	if (time > 0) {
		time--;
	} else if (time === 0) {
		isPlaying = false;
	}
	timeDisplay.innerHTML = time;
}
function checkStatus() {
	if (!isPlaying && time === 0) {
		massage.innerHTML = "GAME OVER!!!";
		score = -1;
	}
}