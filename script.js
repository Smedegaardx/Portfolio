const body = document.querySelector("body");
const footer = document.querySelector("footer")
const cursor = document.querySelector("#cursor");
const lottie = document.querySelector(".lottie");
const scrollSVG = document.querySelector("#scrollSvg");

const header = document.querySelector("header").addEventListener("mouseover", () => body.dataset.cursor = "orange")
const main = document.querySelector("main").addEventListener("mouseover", () => body.dataset.cursor = "black")
footer.addEventListener("mouseover", () => body.dataset.cursor = "orange")

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

document.querySelector(".linkedin").addEventListener("mouseenter", () => footer.dataset.color = "linked_in")
document.querySelector(".linkedin").addEventListener("mouseleave", () => footer.dataset.color = "main")
document.querySelector(".linkedin").addEventListener("mouseenter", () => body.dataset.cursor = "black")

document.querySelector(".github").addEventListener("mouseenter", () => footer.dataset.color = "github")
document.querySelector(".github").addEventListener("mouseleave", () => footer.dataset.color = "main")
document.querySelector(".github").addEventListener("mouseenter", () => body.dataset.cursor = "black")

document.querySelector(".cv").addEventListener("mouseenter", () => footer.dataset.color = "cv")
document.querySelector(".cv").addEventListener("mouseleave", () => footer.dataset.color = "main")
document.querySelector(".cv").addEventListener("mouseenter", () => body.dataset.cursor = "black")
