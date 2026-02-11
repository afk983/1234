// This file contains JavaScript code to add interactivity to the love page for Ánh.

document.addEventListener("DOMContentLoaded", function () {
  const messageElement = document.getElementById("love-message");
  const loveMessages = [
    "Ánh, you light up my life!",
    "Every moment with you is a treasure.",
    "Your smile is my favorite sight.",
    "With you, every day is a beautiful day.",
    "I love you more than words can express.",
  ];

  let index = 0;

  function displayMessage() {
    messageElement.textContent = loveMessages[index];
    index = (index + 1) % loveMessages.length;
  }

  setInterval(displayMessage, 3000); // Change message every 3 seconds

  // Background Music Control
  const bgMusic = document.getElementById("bgMusic");
  const toggleBtn = document.getElementById("toggleMusic");
  const volumeControl = document.getElementById("volumeControl");

  // Check if music was previously playing (localStorage)
  const wasMusicPlaying = localStorage.getItem("musicPlaying") !== "false";

  // Auto-play music with low volume
  bgMusic.volume = 0.3;
  volumeControl.value = 30;

  if (wasMusicPlaying) {
    bgMusic.play().catch(() => {
      console.log("Auto-play prevented by browser");
    });
    toggleBtn.classList.remove("off");
  }

  // Toggle music on/off
  toggleBtn.addEventListener("click", function () {
    if (bgMusic.paused) {
      bgMusic.play();
      toggleBtn.textContent = "🎵 Music: ON";
      toggleBtn.classList.remove("off");
      localStorage.setItem("musicPlaying", "true");
    } else {
      bgMusic.pause();
      toggleBtn.textContent = "🔇 Music: OFF";
      toggleBtn.classList.add("off");
      localStorage.setItem("musicPlaying", "false");
    }
  });

  // Volume control
  volumeControl.addEventListener("input", function () {
    bgMusic.volume = this.value / 100;
  });
});
