// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const offset = 80 // Account for fixed nav height
      const targetPosition = target.offsetTop - offset
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  })
})

// Theme toggle functionality
const themeToggle = document.getElementById("theme-toggle")
const sunIcon = document.querySelector(".sun-icon")
const moonIcon = document.querySelector(".moon-icon")

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem("theme") || "light"
if (currentTheme === "dark") {
  document.body.classList.add("dark-mode")
  sunIcon.classList.add("hidden")
  moonIcon.classList.remove("hidden")
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode")

  // Toggle icons
  sunIcon.classList.toggle("hidden")
  moonIcon.classList.toggle("hidden")

  // Save preference
  const theme = document.body.classList.contains("dark-mode") ? "dark" : "light"
  localStorage.setItem("theme", theme)
})

// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear()

// Add scroll effect to navigation
let lastScroll = 0
const nav = document.querySelector(".nav")

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 100) {
    nav.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
  } else {
    nav.style.boxShadow = "none"
  }

  lastScroll = currentScroll
})
