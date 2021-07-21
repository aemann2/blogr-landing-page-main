const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');

hamburger.addEventListener('click', () => {
	let bgImage = hamburger.style.backgroundImage;
	if (!bgImage || bgImage === 'url("../images/icon-hamburger.svg")') {
		hamburger.style.backgroundImage = 'url("../images/icon-close.svg")';
	} else {
		hamburger.style.backgroundImage = 'url("../images/icon-hamburger.svg")';
	}
});

console.log(menu);
