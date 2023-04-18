// Navbar scroll animation
const navBar = document.querySelector(".topNavigation");
let scrollPos = window.scrollY;

window.onscroll = function () {
    if (scrollPos < scrollY) {
        navBar.classList.add("fixed");
    } else {
        navBar.classList.remove("fixed")
    }
    scrollPos = window.scrollY;
}