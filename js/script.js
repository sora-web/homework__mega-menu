const item1 = document.querySelector(".p-header__item1");
const contents1 = document.querySelector(".p-header-contents1");
item1.addEventListener("mouseover", () => {
  contents1.classList.add("is__active");
  contents3.classList.remove("is__active");
  contents4.classList.remove("is__active");
});
contents1.addEventListener("mouseleave", () => {
  contents1.classList.remove("is__active");
});

const item3 = document.querySelector(".p-header__item3");
const contents3 = document.querySelector(".p-header-contents3");
item3.addEventListener("mouseover", () => {
  contents3.classList.add("is__active");
  contents1.classList.remove("is__active");
  contents4.classList.remove("is__active");
});
contents3.addEventListener("mouseleave", () => {
  contents3.classList.remove("is__active");
});

const item4 = document.querySelector(".p-header__item4");
const contents4 = document.querySelector(".p-header-contents4");
item4.addEventListener("mouseover", () => {
  contents4.classList.add("is__active");
  contents1.classList.remove("is__active");
  contents3.classList.remove("is__active");
});
contents4.addEventListener("mouseleave", () => {
  contents4.classList.remove("is__active");
});
