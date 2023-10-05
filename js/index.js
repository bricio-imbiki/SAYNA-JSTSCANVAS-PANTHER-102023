// fadeIn animation
function checkFadeIn() {
    var faders = document.querySelectorAll('.fade-in');

    for (let i = 0; i < faders.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = faders[i].getBoundingClientRect().top;
        let revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            faders[i].classList.add('fade-in-active');

        } else {
            faders[i].classList.remove('fade-in-active');

        }
    }
};
window.addEventListener('scroll', checkFadeIn);

//animation pop up
const open = document.getElementById('open');
const close = document.getElementById('close');
const popupContainer = document.getElementById('popup-container');

open.addEventListener('click', () => {
    popupContainer.classList.add('active');
});
close.addEventListener('click', () => {
    popupContainer.classList.remove('active');
});
var banner = document.querySelector(".banner-text");
var navlinks = document.querySelector(".nav-links");
var logo = document.querySelector(".logo");
window.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;

    // animation banner text
    if (scrollPosition >= 0 && scrollPosition < 100) {
        navlinks.style.opacity = '1';
        navlinks.style.transform = "translateX(0)";
        logo.style.opacity = '1';
        logo.style.transform = "translateX(0)";
    } else if (scrollPosition > 5 && scrollPosition < 300) {
        banner.style.opacity = '1';
        banner.style.transform = "translateX(0)";
    } else {
        logo.style.opacity = '0';
        logo.style.transform = "translateX(-100%)";
        navlinks.style.opacity = '0';
        navlinks.style.transform = "translateX(-100%)";
        banner.style.opacity = '0';
        banner.style.transform = "translateX(-100%)";
    }
});