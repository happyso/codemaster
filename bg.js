const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImg(imgNumber){
    const image = new Image;
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add('bgimg');
    body.appendChild(image);

}

function getRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = getRandom();
    paintImg(randomNumber);
}

init();