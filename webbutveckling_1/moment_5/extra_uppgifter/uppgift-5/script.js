let isVisible = false;

function init() {
    let button = document.getElementById("button");
    button.onclick = showHideText;
}

function showHideText() {
    let text = document.getElementById("p");
    if (isVisible) {
        text.style.display = "none";
        isVisible = false;
    } else {
        text.style.display = "block";
        isVisible = true;
    }
}
window.onload = init;