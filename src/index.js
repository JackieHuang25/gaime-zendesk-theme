import "../styles/index.scss";

import "./navigation";
import "./dropdowns";
import "./share";
import "./search";
import "./forms";

// Category card image binding
window.addEventListener("DOMContentLoaded", () => {
  const blocksList = document.querySelector(".knowledge-base .blocks-list");
  if (!blocksList) return;

  const normalizeKey = (v) =>
    v.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

  const fallbackImages = (blocksList.dataset.fallbackImages || "")
    .split(",").map((u) => u.trim()).filter(Boolean);

  blocksList.querySelectorAll(".blocks-item").forEach((item, index) => {
    const name = item.dataset.categoryName || "";
    const key = name ? "image" + normalizeKey(name).split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join("") : "";
    const url = (key && blocksList.dataset[key]) || fallbackImages[index % fallbackImages.length] || "";
    if (name) item.dataset.category = normalizeKey(name);
    if (url) item.style.setProperty("--category-image", `url("${url}")`);
  });
});
