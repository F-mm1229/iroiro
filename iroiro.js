const button = document.querySelector('.button');

// ボタンを押すことで色をランダムに変更する
document.getElementById('generate').addEventListener('click', function () {
    for (let i = 1; i <= 4; i++) {
        const randomColor = Math.random().toString(16).slice(-6);
        document.getElementById('color-' + i).style.background = '#' + randomColor;
    }
});

// グリッド1
document.getElementById('grid1').addEventListener('click', function () {
    for (let i = 1; i <= 4; i++) {
        document.getElementById('color-' + i).style.width = '50%';
        document.getElementById('color-' + i).style.height = '50%';
    }
});

// グリッド2
document.getElementById('grid2').addEventListener('click', function () {
    for (let i = 1; i <= 4; i++) {
        document.getElementById('color-' + i).style.width = '25%';
        document.getElementById('color-' + i).style.height = '100%';
    }
});
