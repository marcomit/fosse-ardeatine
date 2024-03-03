import { Cursor } from "./cursor";
import { Grid } from "./grid";
import { calcWinsize, preloadImages } from "./utils";

const cursor = new Cursor(document.querySelector(".cursor"));

preloadImages(".grid__item-img").then(() => {
  document.body.classList.remove("loading");
  const grid = new Grid(document.querySelector(".grid"));
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
