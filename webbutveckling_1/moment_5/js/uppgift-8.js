function init() {
    const storleksval = document.getElementById("storleksval");
    const text = document.getElementById("text");

    storleksval.onchange = function() { // Checks if the value of storleksval is changed
        switch (storleksval.value) {
            case "1":
                text.style.fontSize = "12px"; // Changes the font size of the text to Liten
                break;
            case "2":
                text.style.fontSize = "16px"; // Changes the font size of the text to Normal
                break;
            case "3":
                text.style.fontSize = "20px"; // Changes the font size of the text to Stor  
                break;
            default:
                text.style.fontSize = "12px"; // Changes the font size of the text to Normal if nothing is selected
        }
    };
}

window.onload = init;