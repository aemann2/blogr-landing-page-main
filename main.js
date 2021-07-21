const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const product = document.querySelector('#product');
const company = document.querySelector('#company');
const connect = document.querySelector('#connect');
const rotatedArrow = document.querySelector('.rotated-arrow');

const dropdownItems = [product, company, connect];

hamburger.addEventListener('click', () => {
	let bgImage = hamburger.style.backgroundImage;
	if (!bgImage || bgImage === 'url("../images/icon-hamburger.svg")') {
		hamburger.style.backgroundImage = 'url("../images/icon-close.svg")';
		menu.style.display = 'flex';
		dropdownItems.forEach((item) => {
			const links = document.querySelector(`#${item.id}Links`);
			links.style.display = 'none';
		});
	} else {
		hamburger.style.backgroundImage = 'url("../images/icon-hamburger.svg")';
		menu.style.display = 'none';
	}
});

// controls for the lists of links in the dropdown menu
dropdownItems.forEach((item) => {
	item.addEventListener('click', () => {
		const icon = document.querySelector(`#${item.id}Icon`);
		const links = document.querySelector(`#${item.id}Links`);
		if (links.style.display === 'none' || links.style.display === '') {
			item.style.color = 'hsl(206, 13%, 34%)';
			links.style.display = 'flex';
			icon.style.transform = 'rotate(180deg)';
		} else {
			item.style.color = 'hsl(240, 10%, 16%)';
			links.style.display = 'none';
			icon.style.transform = 'rotate(0deg)';
		}
	});
});
