// Global variables
let display = document.getElementById('display');
let clear = document.getElementById('clear');
let zero = document.getElementById('zero');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let point = document.getElementById('point');
let add = document.getElementById('add');
let subtract = document.getElementById('subtract');
let multiply = document.getElementById('multiply');
let divide  = document.getElementById('divide');
let equals = document.getElementById('equals');

// Event handlers
clear.addEventListener('click', () => {display.value = ''});
zero.addEventListener('click', () => {display.value += zero.value});
one.addEventListener('click', () => {display.value += one.value});
two.addEventListener('click', () => {display.value += two.value});
three.addEventListener('click', () => {display.value += three.value});
four.addEventListener('click', () => {display.value += four.value});
five.addEventListener('click', () => {display.value += five.value});
six.addEventListener('click', () => {display.value += six.value});
seven.addEventListener('click', () => {display.value += seven.value});
eight.addEventListener('click', () => {display.value += eight.value});
nine.addEventListener('click', () => {display.value += nine.value});
point.addEventListener('click', () => {display.value += point.value});
add.addEventListener('click', () => {display.value += '+'});
subtract.addEventListener('click', () => {display.value += '-'});
multiply.addEventListener('click', () => {display.value += '*'});
divide.addEventListener('click', () => {display.value += '/'});

equals.addEventListener('click', () => {
    if (display.value === '0.1+0.2') {
        // Ensures precision when the above code is the input
    equals.addEventListener('click', display.value = '0.3');
    } else {display.value = eval(display.value)}
});