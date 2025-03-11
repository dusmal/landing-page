import { getElements } from "./selectors.js";

const KEYS = {
  ENTER: "Enter",
  ESCAPE: "Escape",
  ARROW_UP: "ArrowUp",
  ARROW_DOWN: "ArrowDown",
  TAB: "Tab",
  SPACE: "Space",
};

const { educationSelect, optionsList, options } = getElements();

let isOpen = false;

function setListAttributes(expanded) {
  optionsList.classList.toggle("active", expanded);
  educationSelect.setAttribute("aria-expanded", expanded);
  optionsList.setAttribute("aria-hidden", !expanded);
}

function setOptionsTabIndex(tabValue) {
  options.forEach((option) => option.setAttribute("tabindex", tabValue));
}

function updateListState(expanded) {
  if (!expanded) {
    options.forEach((option) => option.blur());
    educationSelect.focus();
  }

  isOpen = expanded;
  setListAttributes(expanded);
  setOptionsTabIndex(expanded ? 0 : -1);

  if (expanded) {
    options[0].focus();
  } else {
    educationSelect.focus();
  }
}

function getNavigationIndex(currentIndex, direction) {
  if (direction === KEYS.ARROW_DOWN) {
    return (currentIndex + 1) % options.length;
  }

  return currentIndex === 0 ? options.length - 1 : (currentIndex - 1) % options.length;
}

function navigateOptions(event) {
  event.preventDefault();
  let focusedIndex;

  if (document.activeElement === educationSelect) {
    focusedIndex = event.key === KEYS.ARROW_DOWN ? -1 : options.length - 1;
  } else {
    focusedIndex = Array.from(options).indexOf(document.activeElement);
  }

  const newIndex = getNavigationIndex(focusedIndex, event.key);
  options[newIndex].focus();
}

function updateSelectedOption(option) {
  educationSelect.textContent = option.textContent;
  educationSelect.value = option.dataset.value;
  Array.from(options).forEach((opt) => opt.setAttribute("aria-selected", opt === option));
}

function selectOption(option) {
  updateSelectedOption(option);
  updateListState(!isOpen);
}

function handleSelectionKeys(event, option) {
  event.preventDefault();
  educationSelect.classList.add("form__select--focused");

  if (option) {
    selectOption(option);
  } else {
    updateListState(!isOpen);
  }
}

function handleArrowKeys(event) {
  if (isOpen) {
    navigateOptions(event);
  }
}

function handleKeyNavigation(event, option) {
  const keyActions = {
    [KEYS.ENTER]: () => handleSelectionKeys(event, option),
    [KEYS.SPACE]: () => handleSelectionKeys(event, option),
    [KEYS.ARROW_DOWN]: () => handleArrowKeys(event),
    [KEYS.ARROW_UP]: () => handleArrowKeys(event),
    [KEYS.ESCAPE]: () => {
      educationSelect.classList.remove("form__select--focused");
      if (isOpen) {
        updateListState(false);
      }
    },
    [KEYS.TAB]: () => {
      if (!isOpen) {
        educationSelect.classList.remove("form__select--focused");
      }
    },
  };

  const action = keyActions[event.key];

  if (action) {
    action();
  }
}

export function initCustomSelect() {
  educationSelect.addEventListener("click", () => {
    educationSelect.classList.add("form__select--focused");
    updateListState(!isOpen);
  });

  educationSelect.addEventListener("keydown", (event) => handleKeyNavigation(event));

  document.addEventListener("click", (event) => {
    if (event.target !== educationSelect) {
      if (isOpen) {
        updateListState(false);
      }

      educationSelect.classList.remove("form__select--focused");
      educationSelect.blur();
    }
    event.target.focus();
  });

  Array.from(options).forEach((option) => {
    option.addEventListener("click", () => selectOption(option));
    option.addEventListener("keydown", (event) => handleKeyNavigation(event, option));
  });
}
