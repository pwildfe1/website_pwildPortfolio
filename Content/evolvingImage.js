var evolvingImage = function (ID,imgs,markers) {

    this.markers = markers;
    this.srcs = imgs;
    this.id = ID;
    this.current = 0;

};


evolvingImage.prototype.nextImg = function(){

    if(this.current < this.srcs.length-1) {

        var nextEl = this.current + 1;

        console.log(nextEl);

        var area = document.getElementById(this.id);
        console.log(area);
        area.src = this.srcs[nextEl];

        var currMark = document.getElementById(this.markers[this.current]);
        var nextMark = document.getElementById(this.markers[nextEl]);

        currMark.style.opacity = .3;
        nextMark.style.opacity = .8;

        this.current = nextEl;
    }

};

evolvingImage.prototype.prevImg = function(){

    if(this.current != 0) {

        var prevEl = (this.current - 1);

        var area = document.getElementById(this.id);
        area.src = this.srcs[prevEl];

        var currMark = document.getElementById(this.markers[this.current]);
        var prevMark = document.getElementById(this.markers[prevEl]);

        currMark.style.opacity = .3;
        prevMark.style.opacity = .8;

        this.current = prevEl;

    };

};