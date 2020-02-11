<template>
  <article class="root">
    <navigation class="root__nav"></navigation>
    <router-view class="root__component" @wrap="toggleMenu" ref="sect"></router-view>
  </article>
</template>

<script>
import Nav from "@/components/Navigation";
import velocity from "velocity-animate";

export default {
  name: "App",
  components: {
    navigation: Nav
  },
  data() {
    return {
      isWrapped: false
    };
  },
  methods: {
    toggleMenu() {
      const el = this.$refs.sect.$el;

      if (this.isWrapped) this.unwrap(el);
      else this.wrap(el);

      this.isWrapped = !this.isWrapped;
    },
    wrap(el) {
      velocity(
        el,
        {
          width: "80%",
          height: "80%",
          top: "10%",
          left: "10%"
        },
        { duration: 250 }
      );
    },
    unwrap(el) {
      velocity(
        el,
        {
          width: "100%",
          height: "100%",
          left: 0,
          top: 0
        },
        { duration: 250 }
      );
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
