<template>
  <vue-p5 id="canvas" @setup="setup" @draw="draw" @preload="preload"></vue-p5>
</template>

<script>
import VueP5 from "vue-p5";
const stars = [];
const width = document.documentElement.clientWidth;
const height = document.documentElement.clientHeight + 5;
const FPS = 30;
let angle = 0;

class Star {
  constructor(v, origin, angle, r, speed = 1) {
    this.v = v;
    this.r = r;
    this.angle = angle;
    this.origin = origin;
    this.speed = speed;
    this.move(15000 * speed);

    this.v_prev = { x: v.x, y: v.y };
  }

  move(speed = this.speed) {
    const angle = (this.angle * 180) / Math.PI - speed;
    this.angle = (angle * Math.PI) / 180;
    this.v.x = this.origin.x + this.r * Math.cos(this.angle);
    this.v.y = this.origin.y + this.r * Math.sin(this.angle);
  }

  update(sketch) {
    if (0 <= this.v.x && this.v.x <= width && 0 <= this.v.y && this.v.y <= height) {
      sketch.fill(255);
      sketch.stroke(0, 0);
      sketch.ellipse(this.v.x, this.v.y, 3.1);
    }
  }
}

export default {
  components: {
    VueP5
  },
  methods: {
    setup(sketch) {
      sketch.frameRate(FPS);
      sketch.createCanvas(width, height);
      const origin = sketch.createVector(width / 2, height);
      let off = 0;
      for (let i = 0; i < 500; i++, off += 0.02) {
        const v2 = sketch.createVector(sketch.random(width), sketch.random(height * 1.5));
        const speed = sketch.map(sketch.noise(off), 0, 1, 0.1, 0.25);
        stars.push(new Star(v2, origin, origin.angleBetween(v2), origin.dist(v2), speed));
      }
    },
    draw(sketch) {
      sketch.background("#1A2639");
      for (const star of stars) {
        star.move();
        star.update(sketch);
      }
    },
    preload() {
      this.$emit("load-content");
    }
  },
  render(h) {
    return h(VueP5, { on: this });
  }
};
</script>

<style lang="scss" scoped>
#canvas {
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 0;
}
</style>
