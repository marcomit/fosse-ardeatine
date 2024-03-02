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
    lerp: 0,
  },
};

const scroll = new LocomotiveScroll(options);
const menu = document.getElementById("menu");
const cursor = document.getElementById("cursor");

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".item").forEach((item) => {
    item.addEventListener("mouseenter", shuffleAnimation2);
    if (item.classList.contains("item-leave")) {
      item.addEventListener("mouseleave", shuffleAnimation2);
    }
  });
  document.querySelectorAll(".menu-content > *").forEach((item) => {
    item.addEventListener("click", () => {
      scroll.scrollTo(item.getAttribute("data-target"));
    });
  });
  document.documentElement.classList.add("is-loaded"),
    document.documentElement.classList.remove("is-loading"),
    setTimeout(function () {
      document.documentElement.classList.add("is-ready");
    }, 300);
  "true" ==
    document.querySelector("#js-scroll").getAttribute("data-horizontal") &&
    ((t.direction = "horizontal"),
    (t.gestureDirection = "both"),
    (t.tablet = {
      smooth: !0,
      direction: "horizontal",
      horizontalGesture: !0,
    }),
    (t.smartphone = {
      smooth: !1,
    }),
    (t.reloadOnContextChange = !0)),
    setTimeout(function () {
      (i = []), (s = []);
      scroll.on("scroll", function (ev) {
        var n = (360 * ev.scroll.y) / ev.limit.y;
        s.forEach(function (t) {
          t.el.style.color = "hsl(".concat(n, ", 11%, 81%)");
        }),
          document.documentElement.setAttribute("data-direction", ev.direction);
      });
    }, 1e3);
});

//document.addEventListener("mousemove", (e) => {
//  cursor.style.top = `${e.clientY - cursor.offsetHeight / 2}px`;
//  cursor.style.left = `${e.clientX - cursor.offsetWidth / 2}px`;
//});

menu.addEventListener("click", (e) => {
  menu.classList.toggle("open");
});

//document.querySelectorAll(".cursor-visible").forEach((el) => {
//  el.addEventListener("mouseover", (e) => {
//    if (!cursor.classList.contains("visible")) cursor.classList.add("visible");
//  });
//  el.addEventListener("mouseout", () => {
//    if (cursor.classList.contains("visible"))
//      cursor.classList.remove("visible");
//  });
//});

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