const button = document.querySelector('.button');

document.getElementById('target').addEventListener('click', function () {
    const randomColor1 = '#' + Math.random().toString(16).slice(-6);
    const randomColor2 = '#' + Math.random().toString(16).slice(-6);
    const randomColor3 = '#' + Math.random().toString(16).slice(-6);
    const randomColor4 = '#' + Math.random().toString(16).slice(-6);
    
    document.getElementById('color-1').style.background = randomColor1;
    document.getElementById('color-2').style.background = randomColor2;
    document.getElementById('color-3').style.background = randomColor3;
    document.getElementById('color-4').style.background = randomColor4;
})
