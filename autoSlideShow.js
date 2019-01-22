var myIndex = 1;
var prevIndex = 0;
var frames = 100;
var counter = 1/frames;
var prevCounter = 1 + 1/frames;
var index = 0;
var pause = 75;
carousel();

// function carousel() {
//     var i;
//     var x = document.getElementsByClassName("gallery");
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     myIndex++;
//     if (myIndex > x.length) {myIndex = 1}
//     x[myIndex-1].style.display = "block";
//     setTimeout(carousel, 3000);
// }

function carousel() {
    var i;
    var x = document.getElementsByClassName("gallery");
    for (i=0; i<x.length; i++){
        if (i!=myIndex || i!=prevIndex) {
            x[i].style.opacity = 0;
        }
    }
    if (counter > 1) {
        prevIndex = myIndex;
        myIndex++;
        counter = 1/frames;
        pause = 2000;
    }else{
        pause = 75;
    }
    if (prevIndex==x.length-1){
        myIndex = 0;
        console.log("prevIndex")
    }
    if (prevIndex == 0){
        prevCounter = 1 + 1/frames;
    }
    x[myIndex].style.opacity = counter + 1/frames;
    x[prevIndex].style.opacity = prevCounter - 1/frames;
    counter = counter + 1/frames;
    setTimeout(carousel,pause)
}