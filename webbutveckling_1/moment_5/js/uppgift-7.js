function init() {
    let paragraphs = document.getElementsByTagName('p');
    let buttons = document.getElementsByTagName('button');

    for (let index = 0; index < buttons.length; index++) {
        let element = buttons[index];
        element.onclick = click2;    
    }

    for (let index = 0; index < paragraphs.length; index++) {
        let element = paragraphs[index];
        element.onclick = click1;
        element.onmouseleave = unclick;
    }
}

function click1() {
    this.style.backgroundColor = "gray";
}

function unclick() {
    this.style.backgroundColor = "";
}

function click2() {
    let nyRad = document.createElement('p'); // Skapar ett nytt p-element
    nyRad.textContent = "Nytt stycke"; // Lägger till text i det nya p-elementet
    document.body.appendChild(nyRad); // Lägger till det nya p-elementet i body
    nyRad.onclick = click1; // Lägger till onclick-funktion på det nya p-elementet
    nyRad.onmouseleave = unclick; // Lägger till onmouseleave-funktion på det nya p-elementet
}

window.onload = init;