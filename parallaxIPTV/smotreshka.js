var startX = [59, 59, 71, 30.5];
var startY = [69, -17, 16, 21];

var deltaX = [0.002, 0.01, 0.004, 0];
var deltaY = [0.002, 0.01, 0.004, 0];
var deltaS = [-0.12, -0.12, -0.12, 0];

var posX = 0; 
var posY = 0; 
var posS = 0; 

var scene = $('.parallax');

function parallax() {
	scene.css('background-position-x',
		startX.map(function (x, i) {
			return x + posX * deltaX[i];
		}).join('%, ') + '%');

	scene.css('background-position-y',
		startY.map(function (y, i) {
			return y + posY * deltaY[i];
		}).join('%, ') + '%');

	scene.css('background-position-y',
		startY.map(function (y, i) {
			return y + posY * deltaY[i] + posS * deltaS[i];
		}).join('%, ') + '%');
};

$(window).scroll(function () {
	posS = $(document).scrollTop();
	parallax();
});

$(window).mousemove(function (evt) {
	posX = evt.clientX;
	posY = evt.clientY; /// window.innerHeight;
	parallax();
});
