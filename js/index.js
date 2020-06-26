let moles = document.querySelectorAll('.mole');
let moleArr = Array.prototype.slice.call(moles);
let random;
let spot;
let score = 0;
let scorefield = document.querySelector('.score');
let timefield = document.querySelector('.timer');
let c = timefield.textContent;
function gameMain() {
	moleArr.forEach((curr) => {
		curr.classList.remove('mole-active');
	});
	random = Math.floor(Math.random() * moleArr.length);
	moleArr[random].classList.add('mole-active');
	spot = moleArr[random].id;
	// console.log(spot);
}
function gamescore() {
	moleArr.forEach((curr) => {
		curr.addEventListener('click', function () {
			if (spot == curr.id) {
				score++;
				scorefield.textContent = score;
			}
		});
	});
}
gamescore();
let interval;
function gametimer() {
	if (c > 0) {
		c--;
		timefield.textContent = c;
	} else {
		clearInterval(interval);
		moleArr[random].classList.remove('mole-active');
	}
}
function gameplay() {
	gameMain();
	gametimer();
}
document.querySelector('.play').addEventListener('click', function () {
	document.querySelector('.play').classList.add('play-invisible');
	if (!interval) {
		interval = setInterval(gameplay, 1000);
	}
});
document.querySelector('.reset').addEventListener('click', function () {
	location.reload();
});
