const hamburger = document.getElementById("hamburger-menu");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// GSAP
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(SplitText);

  //   Header Container
  gsap.from(".header-container", {
    duration: 1.5,
    y: -150,
    opacity: 0,
  });

  // Hero Heading
  let heroHeading = SplitText.create(".hero-content > h1", {
    type: "words, chars",
  });
  gsap.from(heroHeading.chars, {
    duration: 1,
    y: 100,
    autoAlpha: 0,
    stagger: 0.05,
  });

  //   Hero Paragraph
  let heroParagraph = SplitText.create(".hero-content > p", {
    type: "words, chars",
  });
  gsap.from(heroParagraph.chars, {
    duration: 0.5,
    y: 100,
    autoAlpha: 0,
    stagger: 0.03,
    delay: 1.5,
  });

  //   Hero Image
  gsap.from(".hero-image > img", {
    duration: 1.5,
    x: 200,
    opacity: 0,
    delay: 0.2,
  });
});
