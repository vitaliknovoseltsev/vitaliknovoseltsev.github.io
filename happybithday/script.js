const popup = document.getElementById('popup');
const popupCloseBtn = document.getElementById('back');
const elements = popup.querySelectorAll('span');
const mainImage = document.getElementById('image');
const text = document.getElementById('text');
let audio;

const balloonsTypes = ['ballon1.svg', 'ballon2.svg', 'ballon3.svg', 'ballon4.svg', 'ballon5.svg', 'ballon6.svg', 'ballon7.svg', 'ballon8.svg'];
let ballons = [];

popupCloseBtn.onclick = () => {
    popup.classList.remove('close');
    audio.pause();
    setTimeout(() => {
        document.getElementsByClassName('active')[0].classList.remove('active');
    }, 500);
}

elements.forEach(item => {
    item.addEventListener('click', () => {
        audio = new Audio(`/music/music${item.id}.mp3`);
        audio.play();
        text.querySelector(`#text-${item.id }`).classList.add('active');
        mainImage.src = (item.id === '2') ? `/images/${item.id}.png` : `/images/${item.id}.jpg`;
        popup.classList.add('close');
    });
});

const createBallon = (src) => {
    const img = document.createElement('img');
    img.classList.add('ballon');
    img.src = `/images/${src}`;

    return img;
}

const ballonsRoad = (ballon) => {
    document.body.appendChild(ballon);
    setTimeout(() => {
        ballon.style.left = randomInteger(100, window.innerWidth) + 'px';
        ballon.style.transition = `all ${randomInteger(5, 10)}s linear`;
        ballon.classList.add('top');
    }, 500); 
}

const removeBaloons = () => {
    const ballons = document.getElementsByClassName('ballon');
    if (ballons && ballons.length > 15) {
        for (let i = 0; i < 5; i += 1) {
            ballons[i].remove(); 
        } 
    }
}

setInterval(() => {
    ballons = [];
    if (ballons.length < 5) {
        for (let i = 0; i < 5 - ballons.length; i += 1) {
            ballons.push(createBallon('ballon1.svg'));
            ballonsRoad(createBallon(balloonsTypes[randomInteger(0, balloonsTypes.length - 1)]));
        }
    }
    removeBaloons();
}, 5000);



function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
