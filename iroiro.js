
var color = [];         //カラーコードを格納
let count = 0;          //generateした回数
let backcount = 0;      //reverseした回数
let colorNum = 4;       //カラーの数（デフォルトは4）
let key_control = 0;    //keyがopenの時は0

// グリッド1
document.getElementById('grid1').addEventListener('click', function () {
    for (let i = 1; i <= 4; i++) {
        document.getElementById('color-' + i).style.width = '50%';
        document.getElementById('color-' + i).style.height = '50%';
        document.getElementById('key-' + i).style.marginTop = '55%';
    }
});

// グリッド2
document.getElementById('grid2').addEventListener('click', function () {
    for (let i = 1; i <= 4; i++) {
        document.getElementById('color-' + i).style.width = '25%';
        document.getElementById('color-' + i).style.height = '100%';
        document.getElementById('key-' + i).style.marginTop = '250%';
    }
});

// グリッド3
document.getElementById('grid3').addEventListener('click', function () {
    colorNum = 2;
    for (let i = 1; i <= 4; i++) {
        if (i <= 2) {
            document.getElementById('color-' + i).style.width = '50%';
            document.getElementById('color-' + i).style.height = '100%';
            document.getElementById('key-' + i).style.marginTop = '130%';
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
            document.getElementById('key-' + i).style.marginTop = '130%';
        } else if (i <= 3) {
            document.getElementById('color-' + i).style.width = '50%';
            document.getElementById('color-' + i).style.height = '50%';
            document.getElementById('key-' + i).style.marginTop = '55%';
        } else {
            var other_element = document.getElementById('color-' + i);
            other_element.remove();
        }    
    }
});

// 色をランダムに作成
 var generate_color = function(i) {
    const randomColor = Math.random().toString(16).slice(-6);
    document.getElementById('color-' + i).style.background = '#' + randomColor;
    color.push(randomColor);    
}

// 色を4つランダムに生成
var get_four_colors = function() {
    count += 1;
    backcount = 0;
    for (let i = 1; i <= colorNum; i++) {
        generate_color(i);
    }
    console.log(color);
    console.log(count);
};

// 前に出た色に戻る
var reverse = function() {
    backcount += 1;
    for (let i = 1; i <= colorNum; i++) {
        document.getElementById('color-' + i).style.background = '#' + color[color.length - ((colorNum + 1 - i) + colorNum * backcount)];
    }
    if (backcount >= count - 1) return;
    console.log(backcount);
};

// 鍵アイコン開閉
var key_change = function (i) {
    if (key_control == 0) {
        document.getElementById('key-' + i).src = 'close_key.png';
        key_control = 1;
    } else {
        document.getElementById('key-' + i).src = 'open_key.png';
        key_control = 0;
    }
}

// リロードされた時
window.onload = function () { get_four_colors(); }

// ボタン：色を変更
document.getElementById('generate').addEventListener('click', get_four_colors);

// ボタン：戻る
document.getElementById('reverse').addEventListener('click', reverse);

// アイコン：鍵マーク
document.getElementById('key-1').addEventListener('click', function () { key_change(1); });
document.getElementById('key-2').addEventListener('click', function () { key_change(2); });
document.getElementById('key-3').addEventListener('click', function () { key_change(3); });
document.getElementById('key-4').addEventListener('click', function () { key_change(4); });