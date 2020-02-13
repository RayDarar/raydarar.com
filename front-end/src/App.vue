<template>
  <article class="root">
    <transition name="nav-toggle">
      <navigation class="root__nav" v-show="loaded && isWrapped"></navigation>
    </transition>
    <router-view
      @wrap="wrap"
      :class="{ root__component: !isWrapped, root__component_wrapped: isWrapped }"
      ref="sect"
      v-show="loaded"
      :isWrapped="isWrapped"
    ></router-view>
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
    z-index: 1;
  }

  &__component {
    position: relative;
    @include def_rect(0, 0, 100%, 100%);
    z-index: 2;
    transition: 0.8s;
  }

  &__component_wrapped {
    position: relative;
    @include def_rect($navLeft, $navHeight, $navWidth, 80%);
    transform: perspective(400px) rotateX(10deg);
    transition: 0.8s;
    transform-style: preserve-3d;
    z-index: 2;
    font-size: 0.5em;
  }
}

.menu-icon {
  position: absolute;
  right: 3%;
  top: 3%;
  font-size: 1.8rem;
  cursor: pointer;
}

.nav-toggle-enter-active {
  animation: nav-toggle 0.5s ease-in-out;
}

.nav-toggle-leave-active {
  animation: nav-toggle 0.5s ease-in-out reverse;
}

@keyframes nav-toggle {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0%);
  }
}
</style>
