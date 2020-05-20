let color1 = document.getElementById('color1');
let color2 = document.getElementById('color2');
let color3 = document.getElementById('color3');
let color4 = document.getElementById('color4');

// Event handlers
color1.addEventListener('click', function() {
    document.body.style.backgroundColor = randomColor1;
});
color2.addEventListener('click', function() {
    document.body.style.backgroundColor = randomColor2;
});
color3.addEventListener('click', function() {
    document.body.style.backgroundColor = randomColor3;
});
color4.addEventListener('click', function() {
    document.body.style.backgroundColor = randomColor4;
});

// Random color generators
let randomColor1 = '#' + Math.floor(Math.random() * 16777216).toString(16);
color1.style.backgroundColor = randomColor1;
let randomColor2 ='#' + Math.floor(Math.random() * 16777216).toString(16);
color2.style.backgroundColor = randomColor2;
let randomColor3 = '#' + Math.floor(Math.random() * 16777216).toString(16);
color3.style.backgroundColor = randomColor3;
let randomColor4 = '#' + Math.floor(Math.random() * 16777216).toString(16);
color4.style.backgroundColor = randomColor4;

