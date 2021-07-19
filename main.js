const hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click', () => {
	let bgImage = hamburger.style.backgroundImage
	if (!bgImage || bgImage === 'url("../images/icon-hamburger.svg")') {
		hamburger.style.backgroundImage = 'url("../images/icon-close.svg")';
	} else {
		hamburger.style.backgroundImage = 'url("../images/icon-hamburger.svg")';
	}
});
