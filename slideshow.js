// JavaScript Document

var myImage=document.getElementById("myPhoto");

var imageArray=["../../images/Logo.jpg", "../../images/Equipment.jpg", "../../images/trucks2.jpg"];

var imageIndex=0;

function changeImage () {
	myPhoto.setAttribute("src", imageArray [imageIndex]);
	imageIndex++;
	if (imageIndex>=imageArray.length) { imageIndex=0;
	}
}

var intervalHandle= setInterval (changeImage,4000);

myPhoto.onlick=function() {
	clearInterval(intervalHandle);
}

    var images = $(".images img").hide();
    var current = 0;
    setInterval(function() {
        var next = ((current + 1) % images.length);
        images.eq(current).fadeOut();
        images.eq(next).fadeIn();
        current = next;
    });
