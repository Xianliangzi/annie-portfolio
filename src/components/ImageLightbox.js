(function () {
  const state = {
    groups: new Map(),
    currentGroup: "",
    currentIndex: 0,
    scale: 1,
    translateX: 0,
    translateY: 0,
    isDragging: false,
    dragStartX: 0,
    dragStartY: 0,
    startTranslateX: 0,
    startTranslateY: 0,
    touchStartX: 0
  };

  const createLightbox = () => {
    const node = document.createElement("div");
    node.className = "image-lightbox";
    node.setAttribute("aria-hidden", "true");
    node.innerHTML = `
      <div class="lightbox-backdrop" data-lightbox-close></div>
      <div class="lightbox-shell" role="dialog" aria-modal="true" aria-label="作品图片预览">
        <button class="lightbox-close" type="button" aria-label="关闭图片预览" data-lightbox-close>×</button>
        <div class="lightbox-toolbar" aria-label="图片缩放控制">
          <button type="button" data-lightbox-zoom-out>−</button>
          <button type="button" data-lightbox-reset>Reset</button>
          <button type="button" data-lightbox-zoom-in>+</button>
        </div>
        <button class="lightbox-arrow prev" type="button" aria-label="上一张图片" data-lightbox-prev>←</button>
        <figure class="lightbox-figure">
          <div class="lightbox-stage">
            <img class="lightbox-image" src="" alt="" draggable="false">
          </div>
          <figcaption class="lightbox-caption">
            <span class="lightbox-count"></span>
          </figcaption>
        </figure>
        <button class="lightbox-arrow next" type="button" aria-label="下一张图片" data-lightbox-next>→</button>
      </div>
    `;
    document.body.appendChild(node);
    return node;
  };

  const lightbox = createLightbox();
  const image = lightbox.querySelector(".lightbox-image");
  const stage = lightbox.querySelector(".lightbox-stage");
  const count = lightbox.querySelector(".lightbox-count");

  const activeItems = () => state.groups.get(state.currentGroup) || [];

  const clampScale = (value) => Math.min(4, Math.max(0.5, value));

  const applyTransform = () => {
    image.style.transform = `translate3d(${state.translateX}px, ${state.translateY}px, 0) scale(${state.scale})`;
    image.classList.toggle("is-zoomed", state.scale > 1);
  };

  const resetView = () => {
    state.scale = 1;
    state.translateX = 0;
    state.translateY = 0;
    applyTransform();
  };

  const fitImageToStage = () => {
    if (!image.naturalWidth || !image.naturalHeight) return;
    const stageWidth = stage.clientWidth;
    const stageHeight = stage.clientHeight;
    if (!stageWidth || !stageHeight) return;

    const imageRatio = image.naturalWidth / image.naturalHeight;
    const stageRatio = stageWidth / stageHeight;

    if (stageRatio > imageRatio) {
      image.style.height = `${stageHeight}px`;
      image.style.width = `${stageHeight * imageRatio}px`;
    } else {
      image.style.width = `${stageWidth}px`;
      image.style.height = `${stageWidth / imageRatio}px`;
    }
  };

  const zoom = (delta) => {
    const nextScale = clampScale(state.scale + delta);
    if (nextScale === 1) {
      resetView();
      return;
    }
    state.scale = nextScale;
    applyTransform();
  };

  const render = () => {
    const items = activeItems();
    const item = items[state.currentIndex];
    if (!item) return;

    image.src = item.src;
    image.alt = item.alt || "作品图片预览";
    image.style.width = "";
    image.style.height = "";
    count.textContent = `${state.currentIndex + 1} / ${items.length}`;
    lightbox.classList.toggle("is-single", items.length <= 1);
    resetView();
    if (image.complete) {
      requestAnimationFrame(() => {
        fitImageToStage();
        resetView();
      });
    }
  };

  const open = (group, index) => {
    state.currentGroup = group;
    state.currentIndex = index;
    render();
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");
  };

  const close = () => {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open");
    resetView();
  };

  const move = (step) => {
    const items = activeItems();
    if (!items.length) return;
    state.currentIndex = (state.currentIndex + step + items.length) % items.length;
    render();
  };

  const collectGroups = () => {
    state.groups.clear();
    document.querySelectorAll("[data-lightbox-group]").forEach((trigger) => {
      const group = trigger.dataset.lightboxGroup;
      const item = {
        src: trigger.dataset.lightboxSrc,
        alt: trigger.dataset.lightboxAlt
      };

      if (!state.groups.has(group)) {
        state.groups.set(group, []);
      }

      const groupItems = state.groups.get(group);
      trigger.dataset.lightboxIndex = String(groupItems.length);
      groupItems.push(item);
    });
  };

  const init = () => {
    collectGroups();

    document.querySelectorAll("[data-lightbox-group]").forEach((trigger) => {
      if (trigger.dataset.lightboxBound === "true") return;
      trigger.dataset.lightboxBound = "true";
      trigger.addEventListener("click", (event) => {
        event.preventDefault();
        open(trigger.dataset.lightboxGroup, Number(trigger.dataset.lightboxIndex || 0));
      });
    });
  };

  lightbox.addEventListener("click", (event) => {
    if (event.target.closest("[data-lightbox-close]")) close();
    if (event.target.closest("[data-lightbox-prev]")) move(-1);
    if (event.target.closest("[data-lightbox-next]")) move(1);
    if (event.target.closest("[data-lightbox-zoom-in]")) zoom(0.25);
    if (event.target.closest("[data-lightbox-zoom-out]")) zoom(-0.25);
    if (event.target.closest("[data-lightbox-reset]")) resetView();
  });

  image.addEventListener("dblclick", () => {
    if (state.scale === 1) {
      state.scale = 2;
      applyTransform();
    } else {
      resetView();
    }
  });

  image.addEventListener("load", () => {
    fitImageToStage();
    resetView();
  });

  window.addEventListener("resize", () => {
    if (!lightbox.classList.contains("is-open")) return;
    fitImageToStage();
    resetView();
  });

  image.addEventListener("wheel", (event) => {
    event.preventDefault();
    zoom(event.deltaY < 0 ? 0.2 : -0.2);
  }, { passive: false });

  image.addEventListener("pointerdown", (event) => {
    if (state.scale <= 1) return;
    state.isDragging = true;
    state.dragStartX = event.clientX;
    state.dragStartY = event.clientY;
    state.startTranslateX = state.translateX;
    state.startTranslateY = state.translateY;
    image.setPointerCapture(event.pointerId);
  });

  image.addEventListener("pointermove", (event) => {
    if (!state.isDragging) return;
    state.translateX = state.startTranslateX + event.clientX - state.dragStartX;
    state.translateY = state.startTranslateY + event.clientY - state.dragStartY;
    applyTransform();
  });

  image.addEventListener("pointerup", () => {
    state.isDragging = false;
  });

  image.addEventListener("pointercancel", () => {
    state.isDragging = false;
  });

  lightbox.addEventListener("touchstart", (event) => {
    state.touchStartX = event.changedTouches[0].clientX;
  }, { passive: true });

  lightbox.addEventListener("touchend", (event) => {
    if (state.scale > 1) return;
    const delta = event.changedTouches[0].clientX - state.touchStartX;
    if (Math.abs(delta) < 42) return;
    move(delta > 0 ? -1 : 1);
  }, { passive: true });

  document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("is-open")) return;
    if (event.key === "Escape") close();
    if (event.key === "ArrowLeft") move(-1);
    if (event.key === "ArrowRight") move(1);
    if (event.key === "+" || event.key === "=") zoom(0.25);
    if (event.key === "-") zoom(-0.25);
    if (event.key === "0") resetView();
  });

  window.ImageLightbox = {
    init,
    refresh: init,
    open,
    close
  };
})();
