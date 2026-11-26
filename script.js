(function () {
  "use strict";

  var root = document.documentElement;
  var body = document.body;
  var header = document.querySelector("[data-header]");
  var menuButton = document.querySelector(".menu-toggle");
  var navigation = document.querySelector(".site-nav");
  var themeButton = document.querySelector(".theme-toggle");
  var themeColorMeta = document.querySelector('meta[name="theme-color"]');
  var prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  document.querySelectorAll("[data-year]").forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });

  function closeMenu() {
    menuButton.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
    body.classList.remove("menu-open");
  }

  menuButton.addEventListener("click", function () {
    var isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    navigation.classList.toggle("is-open", !isOpen);
    body.classList.toggle("menu-open", !isOpen);
  });

  navigation.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  function activeTheme() {
    if (root.dataset.theme) {
      return root.dataset.theme;
    }
    return prefersDark.matches ? "dark" : "light";
  }

  function updateThemeButton() {
    var theme = activeTheme();
    var nextTheme = theme === "dark" ? "light" : "dark";
    themeButton.setAttribute("aria-label", "Switch to " + nextTheme + " theme");
    themeButton.setAttribute("title", "Switch to " + nextTheme + " theme");
    if (themeColorMeta) {
      themeColorMeta.setAttribute("content", theme === "dark" ? "#141513" : "#f4f0e8");
    }
  }

  try {
    var savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      root.dataset.theme = savedTheme;
    }
  } catch (error) {
    // The site still follows the system theme when storage is unavailable.
  }

  updateThemeButton();

  themeButton.addEventListener("click", function () {
    var nextTheme = activeTheme() === "dark" ? "light" : "dark";
    root.dataset.theme = nextTheme;
    try {
      localStorage.setItem("portfolio-theme", nextTheme);
    } catch (error) {
      // Theme switching still works for the current page session.
    }
    updateThemeButton();
  });

  if (typeof prefersDark.addEventListener === "function") {
    prefersDark.addEventListener("change", updateThemeButton);
  }

  function updateHeader() {
    header.classList.toggle("is-scrolled", window.scrollY > 16);
  }

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  var revealItems = document.querySelectorAll(".reveal");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!("IntersectionObserver" in window) || reduceMotion) {
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -40px"
    });

    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  }
})();
