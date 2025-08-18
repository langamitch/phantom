// --- Overlay ---
const talkBtn = document.querySelector(".talk");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");

const mainContent = document.getElementById("overlayMain");
const forms = {
  work: document.getElementById("form-work"),
  say: document.getElementById("form-say"),
  join: document.getElementById("form-join")
};

talkBtn.addEventListener("click", () => {
  overlay.style.display = "flex";
  mainContent.style.display = "block";
  Object.values(forms).forEach(f => f.style.display = "none");
});

closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) overlay.style.display = "none";
});

// Handle card clicks
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    mainContent.style.display = "none";
    const formId = card.dataset.form;
    forms[formId].style.display = "block";
  });
});

// Handle back button
document.querySelectorAll("[data-back]").forEach(btn => {
  btn.addEventListener("click", () => {
    Object.values(forms).forEach(f => f.style.display = "none");
    mainContent.style.display = "block";
  });
});

// --- Firebase ---
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Save form data
async function saveForm(formId, data) {
  try {
    await addDoc(collection(db, formId), data);
    alert("Form submitted successfully!");
  } catch (err) {
    console.error("Error adding document: ", err);
    alert("Error saving data");
  }
}

// Handle form submissions
document.getElementById("workForm").addEventListener("submit", e => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  saveForm("workRequests", data);
  e.target.reset();
});

document.getElementById("sayForm").addEventListener("submit", e => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  saveForm("messages", data);
  e.target.reset();
});

document.getElementById("joinForm").addEventListener("submit", e => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  saveForm("applications", data);
  e.target.reset();
});
