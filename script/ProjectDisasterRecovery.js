gsap.registerPlugin(ScrollTrigger);

const ulElements = document.querySelectorAll(".footer-top ul");

gsap.matchMedia().add("(max-width: 768px)", () => {
  document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".first-section h1", {
      y: 30,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".first-section",
        start: "top 80%",
      },
    });
    gsap.from(".first-section h4", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      scrollTrigger: {
        trigger: ".first-section",
        start: "top 80%",
      },
    });
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

  document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".Second-left", {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".second-section",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from(".Second-right", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".second-section",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });
});

gsap.matchMedia().add("(min-width: 769px)", () => {
  document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".first-section h1", {
      y: 30,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".first-section",
        start: "top 80%",
      },
    });
    gsap.from(".first-section h4", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      scrollTrigger: {
        trigger: ".first-section",
        start: "top 80%",
      },
    });
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

  document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".Second-left", {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".second-section",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from(".Second-right", {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".second-section",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });
});
