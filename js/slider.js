import { updateButtonStates } from "./updateButtonStates";
import { getElements } from "./selectors";

export const initializeScrollHouseList = () => {
  const { houseList, nextBtn, prevBtn, houseItem } = getElements();
  const defaultCardWidth = 376;

  const gridGapWidth = parseInt(window.getComputedStyle(houseList).gap);

  const cardWidth = houseItem?.getBoundingClientRect()?.width ?? defaultCardWidth;

  const movePx = cardWidth + gridGapWidth;

  updateButtonStates();

  const scrollNext = () => houseList.scrollBy({ left: movePx, behavior: "smooth" });
  const scrollPrev = () => houseList.scrollBy({ left: -movePx, behavior: "smooth" });

  houseList.addEventListener("scroll", () => updateButtonStates());

  window.addEventListener("resize", () => updateButtonStates());

  nextBtn.addEventListener("click", scrollNext);
  prevBtn.addEventListener("click", scrollPrev);
};
