const toggleBtn = document.querySelector("#hamburger-toggle-btn");

const navMenu = document.querySelector("#hamburger-menu");

toggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show-hamburger");
  console.log("click");
});
