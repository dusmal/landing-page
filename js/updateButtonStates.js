import { getElements } from "./selectors";

export const updateButtonStates = () => {
  const { houseList, nextBtn, prevBtn } = getElements();
  prevBtn.disabled = houseList.scrollLeft <= 0;
  nextBtn.disabled = houseList.scrollLeft + houseList.clientWidth >= houseList.scrollWidth;
};
