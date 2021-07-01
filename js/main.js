
var startX = [-109, -255, 108,-132, 0];
var startY = [130, -336, 203, -111, 0];

var deltaX = [-0.08, -0.06, -0.04, 0, 0];
var deltaY = [80, 60, 40, 0, 0];

var scene = $('.planet');
var hero = $('.hero')

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

//$(window).scroll(function (evt) {
//   parallax(0, $(document).scrollTop());
//});

$(hero).mousemove(function (evt) {
    parallax(-evt.pageX, evt.clientY / window.innerHeight);
});
