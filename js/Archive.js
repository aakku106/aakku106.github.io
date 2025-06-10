/** @format */

setTimeout(() => {
  const showButton = document.getElementById("Others");
  const OthersSectionActive = document.getElementById("OthersSectionActive");
  const vaultDiv = document.getElementById("ValutSectionShow");
  const CrossBtnVault = document.getElementById("CrossBtnVault");

  OthersSectionActive.style.display = "none";
  CrossBtnVault.style.display = "none";
  vaultDiv.style.display = "none";

  showButton.addEventListener("click", () => {
    OthersSectionActive.style.display = "block";
    vaultDiv.style.display = "block";
    CrossBtnVault.style.display = "block";
  });

  vaultDiv.addEventListener("click", () => {
    window.location.href = "https://archive.adarashagaihre.com.np";
  });

  CrossBtnVault.addEventListener("click", () => {
    CrossBtnVault.style.display = "none";
    vaultDiv.style.display = "none";
    OthersSectionActive.style.display = "none";
  });
}, 500);
