const infoIcons = document.querySelectorAll('.project__icon-info');

infoIcons.forEach(infoIcon => {
	const infoId = infoIcon.id.slice(0, 5);
	const infoBox = document.getElementById(infoId);
	
	infoIcon.onclick = (e) => {
		if (infoBox.classList.contains('project__info--open')) {
			infoIcon.classList.remove('project__icon--active');

			infoBox.classList.remove('project__info--open');
			infoBox.classList.add('project__info--close');
		}
		else {
			infoIcon.classList.add('project__icon--active');
			
			infoBox.classList.remove('project__info--close');
			infoBox.classList.add('project__info--open');
		}
	};
});
