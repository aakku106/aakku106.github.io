/** @format */

const showButton = document.getElementById("Others");
const vaultDiv = document.getElementById("output");
const draggableWindow = document.getElementById("draggableWindow");

showButton.addEventListener("click", function () {
  vaultDiv.style.display = "block"; // Make the div visible
});

vaultDiv.addEventListener("click", function () {
  window.location.href = "https://archive.adarashagaihre.com.np";
});

draggableWindow.addEventListener("click", function () {
  vaultDiv.style.display = "block";
});
