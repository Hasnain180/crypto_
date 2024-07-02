
let hamburger = document.querySelector(".hamburger");
let menulink = document.querySelector(".menu-link");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    menulink.classList.toggle("active")
});



// AOS.init();
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// // ..
// AOS.init();
