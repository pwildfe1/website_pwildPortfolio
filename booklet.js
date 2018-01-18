var booklet = function(list,pg){

    this.divs = [];
    for(var i=0; i<list.length; i++){
        this.divs.push(document.getElementById(list[i]));
    }

    this.pgNum = pg;
    this.updateCurrent();

}

booklet.prototype.updateCurrent = function () {

    for(var i=0; i<this.divs.length; i++){
        if(i != this.pgNum){
            this.divs[i].style.opacity = 0;
        }else{
            this.divs[i].style.opacity = 1;
        }
    }

}

booklet.prototype.turn = function () {

    if(this.pgNum<this.divs.length-1) {
        this.pgNum = this.pgNum + 1;
        this.updateCurrent();
    }

}

booklet.prototype.back = function () {

    if(this.pgNum>0) {
        this.pgNum = this.pgNum - 1;
        this.updateCurrent();
    }

}