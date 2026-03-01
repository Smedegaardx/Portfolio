const body = document.querySelector("body");
const footer = document.querySelector("footer");
const cursor = document.querySelector("#cursor");
const lottie = document.querySelector(".lottie");
const scrollSVG = document.querySelector("#scrollSvg");

const header = document
  .querySelector("header")
  .addEventListener("mouseover", () => (body.dataset.cursor = "orange"));
const main = document
  .querySelector("main")
  .addEventListener("mouseover", () => (body.dataset.cursor = "black"));
footer.addEventListener("mouseover", () => (body.dataset.cursor = "orange"));

scrollSVG.addEventListener("click", () => {
  window.scrollTo(0, 501);
});

document.addEventListener("mousemove", function (e) {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight),
    );
  },
  false,
);

window.addEventListener("scroll", playLottie);

function playLottie() {
  let scroll = this.scrollY;
  console.log(scroll);
  if (scroll > 500) {
    lottie.play();
  }
}

const outline = document.querySelector(".circle_outline");
const dot = document.querySelector(".circle_dot");

document.querySelector(".linkedin").addEventListener("mouseenter", () => {
  footer.dataset.color = "linked_in";
  hoverMouse();
  outline.classList.add("hover_li");
});
document.querySelector(".linkedin").addEventListener("mouseleave", () => {
  footer.dataset.color = "main";
  unHoverMouse();
  outline.classList.remove("hover_li");
});

document.querySelector(".github").addEventListener("mouseenter", () => {
  footer.dataset.color = "github";
  hoverMouse();
  outline.classList.add("hover_git");
});
document.querySelector(".github").addEventListener("mouseleave", () => {
  footer.dataset.color = "main";
  unHoverMouse();
  outline.classList.remove("hover_git");
});

document.querySelector(".cv").addEventListener("mouseenter", () => {
  footer.dataset.color = "cv";
  hoverMouse();
  outline.classList.add("hover_cv");
});
document.querySelector(".cv").addEventListener("mouseleave", () => {
  footer.dataset.color = "main";
  unHoverMouse();
  outline.classList.remove("hover_cv");
});

function hoverMouse() {
  body.dataset.cursor = "black";
  outline.classList.add("cursor_hover");
  dot.classList.add("cursor_hover");
}

function unHoverMouse() {
  outline.classList.remove("cursor_hover");
  dot.classList.remove("cursor_hover");
}
