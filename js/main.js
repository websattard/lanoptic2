
var startX = [-109, -255, 108,-132, 0];
var startY = [130, -336, 203, -111, 0];

var deltaX = [0.04, 0.06, 0.08, 0, 0];
var deltaY = [0.04, 0.06, 0.08, 0, 0];
var deltaS = [ -1.8, -1.8, -1.8, 0, 0];

var posX = 0; //переменные для хранения координаты X мыши
var posY = 0; //переменные для хранения координаты Y мыши
var posS = 0; //переменные для хранения координаты S прокрутки

var scene = $('.planet');

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


/*$(window).scroll(function (evt) {
   parallax(0, $(document).scrollTop(evt.pageY));
});

$(window).mousemove(function (evt) {
    parallax(-evt.pageX, evt.pageY / window.innerHeight);
});*/

