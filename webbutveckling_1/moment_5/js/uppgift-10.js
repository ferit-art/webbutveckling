function init() {
    let add = document.getElementById("add");
    add.onclick = addToList;
}

function addToList() { // Adds a new item to the to-do list
    const text = document.getElementById("input").value; // Gets the text from the input box

    const node = document.createElement("li"); // Creates a new list item
    
    const textNode = document.createTextNode(text); // Creates a text placeholder for the list item
    
    const remove = document.createElement("button"); // Creates a new button for removing the list item
    
    const removeText = document.createTextNode("Remove"); // Creates a text placeholder for the remove button


    remove.appendChild(removeText); // Adds the text to the remove button

    node.appendChild(textNode); // Adds the text to the list item
    node.appendChild(remove); // Adds the remove button to the list item

    remove.onclick = removeFromList; // Assigns the remove function to the button's onclick event

    document.getElementById("todoList").appendChild(node); // Adds the list item to the list with the input as value
    document.getElementById("input").value = ""; // Clear the input box
}

function removeFromList(event) { // Removes an item from the to-do list
    const node = event.target.parentNode; // Gets the parent list item of the remove button
    node.remove(); // Removes the list item
}

window.onload = init;