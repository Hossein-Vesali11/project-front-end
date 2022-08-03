const navbar__link = document.querySelector(".sub__menu .navbar__link");
const toggle = document.querySelector(".sub__menu .toggle");
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

navbar__link.addEventListener("click", (e) => {
  e.preventDefault();
  toggle.classList.toggle("active");
});
hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
  if (hamburger.classList.contains("fa-bars")) {
    hamburger.classList = "fas fa-times";
  } else {
    hamburger.classList = "fas fa-bars";
  }
});
