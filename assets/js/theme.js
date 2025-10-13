(function () {
  const q = (s) => document.querySelector(s);
  const key = "theme";
  const root = document.documentElement;
  const btn = () => q("#theme-toggle");

  function set(mode) {
    if (mode === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem(key, mode);
  }

  // init: honor saved or system
  const saved = localStorage.getItem(key);
  if (saved) set(saved);
  else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) set("dark");

  window.addEventListener("DOMContentLoaded", () => {
    const el = btn();
    if (!el) return;
    el.addEventListener("click", () => {
      const next = root.classList.contains("dark") ? "light" : "dark";
      set(next);
    });
  });
})();
