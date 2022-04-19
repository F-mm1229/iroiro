var color = [];         //カラーコードを格納
let count = 0;          //generateした回数
let backcount = 0;      //reverseした回数
let colorNum = 4;       //カラーの数（デフォルトは4）

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

// グリッド3
document.getElementById('grid3').addEventListener('click', function () {
    colorNum = 2;
    for (let i = 1; i <= 4; i++) {
        if (i <= 2) {
            document.getElementById('color-' + i).style.width = '50%';
            document.getElementById('color-' + i).style.height = '100%';
        } else {
            var other_element = document.getElementById('color-' + i);
            other_element.remove();
        }    
    }
});

// グリッド4
document.getElementById('grid4').addEventListener('click', function () {
    colorNum = 3;
    for (let i = 1; i <= 4; i++) {
        if (i <= 1) {
            document.getElementById('color-' + i).style.width = '50%';
            document.getElementById('color-' + i).style.height = '100%';
        } else if (i <= 3) {
            document.getElementById('color-' + i).style.width = '50%';
            document.getElementById('color-' + i).style.height = '50%';
        } else {
            var other_element = document.getElementById('color-' + i);
            other_element.remove();
        }    
    }
});

// 色をランダムに生成
function generate() {
    count += 1;
    backcount = 0;
    for (let i = 1; i <= colorNum; i++) {
        const randomColor = Math.random().toString(16).slice(-6);
        document.getElementById('color-' + i).style.background = '#' + randomColor;
        color.push(randomColor);
    }
    console.log(color);
    console.log(count);
};

// 前に出た色に戻る
function reverse() {
    backcount += 1;
    for (let i = 1; i <= colorNum; i++) {
        document.getElementById('color-' + i).style.background = '#' + color[color.length - ((colorNum + 1 - i) + colorNum * backcount)];
    }
    if (backcount >= count - 1) return;
    console.log(backcount);
};

// リロードされた時
window.onload = function () {
    generate();
}

// ボタン：色を変更
document.getElementById('generate').addEventListener('click', generate);

// ボタン：戻る
document.getElementById('reverse').addEventListener('click', reverse);
