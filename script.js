function openGift() {
    const giftScreen = document.getElementById("gift-screen");
    const popup = document.getElementById("welcome-popup");
    const popupCard = popup.querySelector(".popup-card");

    giftScreen.classList.add("hidden");
    popup.classList.remove("hidden");

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            popupCard.classList.add("show");
        });
    });
}

function closePopup() {
    const popup = document.getElementById("welcome-popup");

    popup.classList.add("hidden");
    popup.querySelector(".popup-card").classList.remove("show");

    document.getElementById("main-content").classList.remove("hidden");
}
