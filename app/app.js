
const NOISE_INTENSITY = 0.02;
const MARGIN = 20;
const SPEED = 5;
const DIAMETER = 10;

export default class App {

  constructor(p5) {
    /** @type p5 */
    this.p5 = p5;
    this.offset = 0;
    this.speed = {Speed: SPEED};
    this.margin = {Margin: MARGIN};
    this.noiseIntensity = {'Noise Scale': NOISE_INTENSITY};
    this.diameter = {Diameter: DIAMETER};
  }

  initGui(gui) {
    gui.add(this.speed, 'Speed', 1, 20);
    gui.add(this.margin, 'Margin', 5, 50);
    gui.add(this.noiseIntensity, 'Noise Scale', 0.001, 0.05);
    gui.add(this.diameter, 'Diameter', 3, 40);
  }

  init() {
    this.p5.noFill();
    this.p5.stroke('black');
  }

  update() {
    this.p5.background('#fff');
    for (let x = this.margin.Margin / 2; x < this.p5.width - this.margin.Margin / 2; x += this.margin.Margin) {
      for (let y = this.margin.Margin / 2; y < this.p5.height - this.margin.Margin / 2; y += this.margin.Margin) {
        this.p5.strokeWeight(this.getPerlin({x: x + this.offset, y}) * this.diameter.Diameter);
        this.p5.point(x, y);
      }
    }
    this.offset += this.speed.Speed;
  }

  getPerlin({x, y}) {
    return this.p5.noise(x * this.noiseIntensity['Noise Scale'], y * this.noiseIntensity['Noise Scale']);
  }
}
