const homeBg = document.querySelector(".homeBg");
let documentWidth = window.innerWidth;
let scrollPos = window.scrollY;
const navBar = document.querySelector(".topNavigation");

window.onscroll = function(e) {
    // Home phone animation
    homeBg.style.width = `${scrollY + (documentWidth*0.8)}px`;
    homeBg.style.animationFillMode = "none";
    homeBg.style.opacity = "1";

    // Navbar animation
    if (scrollPos < scrollY) {
        navBar.classList.add("fixed");
    } else {
        navBar.classList.remove("fixed")
    }
    scrollPos = window.scrollY;
}

// the godforbidden carousel
// idk how the fuck i did this but it works somehow
let slides = document.querySelectorAll(".carouselCard");
currentSlide = 1;  // Current slide number
previousSlide = 0;  // Previous slide num

function switchSlidesRight() {
    // Make the center slide move to the left
    slides[currentSlide].classList.remove("active"); 
    slides[currentSlide].classList.add("left"); 

    // Make the left slide move to the right
    slides[previousSlide].classList.remove("left"); 
    slides[previousSlide].classList.add("right"); 
    previousSlide += 1;

    if (previousSlide >2) {     // Slide index can't go higher than 2 because there're only 3 slides
        previousSlide = 0;
    }
    if (currentSlide == 2) {
        currentSlide = -1;
    }

    // Move the right slide to the center
    currentSlide += 1 
    targetSlide = slides[currentSlide]  
    targetSlide.classList.add("active");
    targetSlide.classList.remove("left"); 
    targetSlide.classList.remove("right"); 
}

// function switchSlidesLeft() {
//     // Make the center slide move to the right
//     slides[currentSlide].classList.remove("active"); 
//     slides[currentSlide].classList.add("right"); 

//     // Make the left slide move to the right

//     slides[previousSlide+2].classList.remove("right"); 
//     slides[previousSlide+2].classList.add("left"); 
//     previousSlide += 1;

//     if (previousSlide >2) {     // Slide index can't go higher than 2 because there're only 3 slides
//         previousSlide = 0;
//     }
//     if (currentSlide == 0) {
//         currentSlide = 2;
//     }

//     // Move the right slide to the center
//     currentSlide -= 1 
//     targetSlide = slides[currentSlide]  
//     targetSlide.classList.add("active");
//     targetSlide.classList.remove("left"); 
//     targetSlide.classList.remove("right"); 
// }