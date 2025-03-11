function init() {

    const element = document.getElementsByTagName('p');

    for (let index = 0; index < element.length; index++) {
        element[index].style.color = "Red";
        element[index].style.background = "Green";
        element[index].style.fontFamily = "Arial";;
    }

    document.getElementsByTagName("h1")[0].style.fontSize = "small" ;

}

window.onload = init;