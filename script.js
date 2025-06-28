// script.js

document.addEventListener("DOMContentLoaded", () => {
    const fadeInElements = document.querySelectorAll(".fade-in");
  
    const fadeInOnScroll = () => {
      const triggerBottom = window.innerHeight * 0.85;
  
      fadeInElements.forEach((el) => {
        const boxTop = el.getBoundingClientRect().top;
  
        if (boxTop < triggerBottom) {
          el.classList.add("visible");
        }
      });
    };
  
    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // run once on page load
  });
  