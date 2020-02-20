import Perlin from "./Perlin.js";

class Star {
  constructor(sky, speed = 0.25) {
    this.sky = sky;
    this.x = Math.random() * sky.canvas.width;
    this.y = Math.random() * sky.canvas.height;
    this.origin = { x: sky.canvas.width / 2, y: sky.canvas.height * 1.1 };
    this.maxSpeed = speed;
    this.currentSpeed = 0.001;
    this.r = Math.sqrt(Math.pow(this.x - this.origin.x, 2) + Math.pow(this.y - this.origin.y, 2));
    this.angle = Math.atan2(this.y - this.origin.y, this.x - this.origin.x);

    this.move(12000 * speed);
  }

  move(speed = this.currentSpeed) {
    if (this.currentSpeed < this.maxSpeed) this.currentSpeed += 0.0015;
    let radians = this.angle;
    let degree = (radians * 180) / Math.PI;
    degree -= speed;
    radians = (degree * Math.PI) / 180;
    this.angle = radians;
    this.x = this.origin.x + this.r * Math.cos(this.angle);
    this.y = this.origin.y + this.r * Math.sin(this.angle);
  }
  redraw() {
    if (
      -10 <= this.x &&
      this.x <= this.sky.canvas.width + 10 &&
      -10 <= this.y &&
      this.y <= this.sky.canvas.height + 10
    ) {
      this.sky.context.beginPath();
      this.sky.context.arc(this.x, this.y, this.currentSpeed * 9, 0, 2 * Math.PI, false);
      this.sky.context.fillStyle = "white";
      this.sky.context.fill();
      this.sky.context.strokeStyle = "transparent";
      this.sky.context.stroke();
    }
  }
}

class NightSky {
  constructor() {}

  createCanvas(id) {
    const old = document.getElementById(id);
    this.canvas = document.createElement("canvas");
    old.parentNode.replaceChild(this.canvas, old);
    this.canvas.id = id;

    this.context = this.canvas.getContext("2d");
    this.canvas.width = window.innerWidth * 1.1;
    this.canvas.height = window.innerHeight * 1.1;
  }
  resizeCanvas() {
    this.canvas.width = window.innerWidth * 1.1;
    this.canvas.height = window.innerHeight * 1.1;
  }

  setBackgroundColors(from, to) {
    this.fromColor = from;
    this.toColor = to;
  }

  setNumberOfStars(n) {
    this.starsCount = n;
  }

  setFramerate(fps) {
    this.FPS = fps;
  }

  startSimulation() {
    if (this.FPS && this.starsCount && this.fromColor && this.toColor) {
      this.stars = [];
      const p = new Perlin(Math.random());

      this.drawBackground();
      for (let i = 0, off = 0; i < this.starsCount; i++, off += 0.02) {
        let noise = p.noise(off, 0, 0);
        noise = noise * (0.25 / 1);
        const star = new Star(this, noise);
        star.redraw();
        this.stars.push(star);
      }

      this.intervalId = setInterval(() => {
        this.drawBackground();
        this.drawStars();
      }, 1000 / this.FPS);
    }
  }

  drawBackground() {
    this.gradient = this.context.createLinearGradient(
      this.canvas.width / 2,
      this.canvas.height,
      this.canvas.width / 2,
      0
    );
    this.gradient.addColorStop(0.3, this.fromColor);
    this.gradient.addColorStop(1, this.toColor);
    this.context.fillStyle = this.gradient;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawStars() {
    for (const star of this.stars) {
      star.move();
      star.redraw();
    }
  }
}

const sky = new NightSky();

window.addEventListener("resize", () => {
  sky.resizeCanvas();
});

export default sky;
