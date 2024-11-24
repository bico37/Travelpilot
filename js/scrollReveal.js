// Nav
gsap.to(".nav-overall", {
  scrollTrigger: {
    trigger: ".section1-grid",
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
    duration: 0, // verkürzte Dauer beim Scrollen nach unten
  },
  backgroundColor: "#505050cc",
});

gsap.to(".nav-header-main-headl", {
  scrollTrigger: {
    trigger: ".section1-grid",
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
    duration: 0, // verkürzte Dauer beim Scrollen nach unten
  },
  color: "white",
});

// Front Page when open
document.addEventListener("DOMContentLoaded", function () {
  // Headline
  gsap.from(".section1-headline", {
    opacity: 0,
    delay: 1.0,
    y: -200,
    duration: 1.5,
    ease: "power4.out",
    onComplete: function () {
      console.log("Animation completed!");
    },
  });

  // Slogen
  gsap.from(".section1-slogen", {
    opacity: 0,
    delay: 1.5,
    x: -200,
    duration: 1,
    ease: "Rough",
    onComplete: function () {
      console.log("Animation completed!");
    },
  });

  // button
  gsap.from(".button", {
    opacity: 0,
    delay: 2,
    duration: 0.5,
    ease: "power2.out",
    onComplete: function () {
      console.log("Animation completed!");
    },
  });

  // image
  gsap.from(".section1-img", {
    opacity: 0,
    delay: 0.5,
    duration: 0.5,
    x: 200,
    ease: "power2.out",
    onComplete: function () {
      console.log("Animation completed!");
    },
  });

  // sector 1-2
  gsap.from(".section1-2", {
    opacity: 0,
    delay: 2,
    duration: 1,
    y: -50,
    ease: "power2.out",
    onComplete: function () {
      console.log("Animation completed!");
    },
  });
});

// 2nd section - Why you should use Travelpilot
gsap.to(
  [".section-2-usagebox-1", ".section-2-usagebox-2", ".section-2-usagebox-3",],
  {
    scrollTrigger: '.section2-usageboxes',
    opacity: 1,
    delay: 0.5,
    duration: 1,
    ease: "power2.out",
    stagger: 0.5, // Gemeinsame Verzögerung zwischen den Animationen
    onComplete: function () {
      console.log("Animation completed!");
    },
  }
);

// 3rd section - What are the advantages 
gsap.to(
  [".section-3-advantages", ".section-3-disadvantages"],
  {
    scrollTrigger: '.section-BackToTop-Text',
    opacity: 1,
    delay: 0.1,
    duration: 1,
    ease: "power2.out",
    stagger: 0.5, // Gemeinsame Verzögerung zwischen den Animationen
    onComplete: function () {
      console.log("Animation completed!");
    },
  }
);