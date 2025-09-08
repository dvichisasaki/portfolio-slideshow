// ================= スライドショー =================
const images = document.querySelectorAll('.hero img');
let currentIndex = 0;

function play() {
    setTimeout(() => {
        // 現在の画像を非表示
        images[currentIndex].classList.remove('current');

        // 次の画像へ
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }

        // 新しい画像を表示
        images[currentIndex].classList.add('current');

        // 再帰的に呼び出す
        play();
    }, 3000); // ← スライド切り替え間隔 (1000ms=1秒 → 3000ms=3秒に変更)
}

// 最初の実行
if (images.length > 0) {
    play();
}

// ================= メニュー制御 =================
const open = document.getElementById('open');
const overlay = document.querySelector('.overlay');
const close = document.getElementById('close');

if (open && close && overlay) {
    open.addEventListener('click', () => {
        overlay.classList.add('show');
        open.classList.add('hide');
    });

    close.addEventListener('click', () => {
        overlay.classList.remove('show');
        open.classList.remove('hide');
    });
}
