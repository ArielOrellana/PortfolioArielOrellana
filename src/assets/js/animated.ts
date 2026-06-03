import anime from 'animejs'

function randomValues(initial = false) {
  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight
  const duration = initial ? 0 : 5000
  anime({
    targets: '.dev-icon',
    translateX: () => anime.random(-windowWidth / 3, windowWidth / 3),
    translateY: () => anime.random(-windowHeight / 3, windowHeight / 3),
    rotate: () => anime.random(0, 360),
    scale: () => anime.random(0.3, 1.5),
    duration,
    easing: 'easeInOutQuad',
    complete: () => randomValues(false),
  })
}
randomValues(true)
