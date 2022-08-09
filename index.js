var slieImg = document.getElementById("slideImg");
var images = new Array(
    "images/slider1.jpg",
    "images/slider2.jpg",
    "images/slider3.jpg",
    "images/slide4.jpg",
    "images/slide5.gif"

);
var len = images.length;
var i = 0;

function slider() {
    if (i > len - 1) {
        i = 0;
    }
    slieImg.src = images[i];
    i++;
    setTimeout('slider()', 5000);
}
