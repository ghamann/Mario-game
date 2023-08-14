const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.clouds');
const gameOver = document.querySelector('.game-over');
const counterElement = document.querySelector('.counter');
const PlayAgain = document.querySelector('.PlayAgain');

let counterValue = 0;
let counterInterval; // Variable to store the interval ID

const updateCounter = () => {
    counterValue += 1;
    counterElement.textContent = `Points: ${counterValue}`;
};

counterInterval = setInterval(updateCounter, 2000);

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
};

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudPosition = cloud.offsetLeft;

    if (pipePosition <= 120 && pipePosition > -10 && marioPosition <= 67) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
        mario.classList.add('flip-vertical-right');
        mario.style.bottom = `${marioPosition}px`;
        
        cloud.style.animation = 'none';
        cloud.style.left = `${cloudPosition}px`;
        
        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';
        
        gameOver.style.display = 'flex';
        gameOver.classList.add('fade-in');

        PlayAgain.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
                
        clearInterval(counterInterval); // Stop the counter interval
        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);


