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