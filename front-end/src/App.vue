<template>
  <article class="root">
    <navigation class="root__nav"></navigation>
    <router-view class="root__component" ref="sect"></router-view>
    <vue-p5 id="canvas" @setup="setup" @draw="draw"></vue-p5>
  </article>
</template>

<script>
import Nav from "@/components/Navigation";
import VueP5 from "vue-p5";
import velocity from "velocity-animate";

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
    this.move(20000 * speed);
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
  name: "App",
  components: {
    navigation: Nav,
    VueP5
  },
  data() {
    return {
      isWrapped: false
    };
  },
  methods: {
    setup(sketch) {
      sketch.frameRate(FPS);
      sketch.createCanvas(width, height);
      const origin = sketch.createVector(width / 2, height);
      let off = 0;
      for (let i = 0; i < 1500; i++, off += 0.02) {
        const v2 = sketch.createVector(sketch.random(width), sketch.random(height));
        const speed = sketch.map(sketch.noise(off), 0, 1, 0.1, 0.25);
        stars.push(new Star(v2, origin, origin.angleBetween(v2), origin.dist(v2), speed));
      }
    },
    draw(sketch) {
      sketch.background("#303030");
      for (const star of stars) {
        star.move();
        star.update(sketch);
      }
    }
  },
  render(h) {
    return h(VueP5, { on: this });
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");

$navWidth: 80%;
$navLeft: (100% - $navWidth) / 2;
$navHeight: 10%;

@mixin def_rect($x, $y, $width, $height) {
  left: $x;
  top: $y;
  width: $width;
  height: $height;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  border: none;
  font: {
    size: 1rem;
    family: Montserrat;
  }
  overflow: hidden;
}

#canvas {
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 0;
}

.root {
  display: flex;
  flex-direction: column;

  @include def_rect(0, 0, 100vw, 100vh);

  &__nav {
    position: absolute;
    @include def_rect($navLeft, 0, $navWidth, $navHeight);
    z-index: 0;
  }

  &__component {
    position: relative;
    @include def_rect(0, 0, 100%, 100%);
    z-index: 1;
  }
}

.menu-icon {
  position: absolute;
  right: 3%;
  top: 3%;
  font-size: 1.8rem;
  cursor: pointer;
}
</style>
