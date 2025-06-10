/** @format */

const showButton = document.getElementById("Others");
const vaultDiv = document.getElementById("ValutSectionShow");
const draggableWindow = document.getElementById("draggableWindow");

showButton.addEventListener("click", () => {
  vaultDiv.style.display = "block";
});

vaultDiv.addEventListener("click", () => {
  window.location.href = "https://archive.adarashagaihre.com.np";
});

draggableWindow.addEventListener("click", () => {
  vaultDiv.style.display = "block";
});
