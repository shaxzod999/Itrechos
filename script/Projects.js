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

  // Animate the heading
  gsap.from(".first-section-container h1", {
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".first-section-container",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  // Animate the subheading
  gsap.from(".first-section-container h4", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".first-section-container",
      start: "top 80%",
      toggleActions: "play none none reverse",
      delay: 0.1, // Slight delay for the subheading
    },
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Animate the section title and buttons
  gsap.from(".third-section-top-texts h4", {
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".third-section-top",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".third-section-top-texts h1", {
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".third-section-top",
      start: "top 80%",
      toggleActions: "play none none reverse",
      delay: 0.1, // Delay for staggered appearance
    },
  });

  gsap.from(".third-section-top-btns button", {
    opacity: 0,
    y: 20,
    duration: 0.5,
    ease: "power2.out",
    stagger: 0.1, // Stagger buttons animation
    scrollTrigger: {
      trigger: ".third-section-top",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  // Project kartalarni animatsiya qilish
  gsap.utils.toArray(".third-section-bottom-card").forEach((card, index) => {
    gsap.fromTo(
      card,
      {
        opacity: 0,
        y: 30, // Pastdan boshlanadi
      },
      {
        opacity: 1,
        y: 0, // Yakuniy pozitsiya
        duration: 0.6,
        ease: "power2.out",
        delay: index * 0.15, // Har bir kartani kechiktirib animatsiya qilish
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none", // Animatsiya faqat birinchi marta
          once: true, // Animatsiya faqat bir marta bo'lishini ta'minlash
        },
      }
    );
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Animate the section heading
  gsap.from(".tenth-section h1", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".tenth-section",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  // Animate the contact button
  gsap.from(".tenth-section button", {
    opacity: 0,
    y: 20,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".tenth-section",
      start: "top 80%",
      toggleActions: "play none none reverse",
      delay: 0.2, // Slight delay for staggered appearance
    },
  });
});
