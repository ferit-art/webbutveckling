function init() {

    const p_raderna = document.getElementsByTagName('p');

    for (let index = 0; index < p_raderna.length; index++) {
        p_raderna[index].innerHTML = "P. Squiddy";
    }
}

window.onload = init;