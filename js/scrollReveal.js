window.sr = ScrollReveal();
sr.reveal('.fadeInCenter', {
    duration: 2500,
    origin: 'center',
    distance: '150px',
    opacity: 0
  });
sr.reveal('.fadeInTop', {
  duration: 2500,
  origin: 'top',
  distance: '350px',
  opacity: 0
});
sr.reveal('.fadeInBottom', {
    duration: 1500,
    origin: 'bottom',
    distance: '350px',
    opacity: 0,
    delay: 500
});
sr.reveal('.fadeInBottomSmall', {
    duration: 1500,
    origin: 'bottom',
    distance: '50px',
    opacity: 0,
    viewFactor: 0.2
});
sr.reveal('.fadeInBottomSmallDelay', {
    duration: 1500,
    origin: 'bottom',
    distance: '50px',
    opacity: 0,
    delay: 1200
});
sr.reveal('.fadeInBottomSmaller', {
    duration: 1500,
    origin: 'bottom',
    distance: '20px',
    opacity: 0,
    viewFactor: 0.2
});
sr.reveal('.fadeInBottomSlow', {
    duration: 2500,
    origin: 'bottom',
    distance: '350px',
    opacity: 0,
    easing: 'ease'
});