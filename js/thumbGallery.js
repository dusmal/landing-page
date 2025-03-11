export const initThumbGallery = () => {
  const thumbs = document.querySelectorAll(".media-gallery__thumb");

  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      thumbs.forEach((t) => t.classList.remove("thumb--active"));
      thumb.classList.add("thumb--active");
    });
  });
};
