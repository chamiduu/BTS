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
let slides = document.querySelectorAll(".carouselCard");

function switchSlidesRight(e) {
    slides[i].classList.remove("active"); // 1, 2
    if (i == 2) {
        i = -1;
    }
    targetSlide = slides[i+1] // 2, 0, 1, 
    targetSlide.classList.add("active");
    i += 1 //2
    
}
