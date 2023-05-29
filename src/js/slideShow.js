const Methods = {
  init() {
    Methods.slideWelcome();
    Methods.slideExperiencia();
    Methods.slideMission();
    Methods.slideCard();
  },
  slideWelcome() {
    $(".container_slide_welcome").slick({
      dots: true,
      infinite: true,
      prevArrow:
        "<button class=' prev slick-prev'><img src='src/image/arrow_left.svg'></button>",

      nextArrow:
        "<button class=' next slick-next'><img src='src/image/arrow_right.svg'></button>",
      autoplay: true,
      autoplaySpeed: 2000,
      breakpoints: [
        {
          breakpoint: 768,
          settings: {
            dots: false,
          },
        },
      ],
    });

    if (window.innerWidth > 576) {
      $(window).on("load", function () {
        let stHeight = $(".container_slide_welcome .slick-track").height();
        $(".container_slide_welcome .slick-slide").css(
          "height",
          stHeight + "px"
        );
      });
    }
  },

  slideExperiencia() {
    $(".container-card-experience").slick({
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow:
        "<button class=' prev slick-prev'><img src='src/image/arrow_left.svg'></button>",

      nextArrow:
        "<button class=' next slick-next'><img src='src/image/arrow_right.svg'></button>",

      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    $(window).on("load", function () {
      let stHeight = $(".container-card-experience .slick-track").height();
      $(".container-card-experience .slick-slide").css(
        "height",
        stHeight + "px"
      );
    });
  },

  slideMission() {
    $(".slide-mission").slick({
      dots: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow: false,

      nextArrow:
        "<button class=' next slick-next'><img src='src/image/arrow_right.svg'></button>",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    $(window).on("load", function () {
      let stHeight = $(".slide-mission .slick-track").height();
      $(".slide-mission .slick-slide").css("height", stHeight + "px");
    });
  },

  slideCard() {
    if (window.innerWidth <= 576) {
      $(".container_card").slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        adaptiveHeight: true,
        arrow: false,
        prevArrow: false,
        nextArrow: false,
      });
      let stHeight = $(".container_card .slick-track").height();
      $(".container_card .slick-slide").css("height", stHeight + "px");
      return;
    }
    if (window.innerWidth <= 790) {
      $(".container_card").slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false,
      });

      let stHeight = $(".container_card .slick-track").height();
      $(".container_card .slick-slide").css("height", stHeight + "px");
    }
  },
};

export default {
  init: Methods.init,
};
