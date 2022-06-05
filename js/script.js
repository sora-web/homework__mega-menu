$(".p-header__burger").on("click", function () {
  $("body").toggleClass("is__fixed");
  $(".p-header__burger").toggleClass("is__active");
  $(".p-header__burger-view").toggleClass("is__open");
});

$("a.jquery-disabled").click(function () {
  return false;
});
