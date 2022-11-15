const toggleBtn = document.querySelector("#hamburger-toggle-btn");

const navMenu = document.querySelector("#hamburger-menu");

toggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show-hamburger");
  console.log("click");

  if (hamburgerImg.classList.contains("hamburger")) {
    hamburgerImg.src = "img/Icon - Cancel.png";
    hamburgerImg.classList.remove("hamburger");
  } else {
    hamburgerImg.src = "img/icons/hamburger.png";
    hamburgerImg.classList.add("hamburger");
  }
});
