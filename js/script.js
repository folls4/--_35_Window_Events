const widthOutput = document.querySelector("#window-width");
const scrollOutput = document.querySelector("#scroll-y");
const focusStatus = document.querySelector("#focus-status");
const nameButton = document.querySelector("#name-button");
const greeting = document.querySelector("#greeting");
function updateWindowWidth() {
  widthOutput.textContent = window.innerWidth;
}
function updateScrollPosition() {
  scrollOutput.textContent = Math.round(window.scrollY);
}
function setFocusStatus(isActive) {
  focusStatus.textContent = isActive ? "Активно" : "Неактивно";
  focusStatus.classList.toggle("inactive", !isActive);
}
updateWindowWidth();
updateScrollPosition();
window.addEventListener("resize", updateWindowWidth);
window.addEventListener("scroll", updateScrollPosition, { passive: true });
window.addEventListener("focus", () => setFocusStatus(true));
window.addEventListener("blur", () => setFocusStatus(false));
nameButton.addEventListener("click", () => {
  const answer = window.prompt("Как вас зовут?");
  if (answer === null) return;
  const name = answer.trim();
  if (name === "") return;
  greeting.textContent = `Привет, ${name}!`;
});