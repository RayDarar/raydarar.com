<template>
  <article class="root">
    <navigation class="root__nav" v-show="loaded"></navigation>
    <router-view @wrap="wrap" class="root__component" ref="sect" v-show="loaded"></router-view>
    <background @load-content="loadContent" />
  </article>
</template>

<script>
import Nav from "@/components/Navigation";
import Background from "@/components/Background";
import velocity from "velocity-animate";

export default {
  name: "App",
  components: {
    navigation: Nav,
    Background
  },
  data() {
    return {
      isWrapped: false,
      loaded: false
    };
  },
  methods: {
    loadContent() {
      this.loaded = true;
    },
    wrap() {
      if (this.isWrapped) {
        // unwrap
        velocity(
          this.$refs.sect.$el,
          {
            width: "100%",
            left: "0%",
            top: "0%",
            height: "100%",
            fontSize: "1em"
          },
          { duration: 500 }
        );
      } else {
        // wrap
        velocity(
          this.$refs.sect.$el,
          {
            width: "80%",
            left: "10%",
            top: "10%",
            height: "80%",
            fontSize: "0.8em"
          },
          { duration: 500 }
        );
      }
      this.isWrapped = !this.isWrapped;
    }
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
