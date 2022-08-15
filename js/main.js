/* ========== MOBILE NAV ========= */

const mobileNavButton = document.querySelector('.mobile-nav-button');
const mobileNavIcon = document.querySelector('.mobile-nav-button_icon');
const mobileNav = document.querySelector('.mobile-nav')

mobileNavButton.addEventListener('click', function(){
    mobileNavIcon.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
})

/* ========== VIDEO ========= */

const videoBtn = document.querySelector('#btn-in-story-video');
const videoBtnIcon = document.querySelector('#btn-icon-in-story-video');
const videoFile = document.querySelector('#video-in-story-video');
const videoOverlay = document.querySelector('#overlay-in-story-video');



videoBtn.addEventListener('click', function(){

    function toggleOverlay(event){
        if (videoOverlay.classList.contains('hidden')){
            videoOverlay.classList.remove('hidden');
        }
        else {
            videoOverlay.classList.add('hidden');
        }
    }

    if (videoFile.paused){
        videoFile.play();
        videoBtnIcon.src = "images/pause-white.svg";

        videoOverlay.onmouseleave = toggleOverlay;
        videoOverlay.onmouseenter = toggleOverlay;
    }
    else{
        videoFile.pause();
        videoBtnIcon.src = "images/play-white.svg";

        videoOverlay.onmouseleave = null;
        videoOverlay.onmouseenter = null;
    }
})