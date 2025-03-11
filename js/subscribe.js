import { getElements } from "./selectors";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function handleAnimation() {
  const { form, title } = getElements();
  title.classList.add("subscribe__title--fade");
  form.style.display = "none";

  const images = [...document.querySelectorAll(".decorative-img")];

  images.forEach((element) => {
    element.classList.add("moveToCenter");
  });

  await sleep(500);

  title.innerHTML = "Thank you for subscribing!";
  title.classList.remove("subscribe__title--fade");

  images.forEach((element) => {
    element.classList.remove("moveToCenter");
    element.classList.add("moveBack");
  });

  await sleep(900);

  form.style.display = "block";

  images.forEach((element) => {
    element.classList.remove("moveBack");
  });

  title.classList.add("subscribe__title--fade");

  await sleep(300);

  title.innerHTML = `<span class="subscribe__animate-text">Subscribe</span> For More Info
        and Updates from Hounter`;
  title.classList.remove("subscribe__title--fade");
}

export function handleSubscribe() {
  const { form } = getElements();
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    handleAnimation();
  });
}
