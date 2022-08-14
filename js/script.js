function checkFlexGap() {
	let flex = document.createElement('div');
	flex.style.display = 'flex';
	flex.style.flexDirection = 'column';
	flex.style.rowGap = '1px';

	flex.appendChild(document.createElement('div'));
	flex.appendChild(document.createElement('div'));

	document.body.appendChild(flex);
	let isSupported = flex.scrollHeight === 1;
	flex.parentNode.removeChild(flex);

	if (!isSupported) document.body.classList.add('no-flexbox-gap');
}
console.log('Hola');
checkFlexGap();

/*
 *MENU NAVIGATION
 */
const header = document.querySelector('header');
const btnMenu = document.querySelector('.btn-mobile-nav');

btnMenu.addEventListener('click', () => {
	header.classList.toggle('nav-open');
	if (header.classList.contains('nav-open'))
		document.querySelector('body').style.overflow = 'hidden';
});

/*
 * LINKS MENU NAVIGATION
 */
const menulistLinkEl = document.querySelectorAll('.main-nav-list li');
menulistLinkEl.forEach((link) => {
	link.addEventListener('click', () => {
		document.querySelector('body').style.overflow = 'auto';
		header.classList.remove('nav-open');
	});
});

/* STICKY NAVIGATION */
const sectionHeroEl = document.querySelector('.section-hero');
const observer = new IntersectionObserver(
	(entries) => {
		const ent = entries[0];
		if (!ent.isIntersecting) {
			document.querySelector('body').classList.add('sticky');
		} else {
			document.querySelector('body').classList.remove('sticky');
		}
	},
	{
		root: null,
		threshold: 0,
		rootMargin: '-80px',
	}
);

observer.observe(sectionHeroEl);
