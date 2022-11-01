/********************  menu start **********************/

const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");

// Open Close Navbar Menu on Click Burger
if (burgerMenu && navbarMenu) {
    burgerMenu.addEventListener("click", () => {
        burgerMenu.classList.toggle("is-active");
        navbarMenu.classList.toggle("is-active");
    });
}

// Close Navbar Menu on Click Menu Links
document.querySelectorAll(".menu-link").forEach((link) => {
    link.addEventListener("click", () => {
        burgerMenu.classList.remove("is-active");
        navbarMenu.classList.remove("is-active");
    });
});

/********************  menu end **********************/

/********************  Slide start **********************/

const splide = new Splide('.splide', {
    type: 'loop',
    // autoplay: 'true',
    interval: '5000',
});

splide.mount();

/********************  Slide end **********************/

/********************  Parallax start **********************/

const parallax = document.getElementById("parallax");

// Parallax Effect for DIV 1
window.addEventListener("scroll", () => {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
    // DIV 1 background will move slower than other elements on scroll.
});

// const parallaxNext = document.getElementById("next-parallax");

// Parallax Effect for DIV 2
//window.addEventListener("scroll", () => {
//let offset = window.pageYOffset;
//parallaxNext.style.backgroundPositionY = offset * 0.8 + "px";
// DIV 2 background will move slower than other elements on scroll.
// });

/********************  Parallax end **********************/