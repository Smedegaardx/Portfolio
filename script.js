const body = document.querySelector("body");
const cursor = document.querySelector("#cursor");
const lottie = document.querySelector(".lottie");
const scrollSVG = document.querySelector("#scrollSvg");

const header = document.querySelector("header").addEventListener("mouseover", () => body.dataset.cursor = "orange")
const main = document.querySelector("main").addEventListener("mouseover", () => body.dataset.cursor = "black")

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
    document.body.style.setProperty("--scroll", window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
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
