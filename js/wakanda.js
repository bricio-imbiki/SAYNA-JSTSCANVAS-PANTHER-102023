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



window.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;
    var bannertitle = document.querySelector(".banner-title");
    var subtitle = document.querySelector(".banner-subtitle ");
    var nav = document.querySelector(".nav-links");
    var log = document.querySelector(".logo");
    // animation banner text
    if (scrollPosition >= 0 && scrollPosition < 200) {
        nav.style.opacity = '1';
        nav.style.transform = "translateX(0)";
        log.style.opacity = '1';
        log.style.transform = "translateX(0)";
    } else if (scrollPosition > 300 && scrollPosition < 500) {
        bannertitle.style.opacity = '1';
        bannertitle.style.transform = "translateX(0)";
        subtitle.style.opacity = '1';
        subtitle.style.transform = "translateX(0)";
    } else {
        log.style.opacity = '0';
        log.style.transform = "translateX(-100%)";
        nav.style.opacity = '0';
        nav.style.transform = "translateX(-100%)";
        bannertitle.style.opacity = '0';
        bannertitle.style.transform = "translateX(-100%)";
        subtitle.style.opacity = '0';
        subtitle.style.transform = "translateX(-100%)";
    }
});