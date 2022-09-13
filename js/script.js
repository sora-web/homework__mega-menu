// //burger
// $(".p-header__burger").on("click", function () {
//   $("body").toggleClass("is__fixed");
//   $(".p-header__burger").toggleClass("is__active");
//   $(".p-burger-view").toggleClass("is__open");
// });

// //sticky header
// $(function () {
//   // ページ下部固定ボタン表示非表示
//   $(window).on("load scroll", function () {
//     $header = $(".p-header");
//     btnOffset = $(".l-cont--contact").offset().top;
//     x = $(".p-header").height();
//     fixedClass = "p-header--fixed";
//   });
//   $(function () {
//     $(window).scroll(function () {
//       if ($(this).scrollTop() > btnOffset - x) {
//         $header.addClass(fixedClass);
//       } else {
//         $header.removeClass(fixedClass);
//       }
//     });
//   });
// });
