const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("close");
  nav.classList.toggle("open");
});

// moving the hamburger menu on scrolling
const buttons = document.querySelector(".buttons");
window.addEventListener("scroll", () => {
  const rect = buttons.getBoundingClientRect();
  const isVisible =
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= window.innerHeight &&
    rect.right <= window.innerWidth;

  if (isVisible) {
    hamburger.classList.remove("right-[30px]");
    hamburger.classList.add("right-1/2");
  } else {
    hamburger.classList.add("right-[30px]");
    hamburger.classList.remove("right-1/2");
  }
});

// skills animation using the lottie.json file
lottie.loadAnimation({
  container: document.getElementById("lottie-animation"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "./images/animations/animation.json",
});

// smooth scroll effect for nav links
var scroll = new SmoothScroll(
  '.navbar a[href*="#"] , .home-arrow a[href="#home"]',
  {
    speed: 3000,
    speedAsDuration: true,
  }
);

// hiding the up arrow when not in the home section
const headerSection = document.querySelector("header");
window.addEventListener("scroll", () => {
  const rect = headerSection.getBoundingClientRect();
  const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

  let upArrowBtn = document.querySelector(".home-arrow");
  if (isVisible) {
    upArrowBtn.classList.add("hidden");
  } else {
    upArrowBtn.classList.remove("hidden");
  }
});
