document.addEventListener("DOMContentLoaded", function () {
  const closeBtn = document.querySelector(".mobile #close");
  closeBtn.style.display = "none";

  const overlay = document.querySelector(".overlay");
  overlay.style.display = "none";
});

document.getElementById("hamburger").addEventListener("click", function () {
  const lowerNav = document.querySelector(".mobile .lower");
  lowerNav.classList.add("show");
  lowerNav.classList.remove("hide");

  const closeBtn = document.querySelector(".mobile #close");
  closeBtn.style.display = "block";

  const overlay = document.querySelector(".overlay");
  overlay.style.display = "block";
});

document.getElementById("close").addEventListener("click", function () {
  const lowerNav = document.querySelector(".mobile .lower");
  lowerNav.classList.remove("show");
  lowerNav.classList.add("hide");

  const closeBtn = document.querySelector(".mobile #close");
  closeBtn.style.display = "none";

  const overlay = document.querySelector(".overlay");
  overlay.style.display = "none";
});
