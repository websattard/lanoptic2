var startX = [707, 1024, 878, 444];
var startY = [153, -28, 49, 51];

var deltaX = [0.02, 0.1, 0.04, 0];
var deltaY = [0.02, 0.1, 0.04, 0];
var deltaS = [-1.2, -1.2, -1.2, 0];

var posX = 0; 
var posY = 0; 
var posS = 0; 

var scene = $('.parallax');

function parallax() {
	scene.css('background-position-x',
		startX.map(function (x, i) {
			return x + posX * deltaX[i];
		}).join('px, ') + 'px');

	scene.css('background-position-y',
		startY.map(function (y, i) {
			return y + posY * deltaY[i];
		}).join('px, ') + 'px');

	scene.css('background-position-y',
		startY.map(function (y, i) {
			return y + posY * deltaY[i] + posS * deltaS[i];
		}).join('px, ') + 'px');
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
