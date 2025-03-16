function init() {
    let button = document.getElementById("button");
    let input = document.getElementById("input");

    button.onclick = function() {
        submit(input.value); // Calls the submit function with the input value
        input.value = ""; // Clears the input field after submission
    };
}

function submit(e) {
    const node = document.createElement("li");
    const erase = document.createElement("button");
    erase.innerText = "Delete";
    node.innerText = e;

    node.appendChild(erase);
    document.getElementById("myList").appendChild(node);

    erase.onclick = function() {
        myList.removeChild(node);
    }
}
window.onload = init;