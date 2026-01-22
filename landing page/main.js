// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear().toString();

// Simple scroll reveal using IntersectionObserver
const revealEls = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach(el => observer.observe(el));
} else {
  // Fallback
  revealEls.forEach(el => el.classList.add("is-visible"));
}

// A/B variant toggle
const toggleButtons = document.querySelectorAll(".toggle-btn");
const variants = document.querySelectorAll(".ab-variant");

toggleButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const variant = btn.dataset.variant;

    toggleButtons.forEach(b => b.classList.toggle("is-active", b === btn));

    variants.forEach(v => {
      const isMatch = v.dataset.variant === variant;
      v.hidden = !isMatch;
    });

    // Example analytics hook
    console.log("[Experiment] Switched to variant:", variant);
  });
});

// Demo buttons (projects) — just log for now
document.querySelectorAll("[data-demo]").forEach(btn => {
  btn.addEventListener("click", () => {
    const demo = btn.dataset.demo;
    console.log("[Demo] Open demo:", demo);
    // In a real app, this could open a modal, route, or interactive playground.
  });
});