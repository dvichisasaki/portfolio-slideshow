{
function play(){

    

    setTimeout(() => {
            images[currentIndex].classList.remove('current');
            currentIndex++;
            if (currentIndex > images.length - 1){
                currentIndex = 0;
            }
            images[currentIndex].classList.add('current');
            play();
        }, 1000);
}
const images = document.querySelectorAll('.hero img');
    let currentIndex = 0;

    play();
}

const open = document.getElementById('open');
    const overlay = document.querySelector('.overlay');
    const close = document.getElementById('close');

    open.addEventListener('click', () => {
        overlay.classList.add('show');
        open.classList.add('hide');
    });

    close.addEventListener('click', () => {
        overlay.classList.remove('show');
        open.classList.remove('hide');
    })
