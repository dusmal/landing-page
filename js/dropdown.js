import { getElements } from "./selectors";

const { toggleButton, dropdownIconDown, dropdownIconUp, dropdownMenu, dropdownLinks } = getElements();

const toggleDropdownMenu = () => {
  [dropdownMenu, dropdownIconDown, dropdownIconUp].forEach((element) => element.classList.toggle("inactive"));
};

export const toggleDropdown = () => {
  dropdownLinks.forEach((link) => link.addEventListener("click", toggleDropdownMenu));

  toggleButton.addEventListener("click", toggleDropdownMenu);
};
