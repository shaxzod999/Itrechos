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

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Animate the heading and subheading in the First Section
  gsap.from(".first-section h1", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".first-section",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".first-section h4", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power2.out",
    delay: 0.2, // Slight delay for the h4
    scrollTrigger: {
      trigger: ".first-section",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Animate the contact information lists
  const contactLists = document.querySelectorAll(".second-section-top ul");
  contactLists.forEach((list, index) => {
    gsap.from(list, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: list,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      delay: index * 0.2, // Stagger the animations for each list
    });
  });

  // Animate the iframe and contact form
  gsap.from(".second-section-bottom iframe", {
    opacity: 0,
    scale: 0.9,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".second-section-bottom",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".second-section-bottom h1", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".second-section-bottom",
      start: "top 80%",
      toggleActions: "play none none reverse",
      delay: 0.1,
    },
  });

  const formInputs = document.querySelectorAll(
    ".second-section-bottom input, .second-section-bottom textarea, .second-section-bottom button"
  );
  formInputs.forEach((input, index) => {
    gsap.from(input, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".second-section-bottom",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      delay: index * 0.1, // Stagger the animations for inputs and button
    });
  });
});
