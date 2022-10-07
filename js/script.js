//読み込み時transitionの挙動をストップ
window.onload = function () {
  const preload = document.getElementsByClassName("preload");
  preload[0].classList.remove("preload");
};
//ハンバーガーメニュー
$(".c-burger").on("click", function () {
  $("body").toggleClass("is__fixed");
  $(".c-burger").toggleClass("is__active");
  $(".c-burger-view").toggleClass("is__open");
});

//contentsにマウスを移動したとき、矢印を固定する記述

const contents = document.querySelectorAll(".p-header-contents");
const arrows = document.querySelectorAll(".p-header__item--arrow a");

for (let i = 0; i < contents.length; i++) {
  contents[i].addEventListener("mouseover", () => {
    arrows[i].classList.add("is__hover");
  });
  contents[i].addEventListener("mouseleave", () => {
    arrows[i].classList.remove("is__hover");
  });
}
