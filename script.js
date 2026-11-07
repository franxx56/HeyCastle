function openGift() {
    document.getElementById("gift-screen").classList.add("hidden");
    document.getElementById("welcome-popup").classList.remove("hidden");
}

function closePopup() {
    document.getElementById("welcome-popup").classList.add("hidden");
    document.getElementById("main-content").classList.remove("hidden");
}
