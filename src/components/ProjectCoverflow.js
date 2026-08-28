(function () {
  const root = document.querySelector("#project-coverflow");
  if (!root) return;

  const shell = root.closest(".project-coverflow-shell");
  const counter = shell.querySelector("[data-coverflow-current]");
  const slides = Array.from(root.querySelectorAll(".swiper-slide"));

  const updateCounter = (swiper) => {
    const index = typeof swiper.realIndex === "number" ? swiper.realIndex : swiper.activeIndex;
    counter.textContent = String(index + 1).padStart(2, "0");
    slides.forEach((slide, slideIndex) => slide.setAttribute("aria-hidden", slideIndex === index ? "false" : "true"));
  };

  if (!window.Swiper) {
    shell.classList.add("is-coverflow-fallback");
    return;
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const swiper = new window.Swiper(root, {
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: "auto",
    loop: false,
    rewind: true,
    grabCursor: true,
    slideToClickedSlide: true,
    watchSlidesProgress: true,
    speed: reducedMotion ? 0 : 700,
    keyboard: { enabled: true, onlyInViewport: true },
    mousewheel: { forceToAxis: true, releaseOnEdges: true, sensitivity: 0.75 },
    navigation: {
      prevEl: shell.querySelector(".project-coverflow-prev"),
      nextEl: shell.querySelector(".project-coverflow-next")
    },
    coverflowEffect: {
      rotate: 0,
      stretch: "-18%",
      depth: 230,
      scale: 0.82,
      modifier: 1.08,
      slideShadows: false
    },
    on: {
      init: updateCounter,
      slideChange: updateCounter
    }
  });

  shell.classList.add("is-coverflow-ready");
  window.projectCoverflow = swiper;
})();
