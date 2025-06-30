// script.js

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const themeIcon = document.getElementById("btn-theme");
  const hamburgerBtn = document.querySelector(".nav__hamburger");
  const hamburgerIcon = hamburgerBtn.querySelector("i");
  const navList = document.querySelector(".nav__list");
  const scrollTopBtn = document.querySelector(".scroll-top");

  const THEME_KEY = "portfolio-theme";

  // 1) Initialize theme
  let savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme !== "dark" && savedTheme !== "light") {
    // default
    savedTheme = "light";
    localStorage.setItem(THEME_KEY, "light");
  }
  // apply to body and icon
  body.classList.add(savedTheme);
  if (savedTheme === "dark") {
    themeIcon.classList.replace("fa-moon", "fa-sun");
  } else {
    themeIcon.classList.replace("fa-sun", "fa-moon");
  }

  // 2) Theme toggle handler
  themeIcon.addEventListener("click", () => {
    if (body.classList.contains("dark")) {
      // switch to light
      body.classList.replace("dark", "light");
      themeIcon.classList.replace("fa-sun", "fa-moon");
      localStorage.setItem(THEME_KEY, "light");
    } else {
      // switch to dark
      body.classList.replace("light", "dark");
      themeIcon.classList.replace("fa-moon", "fa-sun");
      localStorage.setItem(THEME_KEY, "dark");
    }
  });

  // 3) Hamburger menu toggle
  hamburgerBtn.addEventListener("click", () => {
    hamburgerIcon.classList.toggle("fa-bars");
    hamburgerIcon.classList.toggle("fa-times");
    navList.classList.toggle("display-nav-list");
  });

  // 4) Scroll-to-top button
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  });
});
