function init(){
    document.getElementById("p1").onmouseenter = onhover;
    document.getElementById("p1").onmouseleave = offhover;
 }
  
 function onhover(){
    document.getElementById("p1").style.color = "Red";
    document.getElementById("p1").style.backgroundColor = "black";
        
 }

 function offhover(){
    document.getElementById("p1").style.color = "Black";
      document.getElementById("p1").style.backgroundColor = "white";
 }
 
 window.onload = init;
 
 