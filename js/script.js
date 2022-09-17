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
  offset: 200,
  delay: 400,
  duration: 1500,
  easing: "ease-in",
});
