import { Cursor } from "./js/cursor";

const options = {
  el: document.querySelector("#js-scroll"),
  smooth: !0,
  getSpeed: !0,
  getDirection: !0,
  tablet: {
    smooth: !1,
  },
  smartphone: {
    smooth: !1,
  },
};

const scroll = new LocomotiveScroll(options);
const menu = document.getElementById("menu");
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

document.querySelectorAll('li, .dot').forEach(item => item.addEventListener('click', () => window.location.replace(`./martiri.html?martire=${item.getAttribute('data-id-martire')}`)))

document.querySelectorAll(".item").forEach((item) => {
  item.addEventListener("mouseenter", shuffleAnimation2);
  if (item.classList.contains("item-leave")) {
    item.addEventListener("mouseleave", shuffleAnimation2);
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
  const words = target.querySelectorAll(".word");
  const originalWords = Array.from(words).map((word) => word.innerText);
  let shuffles = 0;
  let maxShuffles = 10;
  let intervalDuration = 500 / maxShuffles;
  let animationInterval = setInterval(() => {
    if (shuffles >= maxShuffles) {
      clearInterval(animationInterval);
      words.forEach((word, index) => {
        word.innerText = originalWords[index];
      });
      delete target.dataset.animating;
    } else {
      words.forEach((word) => {
        const length = word.innerText.length;
        let shuffleText = "";
        for (let i = 0; i < length; i++) {
          shuffleText += getRandomCharacters();
        }
        word.innerText = shuffleText;
      });
      shuffles++;
    }
  }, intervalDuration);
}

function shuffleAnimation2(event) {
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
