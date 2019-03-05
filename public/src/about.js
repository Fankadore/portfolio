const toggles = document.querySelectorAll('.about__toggle');
const contentBoxes = document.querySelectorAll('.about__content');

toggles.forEach(toggle => {
  toggle.onclick = (e) => {
    if (toggle.classList.contains('about__toggle--active')) return;

    const contentId = toggle.id + "-content";
    toggle.classList.add('about__toggle--active');
    
    for (let i = 0; i < toggles.length; i++) {
      if (contentBoxes[i].id === contentId) contentBoxes[i].classList.add('about__content--active');
      else contentBoxes[i].classList.remove('about__content--active');

      if (toggles[i] !== toggle) toggles[i].classList.remove('about__toggle--active');
    }
  };
});
