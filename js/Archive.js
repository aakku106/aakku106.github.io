/** @format */

setTimeout(() => {
  const showButton = document.getElementById("Others");
  const vaultDiv = document.getElementById("ValutSectionShow");
  const CrossBtnVault = document.getElementById("CrossBtnVault");

  CrossBtnVault.style.display = "none";
  vaultDiv.style.display = "none";

  showButton.addEventListener("click", () => {
    vaultDiv.style.display = "block";
    CrossBtnVault.style.display = "block";
    CrossBtnVault.innerHTML = "X";
  });

  vaultDiv.addEventListener("click", () => {
    window.location.href = "https://archive.adarashagaihre.com.np";
  });

  CrossBtnVault.addEventListener("click", () => {
    CrossBtnVault.innerHTML = "";
    vaultDiv.style.display = "none";
    CrossBtnVault.style.display = "none";
  });
}, 0);
