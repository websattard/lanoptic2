
var startX = [-109, -255, 108,-132, 0];
var startY = [130, -336, 203, -111, 0];

var deltaX = [-0.2, -0.1, 0.1, 0, 0];
var deltaY = [-1, -0.8, 0.6, 0, 0];

var scene = $('.planet');

function parallax(dx, dy) {
    if (dx) {
        scene.css('background-position-x', 
            startX.map(function (x, i) {
                return x + dx * deltaX[i];
            }).join('px, ') + 'px');
    }
    if (dy) {
        scene.css('background-position-y', 
            startY.map(function (y, i) {
                return y + dy * deltaY[i];
            }).join('px, ') + 'px');
    }
    
    
}

$(window).scroll(function (evt) {
    parallax(0, $(document).scrollTop());
});

$(window).mousemove(function (evt) {
    parallax(-evt.pageX, 0);
});
