function randomValues(initial = false) {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const duration = initial ? 0 : 5000;
  anime({
    targets: ".dev-icon",
    translateX: function () { return anime.random(-windowWidth / 3, windowWidth / 3); },
    translateY: function () { return anime.random(-windowHeight / 3, windowHeight / 3); },
    rotate: function () { return anime.random(0, 360); },
    scale: function () { return anime.random(0.3, 1.5); },
    duration: duration,
    easing: "easeInOutQuad",
    complete: function() { randomValues(false); }
  });
}
randomValues(true);