function init() {
    const count = document.getElementById("count");

    document.getElementById("buttonplus").onclick = function() {
        count.innerHTML = Number(count.innerHTML) + 1;
    }

    document.getElementById("buttonminus").onclick = function() {
        if (count.innerHTML > 0) { // If count is greater than 0, then subtract 1 from count
            count.innerHTML = Number(count.innerHTML) - 1;
            
        } 
    }

    document.getElementById("reset").onclick = function() {
        count.innerHTML = 0;
    }
}

window.onload = init;