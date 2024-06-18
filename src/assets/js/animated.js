function randomValues() {
	const windowWidth = window.innerWidth;
	const windowHeight = window.innerHeight;
	anime({
		targets: ".square, .circle, .triangle",
		translateX: function () {
			return anime.random(-windowWidth / 3, windowWidth / 3);
		},
		translateY: function () {
			return anime.random(-windowHeight / 3, windowHeight / 3);
		},
		rotate: function () {
			return anime.random(0, 360);
		},
		scale: function () {
			return anime.random(0.2, 2);
		},
		duration: 5000,
		easing: "easeInOutQuad",
		complete: randomValues
	});
}

randomValues();