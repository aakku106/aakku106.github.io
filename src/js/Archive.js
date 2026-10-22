function initOthersMenu() {
  const showButton = document.getElementById("Others");
  const othersSection = document.getElementById("OthersSectionActive");
  const vaultLink = document.getElementById("ValutSectionShow");
  const closeButton = document.getElementById("CrossBtnVault");

  // The desktop nav is injected by NavBarLanding.js / NavBarPages.js.
  if (!showButton || !othersSection || !vaultLink || !closeButton) {
    return;
  }

  othersSection.style.display = "none";

  showButton.addEventListener("click", (event) => {
    event.stopPropagation();
    othersSection.style.display =
      othersSection.style.display === "block" ? "none" : "block";
  });

  vaultLink.addEventListener("click", () => {
    window.location.href = "https://archive.adarashagaihre.com.np";
  });

  closeButton.addEventListener("click", (event) => {
    event.stopPropagation();
    othersSection.style.display = "none";
  });

  document.addEventListener("click", (event) => {
    if (othersSection.style.display !== "block") {
      return;
    }

    if (
      !othersSection.contains(event.target) &&
      !showButton.contains(event.target)
    ) {
      othersSection.style.display = "none";
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initOthersMenu);
} else {
  initOthersMenu();
}
