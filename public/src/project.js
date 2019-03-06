const infoIcons = document.querySelectorAll('.project__icon-info');
const playButtons = document.querySelectorAll('.project__play');

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

playButtons.forEach(button => {
	const videoId = button.id.slice(0, 6);
	const video = document.getElementById(videoId);
	button.onclick = (e) => {
		if (video.paused) {
			video.play();
			video.classList.remove('project__preview--paused');
			button.classList.remove('project__play--paused');
		}
		else {
			video.pause();
			video.classList.add('project__preview--paused');
			button.classList.add('project__play--paused');
		}
	};
});
