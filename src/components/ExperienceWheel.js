(function () {
  const root = document.querySelector("#experience-wheel");
  if (!root) return;

  const cards = Array.from(root.querySelectorAll(".experience-wheel-card"));
  const panels = Array.from(root.querySelectorAll(".experience-wheel-panel"));
  const counter = root.querySelector("[data-experience-counter]");
  const previous = root.querySelector("[data-experience-prev]");
  const next = root.querySelector("[data-experience-next]");
  let activeIndex = 0;
  let pointerStartX = null;

  const normalizedOffset = (index) => {
    let offset = index - activeIndex;
    if (offset > cards.length / 2) offset -= cards.length;
    if (offset < -cards.length / 2) offset += cards.length;
    return offset;
  };

  const render = () => {
    cards.forEach((card, index) => {
      const offset = normalizedOffset(index);
      card.dataset.wheelPosition = String(offset);
      card.classList.toggle("is-active", index === activeIndex);
      card.setAttribute("aria-current", index === activeIndex ? "true" : "false");
    });
    panels.forEach((panel, index) => panel.classList.toggle("is-active", index === activeIndex));
    counter.textContent = String(activeIndex + 1).padStart(2, "0");
  };

  const move = (direction) => {
    activeIndex = (activeIndex + direction + cards.length) % cards.length;
    render();
  };

  cards.forEach((card, index) => {
    card.addEventListener("click", (event) => {
      if (index === activeIndex) return;
      event.preventDefault();
      activeIndex = index;
      render();
    });
  });

  previous.addEventListener("click", () => move(-1));
  next.addEventListener("click", () => move(1));
  root.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") move(-1);
    if (event.key === "ArrowRight" || event.key === "ArrowDown") move(1);
  });
  root.addEventListener("pointerdown", (event) => { pointerStartX = event.clientX; });
  root.addEventListener("pointerup", (event) => {
    if (pointerStartX === null) return;
    const distance = event.clientX - pointerStartX;
    pointerStartX = null;
    if (Math.abs(distance) > 55) move(distance < 0 ? 1 : -1);
  });
  root.addEventListener("pointercancel", () => { pointerStartX = null; });

  render();
})();
