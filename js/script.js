$(".p-header__burger").on("click", function () {
  $("body").toggleClass("is__fixed");
  $(".p-header__burger").toggleClass("is__active");
  $(".p-header__burger-view").toggleClass("is__open");
});

$("a.jquery-disabled").click(function () {
  return false;
});

//sticky header
$(function () {
  // ページ下部固定ボタン表示非表示
  $(window).on("load scroll", function () {
    $header = $(".p-header");
    btnOffset = $(".l-cont--contact").offset().top;
    x = $(".p-header__logo").height();
    fixedClass = "p-header--fixed";
  });
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > btnOffset - x) {
        $header.addClass(fixedClass);
      } else {
        $header.removeClass(fixedClass);
      }
    });
  });
});

// swiper
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  slidesPerView: "auto",
  centeredSlides: false,
  loop: true,
  watchSlidesVisibility: true,
  speed: 1000,
  slidesPerView: 1.3,
  spaceBetween: 20,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    640: {
      autoplay: false,
      slidesPerView: 2,
      spaceBetween: 50,
    },
    960: {
      autoplay: false,
      slidesPerView: 2.3,
      spaceBetween: 50,
    },
  },

  pagination: {
    el: ".js_swiper_pagination",
  },
  navigation: {
    nextEl: ".js_swiper_next",
    prevEl: ".js_swiper-prev",
  },
});

gsap.to(".p-round-unit", {
  rotate: true, //自動回転
  repeat: -1, //無限に繰り返す
  ease: "linear",
  duration: 5, //アニメーションに5秒かける
});

function randomValues() {
  anime({
    targets: ".p-mv-round",
    translateX: function () {
      return anime.random(-400, 400);
    },
    translateY: function () {
      return anime.random(-400, 400);
    },
    easing: "easeInOutQuad",
    duration: 20000,
    complete: randomValues,

    // breakpoints: {
    //   640: {
    //     translateX: function () {
    //       return anime.random(0, 800);
    //     },
    //     translateY: function () {
    //       return anime.random(0, 400);
    //     },
    //   },
    //   960: {
    //     autoplay: false,
    //     slidesPerView: 2.3,
    //     spaceBetween: 50,
    //   },
    // },
  });
}

randomValues();

// function randomValues2() {
//   anime({
//     targets: ".p-mv-round2",
//     translateX: function () {
//       return anime.random(0, 300);
//     },
//     translateY: function () {
//       return anime.random(0, 300);
//     },
//     width: "80%",
//     easing: "easeInOutQuad",
//     duration: 10000,
//     complete: randomValues,
//   });
// }

// randomValues2();
