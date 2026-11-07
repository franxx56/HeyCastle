function openGift() {
    const giftScreen = document.getElementById("gift-screen");
    const popup = document.getElementById("welcome-popup");
    const popupCard = popup.querySelector(".popup-card");

    giftScreen.classList.add("hidden");
    popup.classList.remove("hidden");

    // Restart the popup animation
    popupCard.style.animation = "none";
    void popupCard.offsetWidth;
    popupCard.style.animation = "";
}

function closePopup() {
    document.getElementById("welcome-popup").classList.add("hidden");
    document.getElementById("main-content").classList.remove("hidden");
}
