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

  // SECURITY FIX: Validate and sanitize before storing
  if (!validateUserName(user)) {
    alert(
      "Invalid name! Please use only letters, numbers, spaces, and basic punctuation (max 50 characters)."
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
