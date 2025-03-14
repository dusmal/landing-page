export const getElements = () => ({
  houseList: document.querySelector(".featured-house__list"),
  houseItem: document.querySelector(".featured-house__item"),
  nextBtn: document.getElementById("next-btn"),
  prevBtn: document.getElementById("prev-btn"),
  houseBtn: document.getElementById("house-filter-btn"),
  villaBtn: document.getElementById("villa-filter-btn"),
  apartmentBtn: document.getElementById("apartment-filter-btn"),
  propertyItems: document.querySelectorAll(".featured-house__item"),
  form: document.querySelector(".subscribe__form"),
  title: document.querySelector(".subscribe__title"),
  emailInput: document.querySelector("#email"),
  emailForm: document.querySelector(".subscribe__form"),
  border: document.querySelector(".border"),
  errorElement: document.getElementById("emailError"),
  messageTextArea: document.getElementById("message"),
  charLimitSpan: document.getElementById("char-limit"),
  educationSelect: document.querySelector("#education-select"),
  optionsList: document.querySelector("#education-listbox"),
  options: document.querySelectorAll(`#education-listbox li`),
  videoContainer: document.querySelector(".video-container"),
  video: document.querySelector(".media-gallery__video"),
  playButton: document.querySelector(".button--play"),
  pauseButton: document.querySelector(".button--pause"),
  propertyLinks: document.querySelectorAll(".footer__link, .dropdown__link"),
  dropdownLinks: document.querySelectorAll(".dropdown__link"),
  toggleButton: document.getElementById("dropdown-btn"),
  dropdownMenu: document.querySelector(".dropdown__menu"),
  dropdownIconDown: document.querySelector("#dropdown__icon-down"),
  dropdownIconUp: document.querySelector("#dropdown__icon-up"),
});
