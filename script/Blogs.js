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
// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Animate the section title and subtitle
  gsap.from(".first-section-container h1", {
    opacity: 0,
    y: 50, // Slide in from below
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".first-section",
      start: "top 80%", // Start when the top hits 80% of the viewport
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".first-section-container h4", {
    opacity: 0,
    y: 50, // Slide in from below
    duration: 1,
    ease: "power2.out",
    delay: 0.2, // Slight delay for the subtitle
    scrollTrigger: {
      trigger: ".first-section",
      start: "top 80%", // Start when the top hits 80% of the viewport
      toggleActions: "play none none reverse",
    },
  });
});

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Animate the section title and subtitle
  gsap.from(".ninth-section-div-texts h4", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".ninth-section",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".ninth-section-div-texts h1", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    delay: 0.2, // Delay for the subtitle
    scrollTrigger: {
      trigger: ".ninth-section",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  // Animate the blog items
  const blogItems = document.querySelectorAll(
    ".ninth-section-div-bottom-top, .ninth-section-div-bottom-bottom div"
  );
  blogItems.forEach((item, index) => {
    gsap.from(item, {
      opacity: 0,
      y: 30,
      duration: 0.5,
      ease: "power2.out",
      delay: 0.3 + index * 0.1, // Stagger the animations
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Animate the title and paragraph of the second section
  gsap.from(".second-section", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".second-section",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Animate the title and buttons in the third section
  gsap.from(".third-section-top-texts h4", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".third-section",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".third-section-top-texts h1", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    delay: 0.2, // Delay for the main title
    scrollTrigger: {
      trigger: ".third-section",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  // Animate the buttons
  gsap.from(".third-section-top-btns button", {
    opacity: 0,
    y: 20,
    duration: 0.5,
    ease: "power2.out",
    stagger: 0.1, // Stagger the button animations
    scrollTrigger: {
      trigger: ".third-section",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  // Animate the cards
  gsap.from(".third-section-bottom-card", {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2, // Stagger the card animations
    scrollTrigger: {
      trigger: ".third-section",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Animate the heading and button in the Tenth Section
  gsap.from(".tenth-section h1", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".tenth-section",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".tenth-section button", {
    opacity: 0,
    y: 20,
    duration: 0.5,
    ease: "power2.out",
    delay: 0.3, // Slight delay for the button
    scrollTrigger: {
      trigger: ".tenth-section",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });
});
