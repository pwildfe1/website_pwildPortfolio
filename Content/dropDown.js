
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

function growDivVert(name,full){
    var div = document.getElementById(name);
    var vh = window.innerHeight/100;
    if(div.style.height<vh){
        div.style.height=full*vh;
    }else{
        div.style.height=0;
    }
}