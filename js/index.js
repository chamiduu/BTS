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
// idk how the fuck i did this but it works somehow (i'm a retard)
i = 1;
j = 0
let slides = document.querySelectorAll(".carouselCard");

function switchSlidesRight() {
    slides[i].classList.remove("active"); 
    slides[i].classList.add("left"); 
    slides[j].classList.remove("left"); 
    slides[j].classList.add("right"); 
    j += 1;
    if (j >2) {
        j = 0;
    }
    if (i == 2) {
        i = -1;
    }
    targetSlide = slides[i+1]  
    targetSlide.classList.add("active");
    targetSlide.classList.remove("left"); 
    targetSlide.classList.remove("right"); 
    i += 1 
}
