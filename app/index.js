import "styles/index.scss";
import p5 from "p5";
import dat from "dat.gui";
import Stats from "stats-js";
import App from "./app";

let stats = new Stats();
stats.setMode(0);
document.body.appendChild(stats.domElement);

const sketch = p5 => {
  const canvasWidth = p5.windowWidth;
  const canvasHeight = p5.windowHeight;
  window.p5 = p5;
  const app = new App(p5);


// plug in dat.GUI
  window.onload = function() {
    let gui = new dat.GUI();
    app.initGui(gui);
  };
  p5.setup = () => {
    p5.createCanvas(canvasWidth, canvasHeight);
    app.init();
  };
  p5.draw = () => {
    app.update();
  };
};

new p5(sketch);

export default sketch;
