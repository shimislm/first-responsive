// המבורגר
const bar = document.getElementById("bar");
// התפריט הרגיל
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

// אם המבורגר הופיע
if (bar) {
  // תחכה עד שיהיה קליק עליו
  bar.addEventListener("click", () => {
    // אחרי שלחצת עליו תוסיף לנאב בר אקטיב
    nav.classList.add("active");
  });
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
