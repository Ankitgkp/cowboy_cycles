gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".landing-image",
  { opacity: 0 },
  { 
    opacity: 1, 
    duration: 1, 
    ease: "power2.out"
  }
);

gsap.utils.toArray(".scroll-images:not(.change-scroll)").forEach((img) => {
  gsap.fromTo(
    img,
    { opacity: 0, y: 50 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 1.5, 
      ease: "power2.out",
      scrollTrigger: {
        trigger: img,
        start: "top 80%",
        once: true  
      }
    }
  );
});

// Scroll animation for .change-scroll (Left to Right)
gsap.utils.toArray(".change-scroll").forEach((img) => {
  gsap.fromTo(
    img,
    { opacity: 0, x: -100 },
    { 
      opacity: 1, 
      x: 0, 
      duration: 1.5, 
      ease: "power2.out",
      scrollTrigger: {
        trigger: img,
        start: "top 80%",
        once: true  
      }
    }
  );
});


gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  gsap.to("html", {
    scrollBehavior: "smooth",
  });
});
