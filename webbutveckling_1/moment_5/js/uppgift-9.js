function init() {
    let links = document.getElementsByTagName('a');

    for (let index = 0; index < links.length; index++) {
        let element = links[index];
        element.onclick = function() {
            click(links, index);
        };
    }
}

function click(links, index) {     // Reset the background color of all links
    
    for (let i = 0; i < links.length; i++) {
        links[i].style.backgroundColor = "white";
    }

    links[index].style.backgroundColor = "yellow"; // Set the background color of the clicked link

    if (a.backgroundColor === "yellow") {   // Saves the clicked link

        localStorage.setItem("clickedLink", a.innerHTML);
    }
}

window.onload = init;