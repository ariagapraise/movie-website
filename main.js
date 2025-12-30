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
}, 2000);

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

