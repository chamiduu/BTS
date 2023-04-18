const homeBg = document.querySelector(".homeBg");
let documentWidth = window.innerWidth;

window.onscroll = function(e) {
    homeBg.style.width = `${scrollY + (documentWidth*0.8)}px`;
}