window.addEventListener('mousemove', function (e) {
    var arr = [1, 0.8, 0.5, 0.2];

    arr.forEach(function (i) {
        var x = (1 - i) * 75;
        var star = document.createElement('div');

        star.className = 'star';
        star.style.top = e.pageY + Math.round(Math.random() * x - x / 2) + 'px';
        star.style.left = e.pageX + Math.round(Math.random() * x - x / 2) + 'px';

        document.body.appendChild(star);

        window.setTimeout(function () {
            document.body.removeChild(star);
        }, Math.round(Math.random() * i * 600));
    });

    var mouseX = e.pageX - spaceship.clientWidth / 2;
    var mouseY = e.pageY - spaceship.clientHeight / 2;

    spaceship.style.left = mouseX + 'px';
    spaceship.style.top = mouseY + 'px';
});
var spaceship = document.getElementById('spaceship');

document.addEventListener('mousemove', function (e) {
    var offsetX = spaceship.width / 2;
    var offsetY = spaceship.height / 2;

    spaceship.style.left = e.pageX - offsetX + 'px';
    spaceship.style.top = e.pageY - offsetY + 'px';
});
