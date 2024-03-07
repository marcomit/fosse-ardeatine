import { Cursor } from "./js/cursor";
import * as LocomotiveScroll from "./lib";

const options = {
  el: document.querySelector("#js-scroll"),
  smooth: !0,
  getSpeed: !0,
  getDirection: !0,
  tablet: {
    smooth: !1,
    lerp: 0,
  },
  smartphone: {
    smooth: !1,
    lerp: 0,
  },
};

const scroll = new LocomotiveScroll(options);
const cursor = new Cursor(document.querySelector(".cursor"));

document.querySelectorAll("[data-title]").forEach((link) => {
  link.addEventListener("mouseenter", () => {
    cursor.enter();
    cursor.DOM.text.innerHTML = link.getAttribute("data-title");
  });
  link.addEventListener("mouseleave", () => {
    cursor.leave();
    cursor.DOM.text.innerHTML = "";
  });
});

document
  .querySelectorAll("li")
  .forEach((item) =>
    item.addEventListener("click", () =>
      window.location.replace(
        `./martiri.html?martire=${item.getAttribute("data-id-martire")}`
      )
    )
  );

document
  .querySelector("iframe")
  .addEventListener("mouseover", () => (cursor.DOM.el.style.display = "none"));
document
  .querySelector("iframe")
  .addEventListener(
    "mouseleave",
    () => (cursor.DOM.el.style.display = "block")
  );

document.querySelectorAll(".item").forEach((item) => {
  item.addEventListener("mouseenter", shuffleAnimation);
  if (item.classList.contains("item-leave")) {
    item.addEventListener("mouseleave", shuffleAnimation);
  }
});

// Link with LocomotiveScroll API
document.querySelectorAll(".menu-content > *").forEach((item) => {
  item.addEventListener("click", () => {
    scroll.scrollTo(item.getAttribute("data-target"));
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.add("is-loaded");
  document.documentElement.classList.remove("is-loading");
  setTimeout(function () {
    document.documentElement.classList.add("is-ready");
  }, 300);
});

function getRandomCharacters() {
  const chars =
    "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return chars[Math.floor(Math.random() * chars.length)];
}

function shuffleAnimation(event) {
  const target = event.currentTarget;
  if (target.dataset.animating) {
    return;
  }
  target.dataset.animating = true;
  const word = target.querySelector(".word");
  const originalWord = word.innerText;
  let shuffles = 0;
  let maxShuffles = originalWord.length;
  let intervalDuration = 500 / maxShuffles;
  let animationInterval = setInterval(() => {
    if (shuffles >= maxShuffles) {
      clearInterval(animationInterval);
      word.innerText = originalWord;
      delete target.dataset.animating;
    } else {
      word.innerText =
        word.innerText.substring(1, maxShuffles - 1) + word.innerText.at(0);
      shuffles++;
    }
  }, intervalDuration);
}
