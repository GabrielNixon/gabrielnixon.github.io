document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("pre > code").forEach((code) => {
    const pre = code.parentElement;
    const b = document.createElement("button");
    b.className = "copy-btn";
    b.textContent = "Copy";
    b.addEventListener("click", () => {
      navigator.clipboard.writeText(code.innerText);
      b.textContent = "Copied!";
      setTimeout(() => (b.textContent = "Copy"), 1200);
    });
    pre.appendChild(b);
  });
});
