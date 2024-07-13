$(document).ready(function () {
  const swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 5.3,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    speed: 500,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      200: {
        slidesPerView: 2,
        spaceBetween: 15,
      },

      768: {
        slidesPerView: 3.3,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 5.3,
      },
    },
  });

  swiper1.on("resize", function (swiper) {
    if (swiper.currentBreakpoint === "200") {
      swiper.autoplay.start();
    } else {
      swiper.autoplay.stop();
    }
  });

  $(".slide").mouseenter(function () {
    const $targetImage = $($(this).find(".slide_img > img"));
    const src = $targetImage.attr("data-pre");

    $targetImage.attr("src", src);
  });
  $(".slide").mouseleave(function () {
    const $targetImage = $($(this).find(".slide_img > img"));
    const src = $targetImage.attr("data-img");

    $targetImage.attr("src", src);
  });

  // $(".slide2").mouseenter(function () {
  //     $('.slide_img2').attr("src", $('.slide_img2').data("pre"))
  // })
  // $(".slide2").mouseleave(function () {
  //     $('.slide_img2').attr("src", $('.slide_img2').data("img"))
  // });

  // $(".slide3").mouseenter(function () {
  //     $('.slide_img3').attr("src", $('.slide_img3').data("pre"))
  // })
  // $(".slide3").mouseleave(function () {
  //     $('.slide_img3').attr("src", $('.slide_img3').data("img"))
  // });

  // $(".slide4").mouseenter(function () {
  //     $('.slide_img4').attr("src", $('.slide_img4').data("pre"))
  // })
  // $(".slide4").mouseleave(function () {
  //     $('.slide_img4').attr("src", $('.slide_img4').data("img"))
  // });

  // $(".slide5").mouseenter(function () {
  //     $('.slide_img5').attr("src", $('.slide_img5').data("pre"))
  // })
  // $(".slide5").mouseleave(function () {
  //     $('.slide_img5').attr("src", $('.slide_img5').data("img"))
  // });

  // $(".slide6").mouseenter(function () {
  //     $('.slide_img6').attr("src", $('.slide_img6').data("pre"))
  // })
  // $(".slide6").mouseleave(function () {
  //     $('.slide_img6').attr("src", $('.slide_img6').data("img"))
  // });

  // $(".slide7").mouseenter(function () {
  //     $('.slide_img7').attr("src", $('.slide_img7').data("pre"))
  // })
  // $(".slide7").mouseleave(function () {
  //     $('.slide_img7').attr("src", $('.slide_img7').data("img"))
  // });

  // swiper1

  const swiper2 = new Swiper(".second", {
    slidesPerView: 3.2,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    speed: 500,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },

    breakpoints: {
      200: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2.2,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 3.2,
      },
    },
  });

  swiper2.on("resize", function (swiper) {
    if (swiper.currentBreakpoint === "200") {
      swiper.autoplay.start();
    } else {
      swiper.autoplay.stop();
    }
  });

  $(".sec03_slide4").mouseenter(function () {
    $(".sec03_slide_img4").attr("src", $(".sec03_slide_img4").data("pre"));
  });
  $(".sec03_slide_img4").mouseleave(function () {
    $(".sec03_slide_img4").attr("src", $(".sec03_slide_img4").data("img"));
  });

  // swiper2

  const swiper3 = new Swiper(".third", {
    slidesPerView: 5.3,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    speed: 500,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-next2",
      prevEl: ".swiper-prev2",
    },

    breakpoints: {
      200: {
        slidesPerView: 2,
        spaceBetween: 15,
      },

      768: {
        slidesPerView: 3.3,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 5.3,
      },
    },
  });

  swiper3.on("resize", function (swiper) {
    if (swiper.currentBreakpoint === "200") {
      swiper.autoplay.start();
    } else {
      swiper.autoplay.stop();
    }
  });

  $(".sec04_slide").mouseenter(function () {
    $(".sec04_slide_img1").attr("src", $(".sec04_slide_img1").data("pre"));
  });
  $(".sec04_slide").mouseleave(function () {
    $(".sec04_slide_img1").attr("src", $(".sec04_slide_img1").data("img"));
  });

  $(".sec04_slide2").mouseenter(function () {
    $(".sec04_slide_img2").attr("src", $(".sec04_slide_img2").data("pre"));
  });
  $(".sec04_slide2").mouseleave(function () {
    $(".sec04_slide_img2").attr("src", $(".sec04_slide_img2").data("img"));
  });

  $(".sec04_slide3").mouseenter(function () {
    $(".sec04_slide_img3").attr("src", $(".sec04_slide_img3").data("pre"));
  });
  $(".sec04_slide3").mouseleave(function () {
    $(".sec04_slide_img3").attr("src", $(".sec04_slide_img3").data("img"));
  });

  $(".sec04_slide5").mouseenter(function () {
    $(".sec04_slide_img5").attr("src", $(".sec04_slide_img5").data("pre"));
  });
  $(".sec04_slide5").mouseleave(function () {
    $(".sec04_slide_img5").attr("src", $(".sec04_slide_img5").data("img"));
  });

  $(".sec04_slide6").mouseenter(function () {
    $(".sec04_slide_img6").attr("src", $(".sec04_slide_img6").data("pre"));
  });
  $(".sec04_slide6").mouseleave(function () {
    $(".sec04_slide_img6").attr("src", $(".sec04_slide_img6").data("img"));
  });

  // swiper3

  const swiper4 = new Swiper(".fourth", {
    slidesPerView: 3.2,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    speed: 500,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-next3",
      prevEl: ".swiper-prev3",
    },

    breakpoints: {
      200: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2.2,
      },
      1280: {
        slidesPerView: 3.2,
      },
    },
  });

  swiper4.on("resize", function (swiper) {
    if (swiper.currentBreakpoint === "200") {
      swiper.autoplay.start();
    } else {
      swiper.autoplay.stop();
    }
  });

  $(".sec06_slide").mouseenter(function () {
    $(".sec06_slide_img1").attr("src", $(".sec06_slide_img1").data("pre"));
  });
  $(".sec06_slide").mouseleave(function () {
    $(".sec06_slide_img1").attr("src", $(".sec06_slide_img1").data("img"));
  });

  $(".sec06_slide2").mouseenter(function () {
    $(".sec06_slide_img2").attr("src", $(".sec06_slide_img2").data("pre"));
  });
  $(".sec06_slide2").mouseleave(function () {
    $(".sec06_slide_img2").attr("src", $(".sec06_slide_img2").data("img"));
  });

  // swiper4

  // $('.gnb_wrap>.gnb>li>a').mouseenter(function () {
  //     $('.header_btmline').addClass('active')
  // });

  // $('.gnb_wrap').mouseleave(function () {
  //     $('.gnb_wrap>.gnb>li>a').removeClass('active');
  //     $('.header_btmline').removeClass('active')
  // });

  // $('.gnb_wrap>.gnb>li').mouseleave(function () {
  //     $('.gnb_wrap>.gnb>li>a').removeClass('active')
  // })

  $(".search,.note_search_icon").click(function () {
    $(".searchbox_back").addClass("active");
    $(".searchbox").addClass("active");
  });
  $(".searchbox_top>img").click(function () {
    $(".searchbox_back").removeClass("active");
    $(".searchbox").removeClass("active");
  });

  $(".language").click(function () {
    if ($(".language").hasClass("active")) {
      $(".language").removeClass("active");
    } else {
      $(".language").addClass("active");
    }
  });

  $(".gnb>li").mouseenter(function () {
    $(this).addClass("active");
    $(".header_btmline").addClass("active");

    hoverGnbUnderlineMotion(this);
  });

  $(".gnb>li").mouseleave(function () {
    $(this).removeClass("active");
    $(".header_btmline").removeClass("active");

    leaveGnbUnderlineMotion();
  });

  let currentScrollSecetion = "#Joyful_Moments";

  window.addEventListener("popstate", function () {
    $(".panel").removeClass("active");

    const windowHash = window.location.hash;

    $(".panel").each((_, item) => {
      const anchorHash = $($(item).find("a")).attr("href");

      if (anchorHash === windowHash) $(item).addClass("active");
    });
  });

  // ===================== Start section scroll event =====================

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  };

  let observer = new IntersectionObserver(callback, options);
  let isScrolling = false;

  $("section").each(function () {
    if (["main_video", "DELIGHTFUL_CHOICE"].includes($(this).attr("id")))
      return;

    observer.observe(this);
  });

  function callback(entries, observer) {
    if (isScrolling) return;

    entries.forEach((entry) => {
      let id = entry.target.id;

      if (entry.isIntersecting) {
        $(".panel").removeClass("active");
        $($(`.panel a[href="#${id}"]`).parents(".panel")).addClass("active");
      }
    });
  }

  $(".panel a").click(function (e) {
    e.preventDefault();
    isScrolling = true;

    let target = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(target).offset().top - $("header").height(),
      },
      300,
      function () {
        isScrolling = false;
      }
    );

    $(".panel").removeClass("active");
    $(this).parents(".panel").addClass("active");
  });

  $(window).scroll(function () {

    console.log("$('body').height(): ", $('body').height());
    console.log("$(this).scrollTop() + $(window).height(): ", $(this).scrollTop() + $(window).height() + 10);

    if ($('body').height() <= ($(this).scrollTop() + $(window).height() + 10)) {
      $('.page_panel').addClass('up')
    } else {
      $('.page_panel').removeClass('up')
    }
  })

  // ===================== End section scroll event =====================

  // $('.panel').click(function () {
  //     const sectionId = window.location.hash;
  //     console.log(sectionId);
  // })

  $(".family_site a").click(function () {
    if ($(".family_site_on ,.family_site ").hasClass("active")) {
      $(".family_site_on ,.family_site").removeClass("active");
    } else {
      $(".family_site_on ,.family_site").addClass("active");
    }
  });

  $(".menu-trigger").click(function () {
    if ($(".mo_menu").hasClass("active")) {
      $(".mo_menu").removeClass("active");
    } else {
      $(".mo_menu").addClass("active");
    }
  });

  $(window).scroll(function (event) {
    const nowscroll = $(this).scrollTop();

    if (nowscroll > 200) {
      $("header").addClass("active");
    } else {
      $("header").removeClass("active");
    }

    if (nowscroll > 600) {
      $(".aside").addClass("active");
    } else {
      $(".aside").removeClass("active");
    }
  });

  $(function () {
    var lastScrollTop = 0,
      delta = 15;

    $(window).scroll(function (event) {
      const nowscroll = $(this).scrollTop();

      if (Math.abs(lastScrollTop - nowscroll) <= delta) return;
      if (nowscroll > lastScrollTop && lastScrollTop > 0) {
        $("header").css("top", "-90px");
      } else {
        $("header").css("top", "0px");
      }
      lastScrollTop = nowscroll;
    });
  });

  var burger = $(".menu-trigger");

  burger.each(function (index) {
    var $this = $(this);

    $this.on("click", function (e) {
      e.preventDefault();
      $(this).toggleClass("active-" + (index + 1));
    });
  });

  AOS.init();
});
// end

function hoverGnbUnderlineMotion(element) {
  const width = $(element).width();
  const left = $(element).offset().left;

  const paddingLeft = Number($(element).css("padding-left").replace("px", ""));

  $(".focus-line").css({
    left: left + paddingLeft + "px",
    width: width + "px",
    transform: "scaleX(1)",
  });

  setTimeout(() => {
    $(".focus-line").css({
      transitionDelay: "inherit",
    });
  }, 200);
}

function leaveGnbUnderlineMotion() {
  $(".focus-line").css({
    transform: "scaleX(0)",
  });

  setTimeout(() => {
    $(".focus-line").css({
      transitionDelay: ".2s",
    });
  }, 200);
}
