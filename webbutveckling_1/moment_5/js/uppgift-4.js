let showMenue = true;
 
function init(){
   document.getElementById('topMenuButton').onclick = showHideMenu
}
 
function showHideMenu(e){
   let element = document.getElementById('topMenu');
 
   if(showMenue){
  	element.style.display ="block";
   }else{
  	element.style.display ="none";
   }
   showMenue = !showMenue; // byter tillstånd
}
 
window.onload = init;

