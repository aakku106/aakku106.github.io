/** @format */

document.addEventListener("DOMContentLoaded", function () {
  // Create the main nav element
  const nav = document.createElement("nav");
  nav.className = "desktop";

  // Create the main ul
  const mainUl = document.createElement("ul");

  // Create logo holder li
  const logoLi = document.createElement("li");
  logoLi.className = "logoholder";

  const logoLink = document.createElement("a");
  logoLink.href = "../../index.html";

  const logoImg = document.createElement("img");
  logoImg.src = "../../pictures/desktop/navbar/logo/Ag.svg";
  logoImg.alt = "Adarasha Gaihre Logo";

  logoLink.appendChild(logoImg);
  logoLi.appendChild(logoLink);

  // Create content div
  const contentDiv = document.createElement("div");
  contentDiv.className = "content";

  // Create About li
  const aboutLi = document.createElement("li");
  aboutLi.className = "navlist";

  const aboutLink = document.createElement("a");
  aboutLink.className = "aboutMe navlist";
  aboutLink.href = "../about/index.html";
  aboutLink.textContent = "About";

  aboutLi.appendChild(aboutLink);

  // Create Portfolio li
  const portfolioLi = document.createElement("li");
  portfolioLi.className = "navlist";

  const portfolioLink = document.createElement("a");
  portfolioLink.className = "portfolio navlist";
  portfolioLink.href = "../portfolio/index.html";
  portfolioLink.textContent = "Portfolio";

  portfolioLi.appendChild(portfolioLink);

  // Create Contact li
  const contactLi = document.createElement("li");
  contactLi.className = "navlist";

  const contactLink = document.createElement("a");
  contactLink.className = "contactMe navlist";
  contactLink.href = "../contact/index.html";
  contactLink.textContent = "Contact";

  contactLi.appendChild(contactLink);

  // Append nav items to content div
  contentDiv.appendChild(aboutLi);
  contentDiv.appendChild(portfolioLi);
  contentDiv.appendChild(contactLi);

  // Create social div
  const socialDiv = document.createElement("div");
  socialDiv.className = "social";

  // Create LinkedIn li
  const linkedinLi = document.createElement("li");

  const linkedinLink = document.createElement("a");
  linkedinLink.target = "_blank";
  linkedinLink.href = "https://www.linkedin.com/in/adarashaagaihre106/";

  const linkedinImg = document.createElement("img");
  linkedinImg.className = "linkedin";
  linkedinImg.src = "../../pictures/desktop/navbar/social/linkedin.svg";
  linkedinImg.alt =
    "custom made linkedin logo by Adarasha Gaihre for desktop view";

  linkedinLink.appendChild(linkedinImg);
  linkedinLi.appendChild(linkedinLink);

  // Create GitHub li
  const githubLi = document.createElement("li");

  const githubLink = document.createElement("a");
  githubLink.target = "_blank";
  githubLink.href = "https://github.com/aakku106";

  const githubImg = document.createElement("img");
  githubImg.className = "github";
  githubImg.src = "../../pictures/desktop/navbar/social/github.svg";
  githubImg.alt =
    "Custom made  github logo by Adarasha Gaihre for desktop view";

  githubLink.appendChild(githubImg);
  githubLi.appendChild(githubLink);

  // Create Others li
  const othersLi = document.createElement("li");

  const othersSpan = document.createElement("span");

  const othersImg = document.createElement("img");
  othersImg.className = "Others";
  othersImg.id = "Others";
  othersImg.src = "../../pictures/desktop/navbar/social/plus.svg";
  othersImg.alt =
    "Custom Other social links logo by Adarasha Gaihre for desktop view";

  othersSpan.appendChild(othersImg);

  // Create Others section ul
  const othersSectionUl = document.createElement("ul");
  othersSectionUl.id = "OthersSectionActive";

  const vaultLi = document.createElement("li");
  vaultLi.id = "ValutSectionShow";
  vaultLi.textContent = "The Vault";

  const crossBtnLi = document.createElement("li");
  crossBtnLi.id = "CrossBtnVault";

  othersSectionUl.appendChild(vaultLi);
  othersSectionUl.appendChild(crossBtnLi);

  othersLi.appendChild(othersSpan);
  othersLi.appendChild(othersSectionUl);

  // Append social items to social div
  socialDiv.appendChild(linkedinLi);
  socialDiv.appendChild(githubLi);
  socialDiv.appendChild(othersLi);

  // Append all main elements to main ul
  mainUl.appendChild(logoLi);
  mainUl.appendChild(contentDiv);
  mainUl.appendChild(socialDiv);

  // Append ul to nav
  nav.appendChild(mainUl);

  // Append the nav to the header automatically
  const header = document.getElementById("header");
  if (header) {
    header.appendChild(nav);
  }
});
