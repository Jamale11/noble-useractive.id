const autoText = document.getElementById("autoText");
const profileCard = document.getElementById("profileCard");

const messages = [
  "🧠 Initializing ORO Agent...",
  "🔒 Encrypting personal vault...",
  "💾 Secure compute environment ready.",
  "🚀 Decentralized AI economy activated!"
];
let index = 0;

function typeMessage() {
  if (index < messages.length) {
    autoText.textContent = messages[index];
    index++;
    setTimeout(typeMessage, 1800);
  } else {
    autoText.textContent = "✅ ORO Agent is online. Identity verified.";
    showProfileCard();
  }
}

function showProfileCard() {
  profileCard.classList.remove("hidden");
  profileCard.style.display = "block";
}

function startDemo() {
  profileCard.classList.add("hidden");
  profileCard.style.display = "none";
  index = 0;
  typeMessage();
}
