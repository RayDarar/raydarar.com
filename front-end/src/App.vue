<template>
  <article class="root">
    <transition name="nav-toggle">
      <navigation class="root__nav" v-show="loaded && isWrapped"></navigation>
    </transition>
    <transition name="slide-left" mode="out-in">
      <router-view
        :class="{ root__component: !isWrapped, root__component_wrapped: isWrapped }"
        v-show="loaded"
      >
        <div
          :class="{ overlay: isWrapped, overlay_hidden: !isWrapped }"
          slot="wrapper"
          ref="overlay"
        />
        <img
          src="@/assets/double_arrow_white.svg"
          alt="wrapper-icon"
          slot="wrapper"
          ref="wrapper"
          :class="{ wrapper: !isWrapped, wrapper_rotated: isWrapped }"
          @click="wrap"
        />
      </router-view>
    </transition>
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
  },
  created() {
    this.$store.commit("setLanguage");
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");

$navWidth: 80%;
$navLeft: (100% - $navWidth) / 2;
$navHeight: 8%;

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

.overlay,
.overlay_hidden {
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
  width: 100%;
  height: 100%;
  opacity: 0.4;
  transition: 0.3s;
  z-index: 1;
}

.overlay_hidden {
  opacity: 0;
  z-index: -1;
}

.wrapper,
.wrapper_rotated {
  position: absolute;
  right: 3%;
  top: 3%;
  cursor: pointer;
  z-index: 2;
  transition: 0.3s;
}

.wrapper_rotated {
  transform: rotateZ(180deg);
}

.slide-left-enter-active {
  transition: all 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53); //ease-in-quad
}

.slide-left-leave-active {
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94); //ease-out-quad
}

.slide-left-enter,
.slide-left-leave-to {
  transform: scaleY(0) translateZ(0);
  opacity: 0;
}
</style>
