/* ============================
   CONTACT MODAL
============================ */
const modal = document.getElementById("contactModal");
const closeBtn = document.querySelector(".contact__close");

// FOOTER CONTACT TRIGGER
const footerContact = document.getElementById("footerContact");
footerContact.addEventListener("click", () => {
  modal.style.display = "flex";
});

// HERO CONTACT TRIGGER
const heroContact = document.getElementById("heroContact");
heroContact.addEventListener("click", () => {
  modal.style.display = "flex";
});

// CLOSE BUTTON
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// CLICK OUTSIDE CLOSES MODAL
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});


/* ============================
   FLOATING SPARKLES
============================ */
const sparkleContainer = document.querySelector('.sparkle__float');

function createSparkle() {
  const sparkle = document.createElement('span');

  // Random horizontal position
  sparkle.style.left = Math.random() * window.innerWidth + 'px';

  // Start near bottom
  sparkle.style.top = (window.innerHeight - 20) + 'px';

  // Random size
  const size = 4 + Math.random() * 10;
  sparkle.style.width = size + 'px';
  sparkle.style.height = size + 'px';

  // Random animation duration
  sparkle.style.animationDuration = (2 + Math.random() * 3) + 's';

  sparkleContainer.appendChild(sparkle);

  // Remove after animation
  setTimeout(() => sparkle.remove(), 4000);
}

// Create sparkles continuously
setInterval(createSparkle, 250);
