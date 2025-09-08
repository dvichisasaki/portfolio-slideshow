// スライドショー
const images = document.querySelectorAll('.hero img');
let currentIndex = 0;

function play() {
  images[currentIndex].classList.remove('current');
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add('current');
  setTimeout(play, 3000); // 3秒ごとに切り替え
}
play();

// スムーススクロール
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
