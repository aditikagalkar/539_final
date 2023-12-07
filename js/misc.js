var slidePosition = 1;
SlideShow(slidePosition);

function plusSlides(n) {
  SlideShow(slidePosition += n);
}

function currentSlide(n){
    SlideShow(slidePosition = n);
}

function SlideShow(n){
    var i;
    var slides = document.getElementsByClassName("container");
    var dots = document.getElementsByClassName("dot");
    if(n > slides.length){
        slidePosition = 1
    }
    if(n < 1){
        slidePosition = slides.length
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" enable", "");
    }
    slides[slidePosition - 1].style.display = "block";
    dots[slidePosition - 1].className += " enable";
}