const hamburger = document.querySelector(".header-hamburger");
const menu = document.querySelector(".header-ul");
let lastScrollY = window.scrollY;

// Toggle menu on hamburger click
hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");

  if (menu.classList.contains("active")) {
    gsap.to(".header-ul", {
      duration: 0.5,
      top: "60px",
      opacity: 1,
      ease: "power2.out",
    });
  } else {
    gsap.to(".header-ul", {
      duration: 0.5,
      top: "-100%",
      opacity: 0,
      ease: "power2.in",
    });
  }
});

// Auto-hide menu on scroll down
window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY + 10 && menu.classList.contains("active")) {
    // If scrolling down and menu is open, hide it
    menu.classList.remove("active");
    gsap.to(".header-ul", {
      duration: 0.5,
      top: "-100%",
      opacity: 0,
      ease: "power2.in",
    });
  }
  lastScrollY = window.scrollY; // Update last scroll position
});
