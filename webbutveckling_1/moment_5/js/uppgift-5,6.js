function init(){
    let element = document.getElementById('thumbs');
    let imgList = element.getElementsByTagName('img');
  
    document.getElementById('calcForm').addEventListener('input', calc);

    for(let i = 0; i < imgList.length; i++){
       imgList[i].onmouseover = overImg;
    }

    document.getElementById("button").onclick = click;
}

function click(){
    let element = document.getElementById('button');
    element.style.color = getRandomColor();
    element.style.backgroundColor = getRandomColor();

    while (element.style.color === element.style.backgroundColor) {
        element.style.color = getRandomColor();
    }

    document.getElementById('x').value = '';
    document.getElementById('y').value = '';
    document.getElementById('sum').value = '';
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]; // Randomized color
    }
    return color;
}

function calc() {
    let x = parseInt(document.getElementById('x').value, 10); // So the datatype is number(int)
    let y = parseInt(document.getElementById('y').value, 10);
    let sum = x + y;
    document.getElementById('sum').value = sum;
}

function overImg(e){
    let element = document.getElementById('largeImg');
    let imgName = e.target.src.split("_thumb")[0] + ".png";
  
    element.src = imgName;
}
  
window.onload = init;

