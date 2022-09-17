//burger
$(".p-header__burger").on("click", function () {
  $("body").toggleClass("is__fixed");
  // $(".p-header__burger").toggleClass("is__active");
  $(".p-burger-view").toggleClass("is__open");
});

$(".p-burger-view__close p").on("click", function () {
  $("body").toggleClass("is__fixed");
  // $(".p-header__burger").toggleClass("is__active");
  $(".p-burger-view").toggleClass("is__open");
});

AOS.init({
  offset: 100,
  delay: 100,
  duration: 500,
  easing: "ease-in",
});
