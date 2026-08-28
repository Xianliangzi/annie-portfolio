import * as THREE from "three";
import { GLTFLoader } from "../vendor/three/loaders/GLTFLoader.js";

const section = document.querySelector("#capabilities");
const stage = document.querySelector("#capability-3d-stage");
const canvas = document.querySelector("#capability-3d-canvas");

if (section && stage && canvas) {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let initialized = false;
  let active = false;
  let renderer;
  let camera;
  let modelPivot;
  let frameId;
  const pointer = { x: 0, y: 0 };
  const current = { x: 0, y: 0 };

  const fail = () => {
    section.classList.remove("is-3d-loading", "is-3d-ready");
    section.classList.add("is-3d-failed");
    if (renderer) renderer.dispose();
  };

  const resize = () => {
    if (!renderer || !camera) return;
    const { width, height } = stage.getBoundingClientRect();
    if (!width || !height) return;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };

  const render = () => {
    if (!active || !renderer || !modelPivot) return;
    current.x += (pointer.x - current.x) * 0.055;
    current.y += (pointer.y - current.y) * 0.055;
    modelPivot.rotation.y = current.x * 0.34;
    modelPivot.rotation.x = current.y * 0.1;
    stage.style.setProperty("--px", current.x.toFixed(3));
    stage.style.setProperty("--py", current.y.toFixed(3));
    renderer.render(renderer.scene, camera);
    frameId = requestAnimationFrame(render);
  };

  const setActive = (value) => {
    active = value;
    if (active && renderer && modelPivot && !frameId) render();
    if (!active && frameId) {
      cancelAnimationFrame(frameId);
      frameId = undefined;
    }
  };

  const init = () => {
    if (initialized) return;
    initialized = true;
    section.classList.add("is-3d-loading");

    try {
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "high-performance" });
    } catch (error) {
      fail();
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.12;

    const scene = new THREE.Scene();
    renderer.scene = scene;
    camera = new THREE.PerspectiveCamera(28, 1, 0.01, 20);
    camera.position.set(0, 0.56, 2.35);
    camera.lookAt(0, 0.54, 0);
    const lowPower = window.matchMedia("(max-width: 760px)").matches || (navigator.deviceMemory && navigator.deviceMemory <= 4);

    scene.add(new THREE.HemisphereLight(0xf2fbff, 0x16223d, 2.2));
    const key = new THREE.DirectionalLight(0xffffff, 3.4);
    key.position.set(-2.2, 3.1, 3.4);
    scene.add(key);
    const cyan = new THREE.PointLight(0x57e7db, 8, 4);
    cyan.position.set(1.3, 0.8, 1.5);
    scene.add(cyan);
    const violet = new THREE.PointLight(0x8a6cff, 6, 3.5);
    violet.position.set(-1.4, 0.25, -0.6);
    scene.add(violet);

    const particleCount = lowPower ? 1250 : 3200;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i += 1) {
      const x = (Math.random() - 0.5) * 5.2;
      const z = (Math.random() - 0.5) * 4.2;
      const distance = Math.sqrt(x * x + z * z);
      const y = -0.76 + Math.sin(x * 2.4) * 0.045 + Math.cos(z * 2.7) * 0.055 + Math.max(0, 0.14 - distance * 0.035);
      particlePositions.set([x, y, z], i * 3);
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleField = new THREE.Points(particleGeometry, new THREE.PointsMaterial({ color: 0xdce7e8, size: lowPower ? 0.012 : 0.009, transparent: true, opacity: 0.72 }));
    scene.add(particleField);

    const cubeGeometry = new THREE.BoxGeometry(0.055, 0.055, 0.055);
    const cubeMaterial = new THREE.MeshStandardMaterial({ color: 0xe9eeee, roughness: 0.46, metalness: 0.32 });
    const cubeCount = lowPower ? 18 : 42;
    const cubes = new THREE.InstancedMesh(cubeGeometry, cubeMaterial, cubeCount);
    const dummy = new THREE.Object3D();
    for (let i = 0; i < cubeCount; i += 1) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 0.55 + Math.random() * 1.45;
      dummy.position.set(Math.cos(angle) * radius, -0.56 + Math.random() * 1.9, -0.5 - Math.random() * 1.25);
      const scale = 0.45 + Math.random() * 1.05;
      dummy.scale.setScalar(scale);
      dummy.rotation.set(Math.random(), Math.random(), Math.random());
      dummy.updateMatrix();
      cubes.setMatrixAt(i, dummy.matrix);
    }
    scene.add(cubes);

    modelPivot = new THREE.Group();
    scene.add(modelPivot);
    const modelUrl = lowPower
      ? "src/assets/models/annie-body-mobile.glb"
      : "src/assets/models/annie-body-desktop.glb";

    new GLTFLoader().load(modelUrl, (gltf) => {
      const model = gltf.scene;
      const box = new THREE.Box3().setFromObject(model);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());
      const scale = 1.48 / size.y;
      model.scale.setScalar(scale);
      model.position.set(-center.x * scale, -box.min.y * scale - 0.74, -center.z * scale);
      model.traverse((node) => {
        if (!node.isMesh) return;
        node.castShadow = false;
        node.frustumCulled = true;
        if (node.material) {
          node.material.roughness = Math.min(node.material.roughness ?? 0.65, 0.72);
          node.material.metalness = Math.max(node.material.metalness ?? 0, 0.08);
        }
      });
      modelPivot.add(model);
      section.classList.remove("is-3d-loading");
      section.classList.add("is-3d-ready");
      const loaderText = stage.querySelector(".capability-loader span");
      if (loaderText) loaderText.textContent = "能力空间已连接";
      resize();
      setActive(true);
    }, undefined, fail);

    resize();
    new ResizeObserver(resize).observe(stage);
  };

  stage.addEventListener("pointermove", (event) => {
    if (reducedMotion) return;
    const rect = stage.getBoundingClientRect();
    pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    pointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
  });
  stage.addEventListener("pointerleave", () => {
    pointer.x = 0;
    pointer.y = 0;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) init();
      setActive(entry.isIntersecting);
    });
  }, { rootMargin: "280px 0px", threshold: 0.01 });
  observer.observe(section);
}
