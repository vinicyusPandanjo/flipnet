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

    let stHeight = $(".container_slide_welcome .slick-track").height();
    $(".container_slide_welcome .slick-slide").css("height", stHeight + "px");
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
    $(".container_card").slick({
      dots: $(".container_card .card").length > 5 ? true : false,
      infinite: true,
      slidesToShow: 5,
      prevArrow:
        "<button class=' prev slick-prev'><img src='src/image/arrow_left.svg'></button>",

      nextArrow:
        "<button class=' next slick-next'><img src='src/image/arrow_right.svg'></button>",

      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 790,
          settings: {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: false,
            nextArrow: false,
          },
        },
        {
          breakpoint: 576,
          settings: {
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,

            variableWidth: true,
          },
        },
      ],
    });

    let stHeight = $(".container_card .slick-track").height();
    $(".container_card .slick-slide").css("height", stHeight + "px");
  },
};

export default {
  init: Methods.init,
};
