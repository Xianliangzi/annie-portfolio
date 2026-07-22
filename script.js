(function () {
  const data = window.portfolioData;
  const renderers = window.portfolioRenderers;
  const page = document.body.dataset.page;

  if (!data || !renderers) {
    return;
  }

  renderers.renderShell(data);

  if (page === "project-detail") {
    renderers.renderProjectDetail(data);
  } else if (page === "award-detail") {
    renderers.renderAwardDetail(data);
  } else if (page === "experience-detail") {
    renderers.renderExperienceDetail(data);
  } else if (page === "photography") {
    renderers.renderPhotography(data);
  } else if (page === "photo-series") {
    renderers.renderPhotoSeries(data);
  } else if (page === "channels") {
    renderers.renderChannels(data);
  } else if (page === "ai-visual") {
    renderers.renderAiVisual(data);
  } else {
    renderers.renderHome(data);
  }

  if (window.ImageLightbox) {
    window.ImageLightbox.init();
  }

  if (window.CosmicHero && page === "home") {
    window.CosmicHero.init();
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  document.querySelectorAll("[data-lightbox-group]").forEach((trigger) => {
    trigger.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      trigger.click();
    });
  });

  document.querySelectorAll("[data-load-more-gallery]").forEach((button) => {
    button.addEventListener("click", () => {
      const hiddenItems = Array.from(document.querySelectorAll(".photo-tile.is-gallery-hidden")).slice(0, 24);
      hiddenItems.forEach((item) => item.classList.remove("is-gallery-hidden"));
      if (!document.querySelector(".photo-tile.is-gallery-hidden")) {
        button.remove();
      }
      if (window.ImageLightbox) {
        window.ImageLightbox.refresh();
      }
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".section-observe").forEach((section) => {
    observer.observe(section);
  });

  const updateHeader = () => {
    document.body.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();
})();
