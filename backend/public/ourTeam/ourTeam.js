const navbar = document.querySelector(".navbar");
const navItem = document.querySelectorAll(".nav-item");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "#002E5F";
    navItem.forEach((e) => {
      e.firstElementChild.style.color = "white";
    });
  } else {
    navbar.style.backgroundColor = "transparent";
    navItem.forEach((e) => {
      e.firstElementChild.style.color = "black";
    });
  }
});