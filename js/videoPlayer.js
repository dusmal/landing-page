import { getElements } from "./selectors.js";

export const initVideoPlayer = () => {
  const { videoContainer, video, playButton, pauseButton } = getElements();

  playButton.addEventListener("click", () => {
    video.play();
    playButton.classList.toggle("sr-only");
    pauseButton.classList.toggle("sr-only");
  });

  pauseButton.addEventListener("click", () => {
    video.pause();
    pauseButton.classList.toggle("sr-only");
    playButton.classList.toggle("sr-only");
  });

  video.addEventListener("ended", () => {
    pauseButton.classList.add("sr-only");
    playButton.classList.remove("sr-only");
  });

  videoContainer.addEventListener("mouseover", () => {
    if (!video.paused) {
      playButton.style.opacity = "1";
      pauseButton.style.opacity = "1";
    }
  });

  videoContainer.addEventListener("mouseout", () => {
    if (!video.paused) {
      playButton.style.opacity = "0";
      pauseButton.style.opacity = "0";
    }
  });
};
