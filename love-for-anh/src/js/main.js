// This file contains JavaScript code to add interactivity to the love page for Ánh.

document.addEventListener('DOMContentLoaded', function() {
    const messageElement = document.getElementById('love-message');
    const loveMessages = [
        "Ánh, you light up my life!",
        "Every moment with you is a treasure.",
        "Your smile is my favorite sight.",
        "With you, every day is a beautiful day.",
        "I love you more than words can express."
    ];

    let index = 0;

    function displayMessage() {
        messageElement.textContent = loveMessages[index];
        index = (index + 1) % loveMessages.length;
    }

    setInterval(displayMessage, 3000); // Change message every 3 seconds
});