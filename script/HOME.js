const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  let count = 0;
  const target = parseInt(counter.getAttribute("data-target"));
  const speed = parseInt(counter.getAttribute("data-speed"));
  const suffix = counter.getAttribute("data-suffix") || "";
  let started = false;

  const updateCounter = () => {
    if (count < target) {
      count++;
      if (suffix === "k+") {
        counter.innerHTML = `${count}<span class="black-suffix">k</span><span class="second-section-bottom-div-h1-span1">+</span>`;
      } else if (suffix === "%") {
        counter.innerHTML = `${count}<span class="second-section-bottom-div-h1-span3">%</span>`;
      }
      setTimeout(updateCounter, speed);
    }
  };

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !started) {
      started = true;
      updateCounter();
    }
  });

  observer.observe(counter);
});

gsap.registerPlugin(ScrollTrigger);

const ulElements = document.querySelectorAll(".footer-top ul");

gsap.matchMedia().add("(max-width: 768px)", () => {
  //first-section
  gsap.from(".first-section-top-left-text1", {
    opacity: 0,
    delay: 0.3,
    y: -30,
  });
  gsap.from(".first-section-top-left-text2", {
    opacity: 0,
    delay: 0.4,
    y: -30,
  });
  gsap.from(".first-section-top-left p", { opacity: 0, delay: 0.5, y: -30 });
  gsap.from(".first-section-top .first-section-top-img-card", {
    opacity: 0,
    delay: 0.3,
    y: 30,
  });
  // gsap.from(".first-section-top-left .btn", { opacity: 1,duration: 1, delay: 0.5, y: -30 });
  gsap.from(".first-section-bottom .img1", { opacity: 0, delay: 0.3, y: 30 });
  gsap.from(".first-section-bottom .img2", { opacity: 0, delay: 0.4, y: 30 });
  gsap.from(".first-section-bottom .img3", { opacity: 0, delay: 0.5, y: 30 });
  gsap.from(".first-section-bottom .img4", { opacity: 0, delay: 0.6, y: 30 });
  gsap.from(".first-section-bottom .img5", { opacity: 0, delay: 0.7, y: 30 });
  gsap.from(".first-section-bottom .img6", { opacity: 0, delay: 0.8, y: 30 });
  gsap.from(".second-section-top-img", {
    scrollTrigger: {
      trigger: ".second-section",
      start: "left 80%",
      end: "left 20%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: -50,
    duration: 1.7,
    ease: "power3.out",
  });

  gsap.from(".second-section-top-right-text h1", {
    scrollTrigger: {
      trigger: ".second-section",
      start: "left 80%",
      end: "left 20%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: "power3.out",
  });
  gsap.from(".second-section-top-right-text p", {
    scrollTrigger: {
      trigger: ".second-section",
      start: "left 80%",
      end: "left 20%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 200,
    duration: 1,
    ease: "power3.out",
  });
  gsap.from(".second-section-top-right-buttons", {
    scrollTrigger: {
      trigger: ".second-section",
      start: "left 80%",
      end: "left 20%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 150,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(".second-section-bottom-div > div", {
    scrollTrigger: {
      trigger: ".second-section-top",
      start: "top 60%",
      end: "bottom 20%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 30,
    duration: 4,
    stagger: 0.2,
    ease: "power2.out",
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

  gsap.from(".fourth-section-top h4, .fourth-section-top h1", {
    scrollTrigger: {
      trigger: ".fourth-section-top",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
  });

  gsap.from(".fourth-section-top button", {
    scrollTrigger: {
      trigger: ".fourth-section-top",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    scale: 0.8,
    duration: 1,
    ease: "power3.out",
    delay: 0.5,
  });

  gsap.from(".mySwiper swiper-slide", {
    scrollTrigger: {
      trigger: ".fourth-section-bottom",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 1.5,
    stagger: 0.3,
    ease: "power3.out",
  });

  gsap.from(".carousel-item", {
    scrollTrigger: {
      trigger: ".carousel-container",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 1.2,
    stagger: 0.3,
    ease: "power3.out",
  });

  gsap.from(
    ".fifth-section-top-left-texts h4, .fifth-section-top-left-texts h1, .fifth-section-top-left-texts p",
    {
      scrollTrigger: {
        trigger: ".fifth-section-top-left-texts",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    }
  );

  gsap.from(".fifth-section-top-left-features h4", {
    scrollTrigger: {
      trigger: ".fifth-section-top-left-features",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: -30,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
  });

  gsap.from(".fifth-section-top-right", {
    scrollTrigger: {
      trigger: ".fifth-section-top-right",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    scale: 0.8,
    duration: 1.2,
    ease: "power3.out",
  });

  gsap.from(".fifth-section-bottom-cards-card", {
    scrollTrigger: {
      trigger: ".fifth-section-bottom-cards",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out",
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

  gsap.from(".seventh-section-texts h4, .seventh-section-texts h1", {
    scrollTrigger: {
      trigger: ".seventh-section-texts",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out",
  });

  gsap.from(".seventh-section-cards-card", {
    scrollTrigger: {
      trigger: ".seventh-section-cards",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
  });

  gsap.from(".eighth-section-left-texts h4, .eighth-section-left-texts h1", {
    scrollTrigger: {
      trigger: ".eighth-section-left-texts",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out",
  });

  gsap.from(
    ".eighth-section-left-message input, .eighth-section-left-message textarea, .eighth-section-left-message",
    {
      scrollTrigger: {
        trigger: ".eighth-section-left-message",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 20,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    }
  );

  gsap.from(".eighth-section-right", {
    scrollTrigger: {
      trigger: ".eighth-section-right",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: "power3.out",
  });

  gsap.from(".ninth-section-div-texts h4, .ninth-section-div-texts h1", {
    scrollTrigger: {
      trigger: ".ninth-section-div-texts",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
  });

  gsap.from(".ninth-section-div-bottom-top", {
    scrollTrigger: {
      trigger: ".ninth-section-div-bottom-top",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(".ninth-section-div-bottom-bottom > div", {
    scrollTrigger: {
      trigger: ".ninth-section-div-bottom-bottom",
      start: "top 85%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 20,
    duration: 1,
    stagger: 0.15,
    ease: "power3.out",
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
});

gsap.matchMedia().add("(min-width: 769px)", () => {
  //first-section
  gsap.from(".first-section-top-left-text1", {
    opacity: 0,
    delay: 0.3,
    x: -30,
  });
  gsap.from(".first-section-top-left-text2", {
    opacity: 0,
    delay: 0.4,
    x: -30,
  });
  gsap.from(".first-section-top-left p", { opacity: 0, delay: 0.5, x: -30 });
  gsap.from(".first-section-top .first-section-top-img-card", {
    opacity: 0,
    delay: 0.3,
    x: 30,
  });
  // gsap.from(".first-section-top-left .btn", { opacity: 1,duration: 1, delay: 0.5, y: -30 });
  gsap.from(".first-section-bottom .img1", { opacity: 0, delay: 0.3, y: 30 });
  gsap.from(".first-section-bottom .img2", { opacity: 0, delay: 0.4, y: 30 });
  gsap.from(".first-section-bottom .img3", { opacity: 0, delay: 0.5, y: 30 });
  gsap.from(".first-section-bottom .img4", { opacity: 0, delay: 0.6, y: 30 });
  gsap.from(".first-section-bottom .img5", { opacity: 0, delay: 0.7, y: 30 });
  gsap.from(".first-section-bottom .img6", { opacity: 0, delay: 0.8, y: 30 });
  gsap.from(".second-section-top-img", {
    scrollTrigger: {
      trigger: ".second-section",
      start: "left 80%",
      end: "left 20%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    x: -50,
    duration: 1.7,
    ease: "power3.out",
  });

  gsap.from(".second-section-top-right-text h1", {
    scrollTrigger: {
      trigger: ".second-section",
      start: "left 80%",
      end: "left 20%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    x: 50,
    duration: 1.5,
    ease: "power3.out",
  });
  gsap.from(".second-section-top-right-text p", {
    scrollTrigger: {
      trigger: ".second-section",
      start: "left 80%",
      end: "left 20%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    x: 100,
    duration: 1,
    ease: "power3.out",
  });
  gsap.from(".second-section-top-right-buttons", {
    scrollTrigger: {
      trigger: ".second-section",
      start: "left 80%",
      end: "left 20%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    x: 150,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(".second-section-bottom-div > div", {
    scrollTrigger: {
      trigger: ".second-section-top",
      start: "top 60%",
      end: "bottom 20%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 30,
    duration: 4,
    stagger: 0.2,
    ease: "power2.out",
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

  gsap.from(".fourth-section-top h4, .fourth-section-top h1", {
    scrollTrigger: {
      trigger: ".fourth-section-top",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
  });

  gsap.from(".fourth-section-top button", {
    scrollTrigger: {
      trigger: ".fourth-section-top",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    scale: 0.8,
    duration: 1,
    ease: "power3.out",
    delay: 0.5,
  });

  gsap.from(".mySwiper swiper-slide", {
    scrollTrigger: {
      trigger: ".fourth-section-bottom",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    x: 50,
    duration: 1.5,
    stagger: 0.3,
    ease: "power3.out",
  });

  gsap.from(".carousel-item", {
    scrollTrigger: {
      trigger: ".carousel-container",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 1.2,
    stagger: 0.3,
    ease: "power3.out",
  });

  gsap.from(
    ".fifth-section-top-left-texts h4, .fifth-section-top-left-texts h1, .fifth-section-top-left-texts p",
    {
      scrollTrigger: {
        trigger: ".fifth-section-top-left-texts",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    }
  );

  gsap.from(".fifth-section-top-left-features h4", {
    scrollTrigger: {
      trigger: ".fifth-section-top-left-features",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    x: -30,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
  });

  gsap.from(".fifth-section-top-right", {
    scrollTrigger: {
      trigger: ".fifth-section-top-right",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    scale: 0.8,
    duration: 1.2,
    ease: "power3.out",
  });

  gsap.from(".fifth-section-bottom-cards-card", {
    scrollTrigger: {
      trigger: ".fifth-section-bottom-cards",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out",
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

  gsap.from(".seventh-section-texts h4, .seventh-section-texts h1", {
    scrollTrigger: {
      trigger: ".seventh-section-texts",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out",
  });

  gsap.from(".seventh-section-cards-card", {
    scrollTrigger: {
      trigger: ".seventh-section-cards",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
  });

  gsap.from(".eighth-section-left-texts h4, .eighth-section-left-texts h1", {
    scrollTrigger: {
      trigger: ".eighth-section-left-texts",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out",
  });

  gsap.from(
    ".eighth-section-left-message input, .eighth-section-left-message textarea, .eighth-section-left-message",
    {
      scrollTrigger: {
        trigger: ".eighth-section-left-message",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 20,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    }
  );

  gsap.from(".eighth-section-right", {
    scrollTrigger: {
      trigger: ".eighth-section-right",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    x: 50,
    duration: 1.2,
    ease: "power3.out",
  });

  gsap.from(".ninth-section-div-texts h4, .ninth-section-div-texts h1", {
    scrollTrigger: {
      trigger: ".ninth-section-div-texts",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
  });

  gsap.from(".ninth-section-div-bottom-top", {
    scrollTrigger: {
      trigger: ".ninth-section-div-bottom-top",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(".ninth-section-div-bottom-bottom > div", {
    scrollTrigger: {
      trigger: ".ninth-section-div-bottom-bottom",
      start: "top 85%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 20,
    duration: 1,
    stagger: 0.15,
    ease: "power3.out",
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
});
