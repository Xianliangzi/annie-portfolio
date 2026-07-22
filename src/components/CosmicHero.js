window.CosmicHero = (function () {
  let cleanup = null;

  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

  const init = () => {
    if (cleanup) {
      cleanup();
      cleanup = null;
    }

    const hero = document.querySelector(".hero");
    const canvas = document.querySelector("#cosmic-hero-canvas");
    if (!hero || !canvas) return;

    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: 0, y: 0, active: false };
    const bursts = [];
    let stars = [];
    let width = 0;
    let height = 0;
    let dpr = 1;
    let animationFrame = 0;
    let lastTime = performance.now();
    let paused = false;

    const makeStar = () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      baseX: Math.random() * width,
      baseY: Math.random() * height,
      z: Math.random(),
      size: 0.6 + Math.random() * 2.2,
      drift: 0.15 + Math.random() * 0.8,
      hue: Math.random() > 0.62 ? 286 : Math.random() > 0.34 ? 186 : 222,
      phase: Math.random() * Math.PI * 2
    });

    const resize = () => {
      const rect = hero.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      dpr = clamp(window.devicePixelRatio || 1, 1, 1.65);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const baseCount = width < 720 ? 92 : width < 1100 ? 142 : 210;
      const count = prefersReducedMotion ? Math.floor(baseCount * 0.45) : baseCount;
      stars = Array.from({ length: count }, makeStar);
    };

    const updatePointer = (event) => {
      const rect = hero.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.active = true;
    };

    const clearPointer = () => {
      pointer.active = false;
    };

    const createBurst = (event) => {
      if (prefersReducedMotion) return;
      const rect = hero.getBoundingClientRect();
      bursts.push({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        radius: 4,
        alpha: 0.82,
        speed: 8 + Math.random() * 5
      });
      if (bursts.length > 5) bursts.shift();
    };

    const drawNebula = (time) => {
      const pulse = Math.sin(time * 0.00035) * 0.08;
      const nebula = context.createRadialGradient(width * 0.42, height * 0.42, 10, width * 0.42, height * 0.42, width * 0.72);
      nebula.addColorStop(0, `rgba(107, 92, 255, ${0.2 + pulse})`);
      nebula.addColorStop(0.34, "rgba(36, 225, 219, 0.105)");
      nebula.addColorStop(0.64, "rgba(255, 61, 154, 0.07)");
      nebula.addColorStop(1, "rgba(0, 0, 0, 0)");
      context.fillStyle = nebula;
      context.fillRect(0, 0, width, height);

      const horizon = context.createLinearGradient(0, 0, width, height);
      horizon.addColorStop(0, "rgba(4, 12, 25, 0)");
      horizon.addColorStop(0.52, "rgba(16, 42, 74, 0.22)");
      horizon.addColorStop(1, "rgba(2, 5, 12, 0)");
      context.fillStyle = horizon;
      context.fillRect(0, 0, width, height);
    };

    const draw = (time) => {
      if (paused) return;

      const delta = clamp((time - lastTime) / 16.67, 0.5, 2);
      lastTime = time;
      context.clearRect(0, 0, width, height);
      drawNebula(time);

      stars.forEach((star, index) => {
        const wave = Math.sin(time * 0.00045 * star.drift + star.phase);
        let targetX = star.baseX + wave * 18 * star.z;
        let targetY = star.baseY + Math.cos(time * 0.00038 * star.drift + star.phase) * 12 * star.z;

        if (pointer.active) {
          const dx = targetX - pointer.x;
          const dy = targetY - pointer.y;
          const distance = Math.max(1, Math.hypot(dx, dy));
          const radius = width < 720 ? 104 : 178;
          if (distance < radius) {
            const force = (1 - distance / radius) * (width < 720 ? 32 : 58);
            targetX += (dx / distance) * force;
            targetY += (dy / distance) * force;
          }
        }

        bursts.forEach((burst) => {
          const dx = targetX - burst.x;
          const dy = targetY - burst.y;
          const distance = Math.max(1, Math.hypot(dx, dy));
          if (distance < burst.radius + 90) {
            const force = (1 - distance / (burst.radius + 90)) * 86 * burst.alpha;
            targetX += (dx / distance) * force;
            targetY += (dy / distance) * force;
          }
        });

        star.x += (targetX - star.x) * 0.045 * delta;
        star.y += (targetY - star.y) * 0.045 * delta;

        const alpha = 0.3 + star.z * 0.7 + Math.max(0, wave) * 0.22;
        context.beginPath();
        context.fillStyle = `hsla(${star.hue}, 95%, ${68 + star.z * 18}%, ${alpha})`;
        context.shadowColor = `hsla(${star.hue}, 100%, 72%, 0.45)`;
        context.shadowBlur = 8 * star.z;
        context.arc(star.x, star.y, star.size * (0.55 + star.z), 0, Math.PI * 2);
        context.fill();

        if (index % 17 === 0) {
          context.beginPath();
          context.strokeStyle = `hsla(${star.hue}, 90%, 72%, ${0.08 + star.z * 0.06})`;
          context.lineWidth = 1;
          context.moveTo(star.x, star.y);
          context.lineTo(star.x + 28 * star.z, star.y + 10 * star.z);
          context.stroke();
        }
      });

      context.shadowBlur = 0;
      bursts.forEach((burst) => {
        context.beginPath();
        context.strokeStyle = `rgba(100, 244, 255, ${burst.alpha})`;
        context.lineWidth = 1.4;
        context.arc(burst.x, burst.y, burst.radius, 0, Math.PI * 2);
        context.stroke();
        burst.radius += burst.speed * delta;
        burst.alpha *= 0.94;
      });

      for (let i = bursts.length - 1; i >= 0; i -= 1) {
        if (bursts[i].alpha < 0.02) bursts.splice(i, 1);
      }

      animationFrame = window.requestAnimationFrame(draw);
    };

    const handleVisibility = () => {
      paused = document.hidden;
      if (!paused) {
        lastTime = performance.now();
        animationFrame = window.requestAnimationFrame(draw);
      }
    };

    resize();
    animationFrame = window.requestAnimationFrame(draw);

    hero.addEventListener("pointermove", updatePointer, { passive: true });
    hero.addEventListener("pointerleave", clearPointer, { passive: true });
    hero.addEventListener("click", createBurst);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", handleVisibility);

    cleanup = () => {
      window.cancelAnimationFrame(animationFrame);
      hero.removeEventListener("pointermove", updatePointer);
      hero.removeEventListener("pointerleave", clearPointer);
      hero.removeEventListener("click", createBurst);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  };

  return { init };
})();
