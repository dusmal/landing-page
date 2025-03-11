import { updateButtonStates } from "./updateButtonStates";
import { getElements } from "./selectors";

export const filterHouseList = () => {
  const { houseBtn, villaBtn, apartmentBtn, propertyItems } = getElements();
  const buttons = [houseBtn, villaBtn, apartmentBtn];

  const toggleFilter = (clickedBtn) => {
    const propertyType = clickedBtn.getAttribute("data-property-type");
    const isActive = clickedBtn.classList.contains("button-property-active");

    buttons.forEach((btn) => btn.classList.remove("button-property-active"));

    propertyItems.forEach((item) => {
      item.style.display = isActive || item.dataset.propertyType === propertyType ? "" : "none";
    });

    if (!isActive) {
      clickedBtn.classList.add("button-property-active");
    }

    updateButtonStates();
  };

  buttons.forEach((button) => button.addEventListener("click", (event) => toggleFilter(event.currentTarget)));
};
