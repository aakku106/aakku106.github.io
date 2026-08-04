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

let welcomeMessage = document.getElementById("WelcomeBack");
let storedUser = localStorage.getItem("welcomeUser");
if (storedUser) {
  // SECURITY FIX: Use textContent instead of innerHTML to prevent XSS attacks
  // Sanitize the stored user name
  const sanitizedUser = sanitizeInput(storedUser);
  welcomeMessage.textContent = `Welcome Back, ${sanitizedUser}`;
  welcomeMessage.style.color = "#8B4513"; // Deep brown/saddle brown - contrasts beautifully with golden/orange
  welcomeMessage.style.fontFamily = '"Amatic SC", sans-serif'; // Same font as about page
}

// Security function to sanitize user input
function sanitizeInput(input) {
  if (!input || typeof input !== "string") {
    return "";
  }

  // Remove any HTML tags, scripts, and dangerous characters
  // Only allow alphanumeric characters, spaces, and basic punctuation
  const sanitized = input
    .trim()
    .substring(0, 50) // Limit length to prevent abuse
    .replace(/[<>\/\\&'"]/g, "") // Remove dangerous characters
    .replace(/\s+/g, " "); // Normalize whitespace

  return sanitized;
}

// Detect if input contains malicious/suspicious patterns
function isSusInput(input) {
  if (!input || typeof input !== "string") {
    return false;
  }

  // Check for common XSS/injection patterns
  const susPatterns = [
    /<script/i,
    /<img/i,
    /onerror/i,
    /onload/i,
    /onclick/i,
    /javascript:/i,
    /fetch\(/i,
    /eval\(/i,
    /document\./i,
    /window\./i,
    /cookie/i,
    /btoa\(/i,
    /atob\(/i,
    /<iframe/i,
    /<object/i,
    /<embed/i,
    /alert\(/i,
    /prompt\(/i,
    /confirm\(/i,
    /\.innerHTML/i,
    /http:\/\//i,
    /https:\/\//i,
    /<svg/i,
    /xss/i,
    /injection/i,
  ];

  // Check if any suspicious pattern matches
  return susPatterns.some((pattern) => pattern.test(input));
}

// Validate input before storing
function validateUserName(input) {
  if (!input || typeof input !== "string") {
    return false;
  }

  const trimmed = input.trim();

  // Check length (minimum 1, maximum 50 characters)
  if (trimmed.length < 1 || trimmed.length > 50) {
    return false;
  }

  // Only allow letters, numbers, spaces, and basic punctuation
  const validPattern = /^[a-zA-Z0-9\s\-_.]+$/;
  return validPattern.test(trimmed);
}

document.getElementById("remember-me").addEventListener("click", () => {
  let user = prompt("Enter your Name so that we can remember you ");

  if (!user) {
    return; // User cancelled or entered nothing
  }

  // 🎭 EASTER EGG: Detect hacker friends trying to be sneaky
  if (isSusInput(user)) {
    // Gather their info to scare them
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;
    const language = navigator.language;
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const screenRes = `${window.screen.width}x${window.screen.height}`;
    const currentTime = new Date().toLocaleString();

    // Try to get their IP and location (using a free API)
    fetch("https://ipapi.co/json/")
      .then((response) => response.json())
      .then((data) => {
        const scaryMessage = `
🚨 REVERSE HACK DETECTED! 🚨

You tried to hack me, but I got YOU! 😂

Your Information:
━━━━━━━━━━━━━━━━━━━━━━
📍 IP Address: ${data.ip || "Hidden"}
🌍 Location: ${data.city || "Unknown"}, ${data.region || ""}, ${
          data.country_name || "Unknown"
        }
🗺️ Coordinates: ${data.latitude || "??"}, ${data.longitude || "??"}
🏢 ISP: ${data.org || "Unknown"}
🌐 Timezone: ${timezone}
⏰ Your Time: ${currentTime}
💻 Device: ${platform}
🖥️ Screen: ${screenRes}
🌏 Language: ${language}
🔍 Browser: ${userAgent.substring(0, 50)}...

You are GAY! 🏳️‍🌈𐐘

Nice try, hacker! But you've been CAUGHT! 😎
        `.trim();

        alert(scaryMessage);
        console.log("🚨 HACKER DETECTED AND TRACKED! 🚨");
        console.log("Full data collected:", data);
        console.log("Input attempted:", user);
      })
      .catch(() => {
        // Fallback if API fails
        const fallbackMessage = `
🚨 REVERSE HACK DETECTED! 🚨

You tried to hack me, but I got YOU! 😂

Your Information:
━━━━━━━━━━━━━━━━━━━━━━
🌐 Timezone: ${timezone}
⏰ Your Time: ${currentTime}
💻 Device: ${platform}
🖥️ Screen: ${screenRes}
🌏 Language: ${language}
🔍 Browser: ${userAgent.substring(0, 50)}...

You are GAY! 🏳️‍🌈𐐘

Nice try, hacker! But you've been CAUGHT! 😎
        `.trim();

        alert(fallbackMessage);
        console.log("🚨 Nice try, hacker! But you've been caught! 😂");
        console.log("Input attempted:", user);
      });

    return;
  }

  // SECURITY FIX: Validate and sanitize before storing
  if (!validateUserName(user)) {
    alert(
      "Invalid name! Please use only letters, numbers, spaces, and basic punctuation (max 50 characters).",
    );
    return;
  }

  const sanitizedUser = sanitizeInput(user);

  if (!sanitizedUser) {
    alert("Invalid name! Please try again.");
    return;
  }

  localStorage.setItem("welcomeUser", sanitizedUser);

  // SECURITY FIX: Use textContent instead of innerHTML to prevent XSS attacks
  welcomeMessage.textContent = `Welcome Back, ${sanitizedUser}`;
  welcomeMessage.style.color = "#8B4513"; // Deep brown/saddle brown - contrasts beautifully with golden/orange
  welcomeMessage.style.fontFamily = '"Amatic SC", sans-serif'; // Same font as about page
});
