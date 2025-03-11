import { toggleDropdown } from "./dropdown.js";
import { initializeScrollHouseList } from "./slider.js";
import { filterHouseList } from "./filterHouses.js";
import { handleSubscribe } from "./subscribe.js";
import { initEmailValidation } from "./emailValidation.js";
import { initCharacterLimitCount } from "./characterLimit.js";
import { initCustomSelect } from "./customSelect.js";
import { initVideoPlayer } from "./videoPlayer.js";
import { initThumbGallery } from "./thumbGallery.js";
import { handlePropertyLinks } from "./handleLinks";

document.addEventListener("DOMContentLoaded", () => {
  toggleDropdown();
  initializeScrollHouseList();
  filterHouseList();
  handleSubscribe();
  initEmailValidation();
  initCharacterLimitCount();
  initCustomSelect();
  initVideoPlayer();
  initThumbGallery();
  handlePropertyLinks();
});
