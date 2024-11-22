gsap.registerPlugin(ScrollTrigger);

const ulElements = document.querySelectorAll(".footer-top ul");

ulElements.forEach((ul, index) => {
  gsap.from(ul, {
    scrollTrigger: {
      trigger: ul,
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 30,
    duration: 0.5,
    ease: "power3.out",
    delay: index * 0.1,
  });
});

const sectionElements = document.querySelectorAll(
  ".first-section-container h1, .first-section-container h4"
);

sectionElements.forEach((element, index) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 80%", // Element 80% yuqoridan ko'rinishida animatsiya boshlanadi
      toggleActions: "play none none none",
    },
    opacity: 0, // Boshlanishda ko'rinmas
    y: 30, // Pastdan yuqoriga siljish
    duration: 0.6, // Animatsiya davomiyligi
    ease: "power3.out", // Easing effekti
    delay: index * 0.2, // Har bir element uchun ortiqcha vaqt
  });
});

const cards = document.querySelectorAll(".sixth-section-cards-card");

cards.forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 80%", // Element 80% yuqoridan ko'rinishida animatsiya boshlanadi
      toggleActions: "play none none none",
    },
    opacity: 0, // Boshlanishda ko'rinmas
    y: 30, // Pastdan yuqoriga siljish
    duration: 0.5, // Animatsiya davomiyligi
    ease: "power3.out", // Easing effekti
    delay: index * 0.1, // Har bir kartochka uchun ortiqcha vaqt
  });
});

// Select the Second Section
const secondSection = document.querySelector(".second-section");

// Initialize GSAP with ScrollTrigger

// Animate on scroll
gsap.from(secondSection, {
  scrollTrigger: {
    trigger: secondSection,
    start: "top 80%", // Start the animation when the top of the section is at 80% of the viewport height
    toggleActions: "play none none none",
  },
  opacity: 0, // Start with opacity 0
  y: 30, // Start with a vertical offset
  duration: 1, // Animation duration
  ease: "power3.out", // Easing function
});
