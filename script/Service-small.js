document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    question.classList.toggle("active");

    const answer = question.nextElementSibling;
    if (question.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = null;
    }
  });
});

gsap.registerPlugin(ScrollTrigger);

const ulElements = document.querySelectorAll(".footer-top ul");

gsap.matchMedia().add("(max-width: 768px)", () => {
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

    // Animate the main heading
    gsap.from(".first-section h1", {
      opacity: 0,
      y: 50, // Slide in from below
      duration: 1, // Animation duration
      ease: "power2.out", // Easing function
      scrollTrigger: {
        trigger: ".first-section", // Element that triggers the animation
        start: "top 80%", // Start animation when the top of the section is 80% from the top of the viewport
        toggleActions: "play none none reverse", // Control the animation playback
      },
    });

    // Animate the subheading
    gsap.from(".first-section h4", {
      opacity: 0,
      y: 30, // Slide in from below
      duration: 0.5, // Animation duration
      ease: "power2.out", // Easing function
      scrollTrigger: {
        trigger: ".first-section",
        start: "top 80%",
        toggleActions: "play none none reverse",
        delay: 0.2, // Delay for a staggered effect
      },
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate left section texts
    gsap.from(".third-second-left h1, .third-second-left p", {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".third-second-left",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate cards
    gsap.from(".third-second-left-card", {
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".third-second-left-cards",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate FAQ section
    gsap.from(".faq-item", {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".faq-section",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate right section
    gsap.from(".third-second-right", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: ".third-second-right",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });
});

gsap.matchMedia().add("(min-width: 769px)", () => {
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

    // Animate the main heading
    gsap.from(".first-section h1", {
      opacity: 0,
      y: 50, // Slide in from below
      duration: 1, // Animation duration
      ease: "power2.out", // Easing function
      scrollTrigger: {
        trigger: ".first-section", // Element that triggers the animation
        start: "top 80%", // Start animation when the top of the section is 80% from the top of the viewport
        toggleActions: "play none none reverse", // Control the animation playback
      },
    });

    // Animate the subheading
    gsap.from(".first-section h4", {
      opacity: 0,
      y: 30, // Slide in from below
      duration: 0.5, // Animation duration
      ease: "power2.out", // Easing function
      scrollTrigger: {
        trigger: ".first-section",
        start: "top 80%",
        toggleActions: "play none none reverse",
        delay: 0.2, // Delay for a staggered effect
      },
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate left section texts
    gsap.from(".third-second-left h1, .third-second-left p", {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".third-second-left",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate cards
    gsap.from(".third-second-left-card", {
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".third-second-left-cards",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate FAQ section
    gsap.from(".faq-item", {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".faq-section",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate right section
    gsap.from(".third-second-right", {
      opacity: 0,
      x: 50,
      duration: 1,
      scrollTrigger: {
        trigger: ".third-second-right",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });
});
