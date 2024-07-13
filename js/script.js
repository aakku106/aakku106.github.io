document.getElementById("hamburger").addEventListener("click", function () {
  document.querySelector(".mobile .lower").classList.toggle("show");
});
document.getElementById("close").addEventListener("click", function () {
  document.querySelector(".mobile .lower").classList.remove("show");
});
