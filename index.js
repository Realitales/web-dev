const navbarbtn = document.querySelector(".navbar-hamburger-btn");
const navbar_container = document.querySelector(".navbar-container");

navbarbtn.addEventListener("click", () => {
  navbarbtn.classList.toggle("active-state");
  navbar_container.classList.toggle("shown");
});

//comments
