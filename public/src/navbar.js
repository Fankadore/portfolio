const header = document.querySelector('.header');
const navMenu = document.querySelector('.nav-menu');
const nav = document.querySelector('.navbar');
const navLinks = document.getElementsByClassName("navbar__link");
const projectsSection = document.getElementById('projects');
const aboutSection = document.getElementById('about');
const contactSection = document.getElementById('contact');

function closeNavbarSlide() {
	if (window.matchMedia("(min-width: 1224px)").matches) return;

	header.classList.remove('header--nav-active');
	header.style.transition = "border-bottom 0s linear 0.75s";
	
	navMenu.classList.remove('nav-menu--active');
	navMenu.style.transition = "border-bottom 0s linear 0.75s";

	nav.classList.remove('navbar--active');
	nav.style.transition = "height 0.5s linear 0.25s, visibility 0s linear 0.75s";
	
	for (let i = 0; i < navLinks.length; i++) {
		const link = navLinks[i];
		link.style.transition = "opacity 0.25s ease-out";
		link.style.opacity = 0;
	}
}
function closeNavbar() {
	header.classList.remove('header--nav-active');
	header.style.transition = null;
	
	navMenu.classList.remove('nav-menu--active');
	navMenu.style.transition = null;

	nav.classList.remove('navbar--active');
	nav.style.transition = null;
	
	for (let i = 0; i < navLinks.length; i++) {
		const link = navLinks[i];
		link.style.transition = null;
		link.style.opacity = 0;
	}
}

function openNavbarSlide() {
	header.classList.add('header--nav-active');

	navMenu.classList.add('nav-menu--active');

	nav.classList.add('navbar--active');
	nav.style.transition = "height 0.5s linear";

	for (let i = 0; i < navLinks.length; i++) {
		const link = navLinks[i];
		link.style.transition = "opacity 0.25s ease-out 0.5s";
		link.style.opacity = 1;
	}
}
function openNavbar() {
	header.classList.add('header--nav-active');

	navMenu.classList.add('nav-menu--active');

	nav.classList.add('navbar--active');
	nav.style.transition = null;

	for (let i = 0; i < navLinks.length; i++) {
		const link = navLinks[i];
		link.style.transition = null;
		link.style.opacity = 1;
	}
}

navMenu.onclick = (e) => {
	if (navMenu.classList.contains('nav-menu--active')) closeNavbarSlide();
	else openNavbarSlide();
}

navLinks[0].onclick = (e) => {
	projectsSection.classList.add('main__section--active');
	aboutSection.classList.remove('main__section--active');
	contactSection.classList.remove('main__section--active');
	closeNavbarSlide();
};
navLinks[1].onclick = (e) => {
	projectsSection.classList.remove('main__section--active');
	aboutSection.classList.add('main__section--active');
	contactSection.classList.remove('main__section--active');
	closeNavbarSlide();
};
navLinks[2].onclick = (e) => {
	projectsSection.classList.remove('main__section--active');
	aboutSection.classList.remove('main__section--active');
	contactSection.classList.add('main__section--active');
	closeNavbarSlide();
};

window.onresize = (e) => {
	if (window.matchMedia("(min-width: 1224px)").matches) {
		if (!navMenu.classList.contains('nav-menu--active')) openNavbar();
	}
	else {
		if (navMenu.classList.contains('nav-menu--active')) closeNavbar();
	}
};
