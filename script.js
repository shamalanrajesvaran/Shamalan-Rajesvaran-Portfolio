// script.js

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const btnTheme = document.getElementById("btn-theme");
  const themeIcon = btnTheme.querySelector("i");
  const hamburgerBtn = document.querySelector(".nav__hamburger");
  const hamburgerIcon = hamburgerBtn.querySelector("i");
  const navList = document.querySelector(".nav__list");
  const scrollTopBtn = document.querySelector(".scroll-top");
  const THEME_KEY = "portfolio-theme";

  // 1) Initialize theme from localStorage (default to light)
  let savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme !== "dark" && savedTheme !== "light") {
    savedTheme = "light";
    localStorage.setItem(THEME_KEY, savedTheme);
  }
  body.classList.add(savedTheme);
  if (savedTheme === "dark") {
    themeIcon.classList.replace("fa-moon", "fa-sun");
  }

  // 2) Theme toggle handler
  btnTheme.addEventListener("click", () => {
    if (body.classList.contains("dark")) {
      body.classList.replace("dark", "light");
      themeIcon.classList.replace("fa-sun", "fa-moon");
      localStorage.setItem(THEME_KEY, "light");
    } else {
      body.classList.replace("light", "dark");
      themeIcon.classList.replace("fa-moon", "fa-sun");
      localStorage.setItem(THEME_KEY, "dark");
    }
  });

  // 3) Hamburger menu toggle (bars ↔ xmark)
  hamburgerBtn.addEventListener("click", () => {
    if (hamburgerIcon.classList.contains("fa-bars")) {
      hamburgerIcon.classList.replace("fa-bars", "fa-xmark");
    } else {
      hamburgerIcon.classList.replace("fa-xmark", "fa-bars");
    }
    navList.classList.toggle("display-nav-list");
  });

  // 4) Scroll-to-top button visibility
  window.addEventListener("scroll", () => {
    scrollTopBtn.style.display = window.scrollY > 500 ? "block" : "none";
  });
});
