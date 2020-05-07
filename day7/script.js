let images = document.getElementById('images');
let button = document.querySelector('button');

//Invokes the provided function when the button is clicked
button.addEventListener('click', switchImages);

//Selects a random image from the provided array
function switchImages() {
    button.style.position = 'relative';
    let imageArray = ['img_1', 'img_2', 'img_3', 'img_4', 'img_5', 'img_6', 'img_7', 'img_8', 'img_9', 'img_10'];
    let randomIndex = Math.floor(Math.random() * imageArray.length);

    let getImage = './images/' + imageArray[randomIndex] + '.jpg';
    images.src = getImage;
}