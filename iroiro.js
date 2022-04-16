var color = [];         // カラーコードを格納
let count = 0;          //generateした回数
let backcount = 0;      //reverseした回数

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

// 変更ボタンで色をランダムに変更する
document.getElementById('generate').addEventListener('click', function () {
    count += 1;
    backcount = 0;
    for (let i = 1; i <= 4; i++) {
        const randomColor = Math.random().toString(16).slice(-6);
        document.getElementById('color-' + i).style.background = '#' + randomColor;
        
        color.push(randomColor);
    }
    console.log(color);
    console.log(count);
});

// 戻るボタンで前に出た色に戻る
document.getElementById('reverse').addEventListener('click', function () {
    backcount += 1;
    for (let i = 1; i <= 4; i++) {
        document.getElementById('color-' + i).style.background = '#' + color[color.length - ((4 + 1 - i) + 4 * backcount)];
    }
    if (backcount >= count - 1) return;
    console.log(backcount);
})


