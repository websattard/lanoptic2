var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
    pointerEvents: true,
    hoverOnly: true
});
parallaxInstance.invert(false, false);