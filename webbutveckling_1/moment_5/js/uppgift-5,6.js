function init(){
    let element = document.getElementById('thumbs');
    let imgList = element.getElementsByTagName('img');
  
    document.getElementById('calcForm').addEventListener('input', calc);

    for(let i = 0; i <imgList.length; i++){
       imgList[i].onmouseover = overImg;
    }
 }

function calc() {
    let x = parseInt(document.getElementById('x').value, 10);
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

