import { Cursor } from "./cursor";
import { Grid } from "./grid";
import { preloadImages } from "./utils";

const cursor = new Cursor(document.querySelector(".cursor"));
const grid = new Grid(document.querySelector(".grid"));

document.addEventListener('DOMContentLoaded', () => {
  const martire = new URLSearchParams(location.search).get('martire')
  if (!martire) return;
  if (!Number.isInteger(parseInt(martire))) return
  console.log(martire)
  grid.showContent(grid.gridItems[parseInt(martire)])
})

preloadImages(".grid__item-img").then(() => {
  document.body.classList.remove("loading");
  grid.on(
    "mouseEnterItem",
    (itemTitle) => (cursor.DOM.text.innerHTML = itemTitle)
  );
  grid.on("mouseLeaveItem", (_) => (cursor.DOM.text.innerHTML = ""));
});

[...document.querySelectorAll("a, button, .grid__item")].forEach((link) => {
  link.addEventListener("mouseenter", () => cursor.enter());
  link.addEventListener("mouseleave", () => cursor.leave());
});

[...document.querySelectorAll(".preview__item")].forEach((previewItem) =>
  previewItem
    .querySelector(".preview__item-back")
    .addEventListener("click", () => previewItem.querySelector("audio").pause())
);
