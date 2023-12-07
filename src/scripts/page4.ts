import anime from "animejs/lib/anime.es.js";
import styleVars from "../styles/page4.module.scss";
import svg from "bundle-text:../assets/colorlines.svg";

// Example scss usage in typescript.
let bodyElement = document.querySelector<HTMLElement>("body");
bodyElement.style.cursor = styleVars.indexCursor;

// Dynamically injecting our svg file contents into the HTML DOM to keep the html file clean.
document.querySelector<HTMLElement>("div.anim").innerHTML = svg;

// Original source: https://codepen.io/juliangarnier/pen/ZeEpgd
// See https://css-tricks.com/svg-line-animation-works for SVG line animation details.
// TODO: Convert to proper typescript
var pathEls = document.querySelectorAll("path");
for (var i = 0; i < pathEls.length; i++) {
  var pathEl = pathEls[i];
  var offset = anime.setDashoffset(pathEl);
  pathEl.setAttribute("stroke-dashoffset", offset.toString());
  anime({
    targets: pathEl,
    strokeDashoffset: [offset, 0],
    duration: anime.random(1000, 3000),
    delay: anime.random(0, 2000),
    loop: true,
    direction: "alternate",
    easing: "easeInOutSine",
    autoplay: true,
  });
}
