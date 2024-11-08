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

  // Animate the main heading (h1)
  gsap.from(".first-section h1", {
    y: -50, // Start from 50 pixels above
    opacity: 0, // Start completely transparent
    duration: 1, // Animation duration of 1 second
    ease: "power2.out", // Easing function for a smooth effect
    scrollTrigger: {
      trigger: ".first-section", // Trigger animation when the first-section comes into view
      start: "top 80%", // Start when the top of the section hits 80% of the viewport
      toggleActions: "play none none reverse", // Play on enter, reverse on leave
    },
  });

  // Animate the subtitle (h4)
  gsap.from(".first-section h4", {
    y: 20, // Start from 20 pixels below
    opacity: 0, // Start completely transparent
    duration: 1, // Animation duration of 1 second
    ease: "power2.out", // Easing function
    scrollTrigger: {
      trigger: ".first-section", // Trigger animation when the first-section comes into view
      start: "top 80%", // Start when the top of the section hits 80% of the viewport
      toggleActions: "play none none reverse", // Play on enter, reverse on leave
    },
  });
});

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Animate the top section elements
  gsap.from(".second-section-top-img", {
    scale: 0.8, // Start smaller
    opacity: 0, // Start completely transparent
    duration: 1, // Animation duration
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".second-section-top", // Trigger for the animation
      start: "top 80%", // Start when the top hits 80% of the viewport
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".second-section-top-right-text h1", {
    y: -30, // Slide in from above
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".second-section-top",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".second-section-top-right-text p", {
    y: 20, // Slide in from below
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".second-section-top",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".second-section-top-right-buttons button", {
    y: 30, // Slide in from below
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".second-section-top",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".second-section-top-right-buttons div", {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".second-section-top",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  // Animate the bottom section numbers
  gsap.from(".second-section-bottom-div div", {
    scale: 0.5, // Start smaller
    opacity: 0,
    duration: 1,
    stagger: 0.2, // Stagger the animations for each item
    scrollTrigger: {
      trigger: ".second-section-bottom",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });
});

gsap.from(".third-section-top h4, .third-section-top h1", {
  scrollTrigger: {
    trigger: ".third-section-top",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  y: 30,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out",
});

gsap.from(".third-section-bottom-div", {
  scrollTrigger: {
    trigger: ".third-section-bottom",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  y: 50,
  duration: 1.2,
  stagger: 0.3,
  ease: "power3.out",
});

gsap.from(".third-section-bottom-div1", {
  scrollTrigger: {
    trigger: ".third-section-bottom-div1",
    start: "top 85%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  scale: 0.8,
  duration: 1,
  ease: "power3.out",
});
// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Animate the main image in the Fourth Section
  gsap.from(".fourth-section-img", {
    opacity: 0,
    y: -30, // Slide in from the top
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".fourth-section-img",
      start: "top 80%", // Start animation when the top of the image hits 80% of the viewport
      toggleActions: "play none none reverse",
    },
  });

  // Animate the brand images
  gsap.utils
    .toArray(".fourth-section-container img:not(.fourth-section-img)")
    .forEach((img, index) => {
      gsap.from(img, {
        opacity: 0,
        y: 20, // Slide in from below
        duration: 0.5,
        delay: index * 0.1, // Stagger each image appearance
        scrollTrigger: {
          trigger: img,
          start: "top 80%", // Start when the image is in view
          toggleActions: "play none none reverse",
        },
      });
    });
});

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Animate the title and texts in the top-left part
  gsap.from(".fifth-section-top-left-texts", {
    opacity: 0,
    y: -30, // Slide in from the top
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".fifth-section-top-left-texts",
      start: "top 80%", // Start when the top hits 80% of the viewport
      toggleActions: "play none none reverse",
    },
  });

  // Animate the features
  gsap.utils
    .toArray(".fifth-section-top-left-features h4")
    .forEach((feature, index) => {
      gsap.from(feature, {
        opacity: 0,
        y: 20, // Slide in from below
        duration: 0.5,
        delay: index * 0.1, // Stagger each feature appearance
        scrollTrigger: {
          trigger: feature,
          start: "top 80%", // Start when the feature is in view
          toggleActions: "play none none reverse",
        },
      });
    });

  // Animate the right image
  gsap.from(".fifth-section-top-right", {
    opacity: 0,
    scale: 0.9, // Slightly scale down initially
    duration: 1,
    scrollTrigger: {
      trigger: ".fifth-section-top-right",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  // Animate the cards in the bottom section
  gsap.utils
    .toArray(".fifth-section-bottom-cards-card")
    .forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 20, // Slide in from below
        duration: 0.5,
        delay: index * 0.1, // Stagger appearance
        scrollTrigger: {
          trigger: card,
          start: "top 80%", // Start when the card is in view
          toggleActions: "play none none reverse",
        },
      });
    });
});

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Animate the top section (heading and description)
  gsap.from(".Offices-top-left", {
    opacity: 0,
    y: -30, // Slide in from the top
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".Offices-top-left",
      start: "top 80%", // Start when the top hits 80% of the viewport
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".Offices-top-right", {
    opacity: 0,
    y: 20, // Slide in from below
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".Offices-top-right",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  // Animate the left image
  gsap.from(".Offices-bottom-left", {
    opacity: 0,
    scale: 0.9, // Slightly scale down initially
    duration: 1,
    scrollTrigger: {
      trigger: ".Offices-bottom-left",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  // Animate the office cards in the right section
  gsap.utils
    .toArray(".Offices-bottom-right-top-card, .Offices-bottom-right-bottom")
    .forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 20, // Slide in from below
        duration: 0.5,
        delay: index * 0.1, // Stagger appearance
        scrollTrigger: {
          trigger: card,
          start: "top 80%", // Start when the card is in view
          toggleActions: "play none none reverse",
        },
      });
    });
});
gsap.from(".sixth-section-texts h4, .sixth-section-texts h1", {
  scrollTrigger: {
    trigger: ".sixth-section-texts",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  y: 30,
  duration: 1,
  stagger: 0.3,
  ease: "power3.out",
});

gsap.from(".sixth-section-cards-card", {
  scrollTrigger: {
    trigger: ".sixth-section-cards",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  scale: 0.9,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out",
});

gsap.from(".sixth-section-container button", {
  scrollTrigger: {
    trigger: ".sixth-section-container button",
    start: "top 90%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  y: 20,
  duration: 1,
  ease: "power3.out",
});
// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Animate the section title
  gsap.from(".seventh-section-texts", {
    opacity: 0,
    y: -50, // Slide in from the top
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".seventh-section-texts",
      start: "top 80%", // Start when the top hits 80% of the viewport
      toggleActions: "play none none reverse",
    },
  });

  // Animate each testimonial card
  gsap.utils.toArray(".seventh-section-cards-card").forEach((card, index) => {
    gsap.from(card, {
      opacity: 0,
      y: 30, // Slide in from below
      duration: 0.5,
      delay: index * 0.1, // Stagger appearance
      scrollTrigger: {
        trigger: card,
        start: "top 80%", // Start when the card is in view
        toggleActions: "play none none reverse",
      },
    });
  });
});
