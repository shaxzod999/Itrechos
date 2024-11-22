gsap.registerPlugin(ScrollTrigger);

const firstSection = document.querySelector(".first-section");
const h1Element = firstSection.querySelector("h1");
const h4Element = firstSection.querySelector("h4");
const serviceCards = document.querySelectorAll(".third-section-bottom-div");
const ulElements = document.querySelectorAll(".footer-top ul");

gsap.from(h1Element, {
  scrollTrigger: {
    trigger: firstSection,
    start: "top 80%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  y: 30,
  duration: 0.5,
  ease: "power3.out",
});
gsap.from(h4Element, {
  scrollTrigger: {
    trigger: firstSection,
    start: "top 80%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  y: 30,
  duration: 0.5,
  ease: "power3.out",
  delay: 0.2,
});
serviceCards.forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
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
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".fifth-section-top-left-texts h4", {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".fifth-section-top-left-texts",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });
  gsap.from(".fifth-section-top-left-features h4", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".fifth-section-top-left-features",
      start: "top 80%",
    },
  });
  gsap.from(".fifth-section-top-right", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".fifth-section-top-right",
      start: "top 80%",
    },
  });
  gsap.from(".fifth-section-bottom-cards-card", {
    y: 50,
    opacity: 0,
    duration: 0.6,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".fifth-section-bottom",
      start: "top 80%",
    },
  });
});
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".seventh-section-texts h4", {
    y: 30,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".seventh-section-texts",
      start: "top 80%",
    },
  });
  gsap.from(".seventh-section-texts h1", {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    scrollTrigger: {
      trigger: ".seventh-section-texts",
      start: "top 80%",
    },
  });
  gsap.utils.toArray(".seventh-section-cards-card").forEach((card, index) => {
    gsap.from(card, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      delay: index * 0.1,
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });
});
gsap.from(".tenth-section h1", {
  scrollTrigger: {
    trigger: ".tenth-section",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  y: 30,
  duration: 1,
  ease: "power3.out",
});
gsap.from(".tenth-section button", {
  scrollTrigger: {
    trigger: ".tenth-section",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  y: 20,
  duration: 1,
  delay: 0.3,
  ease: "power3.out",
});
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
