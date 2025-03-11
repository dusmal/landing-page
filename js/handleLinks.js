import { getElements } from "./selectors";

const getButtonByPropertyType = (propertyType) => {
  const { houseBtn, villaBtn, apartmentBtn } = getElements();

  switch (propertyType) {
    case "house":
      return houseBtn;
    case "villa":
      return villaBtn;
    case "apartment":
      return apartmentBtn;
    default:
      return null;
  }
};

export const handlePropertyLinks = () => {
  const { propertyLinks } = getElements();

  propertyLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const propertyType = link.getAttribute("data-property-type");
      const filterButton = getButtonByPropertyType(propertyType);

      if (filterButton && !filterButton.classList.contains("button-property-active")) {
        filterButton.click();
      }
    });
  });
};
