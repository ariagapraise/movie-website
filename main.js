let header = document.querySelector('header');
let bars = document.querySelector('#bars-icon');
let navbar = document.querySelector('.navbar');

// window.addEventListener('scroll', () =>{
//     header.classList.toggle('shadow', window.scrollY > 0);
// });

bars.onclick = () => {
    bars.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}

var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});


const popupOverlay = document.getElementById("popup-overlay");
const closeBtn = document.getElementById("close-btn");

// Show popup after 3 seconds
setTimeout(() => {
    popupOverlay.style.display = "flex";
}, 5000);

// Close popup
closeBtn.onclick = () => {
    popupOverlay.style.display = "none";
};

// Close popup when clicking outside
popupOverlay.onclick = (e) => {
    if (e.target === popupOverlay) {
        popupOverlay.style.display = "none";
    }
};


function openVideo(videoPath) {
    const popup = document.getElementById("videoPopup");
    const video = document.getElementById("popupVideo");
    const source = document.getElementById("videoSource");

    source.src = videoPath;
    video.load();
    popup.style.display = "flex";
    video.play();
}

function closeVideo() {
    const popup = document.getElementById("videoPopup");
    const video = document.getElementById("popupVideo");

    video.pause();
    popup.style.display = "none";
}


document.getElementById("newsletter").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Form submitted successfully!");
});



const text = "Welcome to K-hub";
const speed = 120; // typing speed
let index = 0;

function typeEffect() {
    const el = document.querySelector(".loading-text");
    if (index < text.length) {
        el.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, speed);
    } else {
        // after typing finishes, fade out preloader
        setTimeout(() => {
            const pre = document.getElementById("preloader");
            pre.classList.add("hide");
            setTimeout(() => {
                pre.style.display = "none";
            }, 600);
        }, 800);
    }
}

window.addEventListener("load", typeEffect);









