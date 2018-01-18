var current = 0;

function reveal(x,val){
    x.style.opacity = val;
}

function turn(prefix,num){

    var list = [];

    for(var i=0; i<num; i++){
        var n = i+1;
        var name = prefix + n.toString();
        list.push(name)
    }

    console.log(list);

    var divs = [];
    for(var i=0; i<list.length;i++){
        divs.push(document.getElementById(list[i]));
    }

    if(current<list.length-1) {
        current = current + 1;
    }else{
        current = list.length-1;
    }

    for(var i=0; i<divs.length; i++){
        if(i == current){
            divs[i].style.opacity=1;
        }else{
            divs[i].style.opacity = 0;
        }
    }
}


function turnBack(prefix,num){

    var list = [];

    for(var i=0; i<num; i++){
        var n = i+1;
        var name = prefix+ n.toString();
        list.push(name)
    }

    var divs = [];
    for(var i=0; i<list.length;i++){
        divs.push(document.getElementById(list[i]));
    }
    if(current>0) {
        current = current - 1;
    }else{
        current = 0;
    }

    for(var i=0; i<divs.length; i++){
        if(i == current){
            divs[i].style.opacity = 1;
        }else{
            divs[i].style.opacity = 0;
        }
    }
}
