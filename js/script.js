/** @format */

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

document.getElementById("remember-me").addEventListener("click", () => {
  let user = prompt("Enter your Name so that we can remember you ");
  localStorage.setItem("welcomeUser", user);
  let welcomeMessage = document.getElementById("WelcomeBack");
  welcomeMessage.innerHTML = `Welcome Back, ${user}`;
  welcomeMessage.style.color = "Green";

});
