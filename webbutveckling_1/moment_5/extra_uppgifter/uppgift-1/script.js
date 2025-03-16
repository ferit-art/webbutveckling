function init() {
    const blue = document.getElementById("blue");
    const red = document.getElementById("red");
    const green = document.getElementById("green");

    blue.onclick = changeColor;
    red.onclick = changeColor; 
    green.onclick = changeColor;
}

function changeColor(e) {
    const paragraph = document.getElementById("p"); 
    paragraph.style.color = e.target.id; // Sets the color based on the button's id
}

window.onload = init;