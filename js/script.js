//読み込み時transitionの挙動をストップ
window.onload = function () {
  const preload = document.getElementsByClassName("preload");
  preload[0].classList.remove("preload");
};

//
//ハンバーガーメニュー
//
const burger = document.querySelector(".c-burger");
const burgerView = document.querySelector(".c-burger-view");

burger.addEventListener("click", () => {
  burger.classList.toggle("is__active");
  burgerView.classList.toggle("is__open");
});

//
//矢印
//
const contents = document.querySelectorAll(".p-header-contents");
const arrows = document.querySelectorAll(".p-header__item--arrow a");
const inner = document.querySelectorAll(".p-header-contents__inner");

//itemにマウスを移動したとき、矢印を固定する記述
for (let i = 0; i < arrows.length; i++) {
  arrows[i].addEventListener("mouseover", () => {
    contents[i].classList.add("is__visible");
  });
  arrows[i].addEventListener("mouseleave", () => {
    contents[i].classList.remove("is__visible");
  });
}

//contentsにマウスを移動したとき、矢印を固定する記述
for (let i = 0; i < contents.length; i++) {
  contents[i].addEventListener("mouseover", () => {
    arrows[i].classList.add("is__hover");
  });
  contents[i].addEventListener("mouseleave", () => {
    arrows[i].classList.remove("is__hover");
  });
}

//contentsにマウスを移動したとき、innerを固定する記述
for (let i = 0; i < contents.length; i++) {
  inner[i].addEventListener("mouseover", () => {
    inner[i].classList.add("is__stay");
    contents[i].classList.add("is__stay");
  });
  inner[i].addEventListener("mouseleave", () => {
    inner[i].classList.remove("is__stay");
    contents[i].classList.remove("is__stay");
  });
}
