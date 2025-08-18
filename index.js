const talkBtn = document.querySelector(".talk");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");

talkBtn.addEventListener("click", () => {
  overlay.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});

// Optional: Close when clicking outside content
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.style.display = "none";
  }
});


const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

themeToggle.addEventListener("click", () => {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
  }
});

const cookiesWrapper = document.getElementById("cookiesWrapper");
const cookiesBox = document.getElementById("cookies");
const acceptBtn = document.getElementById("acceptCookies");

// Show only if not accepted
if (!localStorage.getItem("cookiesAccepted")) {
  setTimeout(() => {
    cookiesBox.classList.add("show");
  }, 500);
} else {
  cookiesWrapper.style.display = "none";
}

acceptBtn.addEventListener("click", () => {
  localStorage.setItem("cookiesAccepted", "true");
  cookiesWrapper.style.display = "none"; // Hide completely
});


