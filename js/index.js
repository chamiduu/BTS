const homeBg = document.querySelector(".homeBg");
let documentWidth = window.innerWidth;
let scrollPos = window.scrollY;
const navBar = document.querySelector(".topNavigation");

window.onscroll = function(e) {
    // Home phone animation
    homeBg.style.width = `${scrollY + (documentWidth*0.8)}px`;

    // Navbar animation
    if (scrollPos < scrollY) {
        navBar.classList.add("fixed");
    } else {
        navBar.classList.remove("fixed")
    }
    scrollPos = window.scrollY;
}