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
    delay: index * 0.01,
  });
});

// first-section elementlarini tanlang
const sectionElements = document.querySelectorAll(
  ".first-section *:not(.bg-img)"
);

sectionElements.forEach((element, index) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 80%", // Elementlar 80% topda bo'lganda animatsiya boshlanadi
      toggleActions: "play none none none",
      // End state ni aniqlang
      onLeave: () => gsap.to(element, { opacity: 0 }), // Scroll bo'lganda elementni yashirish
      onEnterBack: () => gsap.to(element, { opacity: 1 }), // Qaytganingizda elementni ko'rsatish
    },
    opacity: 0, // Yana ko'rinmas holat
    y: 30, // Vertikal siljish
    scale: 0.9, // Scale 0.9 holatidan boshlanishi
    duration: 0.6, // Animatsiya davomiyligi
    ease: "power4.out", // Yuqori sifatli qizg'in effekt
    delay: index * 0.01, // Har bir element uchun ortiqcha vaqt
  });
});
