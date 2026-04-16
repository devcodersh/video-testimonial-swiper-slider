(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".testimonial-section").forEach(function (section) {
      const swiperContainer = section.querySelector(".mySwiper");
      if (!swiperContainer || typeof Swiper === "undefined") return;

      const swiper = new Swiper(swiperContainer, {
        slidesPerView: 1.2,
        spaceBetween: 20,
        navigation: {
          nextEl: section.querySelector(".swiper-button-next"),
          prevEl: section.querySelector(".swiper-button-prev"),
        },
        breakpoints: {
          640:  { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        },
        watchSlidesProgress: true,
      });

      const allVideos = section.querySelectorAll("video");

      function stopAllVideos(reset) {
        allVideos.forEach(function (video) {
          video.pause();
          if (reset) video.currentTime = 0;
          video.removeAttribute("controls");
          const slide = video.closest(".swiper-slide");
          if (!slide) return;
          const content = slide.querySelector(".card-content");
          const playBtn = slide.querySelector(".play-btn");
          if (content) content.classList.remove("hidden");
          if (playBtn) playBtn.style.display = "flex";
        });
      }

      section.addEventListener("click", function (e) {
        const playBtn = e.target.closest(".play-btn");
        if (!playBtn) return;
        const slide = playBtn.closest(".swiper-slide");
        const video = slide ? slide.querySelector("video") : null;
        const content = slide ? slide.querySelector(".card-content") : null;
        if (!video) return;
        stopAllVideos(true);
        video.play();
        video.setAttribute("controls", true);
        playBtn.style.display = "none";
        if (content) content.classList.add("hidden");
      });

      allVideos.forEach(function (video) {
        video.addEventListener("pause", function () {
          const slide = video.closest(".swiper-slide");
          if (!slide) return;
          const content = slide.querySelector(".card-content");
          const playBtn = slide.querySelector(".play-btn");
          if (content) content.classList.remove("hidden");
          if (playBtn) playBtn.style.display = "flex";
          video.removeAttribute("controls");
        });
      });

      document.addEventListener("click", function (e) {
        if (!section.contains(e.target)) stopAllVideos(false);
      });

      swiper.on("slideChange", function () {
        stopAllVideos(false);
      });
    });
  });
})();