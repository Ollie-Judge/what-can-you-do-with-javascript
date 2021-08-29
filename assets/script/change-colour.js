let changeColor = document.getElementById('changeColor');

let color = ['blue', 'green', 'pink', 'purple', 'red', 'yellow', 'black', 'white'];

changeColor.addEventListener('click', function() {
    var randColor = color[Math.floor(Math.random() * color.length)]
    let container = document.getElementById('container');
    container.style.background = randColor;
})