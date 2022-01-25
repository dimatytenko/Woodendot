/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination } from "swiper";
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
// import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
import "swiper/css";

// Инициализация слайдеров
function initSliders() {
  // Перечень слайдеров
  if (document.querySelector(".review__slider")) {
    new Swiper(".review__slider", {
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Pagination, Navigation],
      /*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 30,
      autoHeight: true,
      speed: 800,
      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      // lazy: true,
      // Dotts
      pagination: {
        el: ".review__swiper-pagination",
        clickable: true,
        // dynamicBullets: 5,
      },
      // Arrows
      // navigation: {
      //   nextEl: ".about__more .more__item_next",
      //   prevEl: ".about__more .more__item_prev",
      // },
      /*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
      on: {},
    });
  }
  if (document.querySelector(".home-frame__slider")) {
    new Swiper(".home-frame__slider", {
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Pagination, Navigation],

      /*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
      observer: true,
      observeParents: true,
      // centeredSlides: true,
      // slidesPerView: 1,
      // spaceBetween: 0,
      // autoHeight: true,
      // speed: 800,
      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      // lazy: true,
      // Dotts
      // pagination: {
      //   el: ".review__swiper-pagination",
      //   clickable: true,
      // },
      // Arrows
      navigation: {
        nextEl: ".home-frame__slider .swiper-button-next",
        prevEl: ".home-frame__slider .swiper-button-prev",
      },
      // /*
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
          // centeredSlides: true,

          // autoHeight: true,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        // 992: {
        //   slidesPerView: 2,
        //   spaceBetween: 10,
        // },
        1440: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      },
      // */
      on: {},
    });
  }
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
  // Добавление классов слайдера
  // при необходимости отключить
  bildSliders();

  let sliderScrollItems = document.querySelectorAll(
    ".swiper_scroll"
  );
  if (sliderScrollItems.length > 0) {
    for (
      let index = 0;
      index < sliderScrollItems.length;
      index++
    ) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar =
        sliderScrollItem.querySelector(".swiper-scrollbar");
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener("load", function (e) {
  // Запуск инициализации слайдеров
  initSliders();
  // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
  //initSlidersScroll();
});
