let isFirstImage = true;

function init() {
    let picSwitch = document.getElementById("button");

    picSwitch.onclick = click;
}

function click() {
    let image = document.getElementById("image");
    if (isFirstImage) {
        image.src = "../../img/uppgift-5/bus.png";
    } else {
        image.src = "../../img/uppgift-5/ferit.png";
    }
    isFirstImage = !isFirstImage;
}
window.onload = init;