
function revealItems(name){

    var divs = document.getElementsByClassName(name);
    for(var i=0; i<divs.length; i++) {
        if(divs[i].style.opacity != 1) {
            divs[i].style.opacity = 1;
        }else{
            divs[i].style.opacity = 0;
        }
    }

}