var current = 0;

function getPages(prefix,num,mPrefix){
    var list = [];
    var marks = [];

    for(var i=0; i<num; i++){
        var n = i+1;
        var name = prefix + n.toString();
        var mark = mPrefix + n.toString();
        list.push(name);
        marks.push(mark);
    }

    console.log(list);

    var divs = [];
    var markers = [];
    for(var i=0; i<list.length;i++){
        divs.push(document.getElementById(list[i]));
        markers.push(document.getElementById(marks[i]))
    }
    return [divs,markers];
}

function turn(prefix,num,mPrefix){

    var all = getPages(prefix,num,mPrefix);
    var divs = all[0];
    var markers = all[1];

    if(current<divs.length-1) {
        current = current + 1;
    }else{
        current = divs.length-1;
    }

    for(var i=0; i<divs.length; i++){
        if(i == current){
            divs[i].style.opacity=1;
            markers[i].style.opacity = .75;
        }else{
            divs[i].style.opacity = 0;
            markers[i].style.opacity = .1;
        }
    }
}


function turnBack(prefix,num,mPrefix){

    var all = getPages(prefix,num,mPrefix);
    var divs = all[0];
    var markers = all[1];

    if(current>0) {
        current = current - 1;
    }else{
        current = 0;
    }

    for(var i=0; i<divs.length; i++){
        if(i == current){
            divs[i].style.opacity = 1;
            markers[i].style.opacity = .75;
        }else{
            divs[i].style.opacity = 0;
            markers[i].style.opacity = .1;
        }
    }
}