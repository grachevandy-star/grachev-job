const videoCard = document.querySelector(".video-card");
const videoModal = document.querySelector("#videoModal");
const popupVideo = document.querySelector("#popupVideo");
const closeButtons = document.querySelectorAll("[data-close-video]");

function openVideo() {
  if (!videoModal) return;
  videoModal.classList.add("is-open");
  videoModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  if (popupVideo) {
    popupVideo.currentTime = 0;
    popupVideo.play().catch(() => {});
  }
}

function closeVideo() {
  if (!videoModal) return;
  videoModal.classList.remove("is-open");
  videoModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (popupVideo) {
    popupVideo.pause();
  }
}

videoCard?.addEventListener("click", openVideo);
closeButtons.forEach((button) => button.addEventListener("click", closeVideo));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeVideo();
});
