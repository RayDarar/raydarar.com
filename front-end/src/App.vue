<template>
  <article class="root">
    <transition name="nav-toggle">
      <navigation class="root__nav" v-show="loaded && isWrapped"></navigation>
    </transition>
    <transition mode="in-out" name="slide">
      <keep-alive>
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
      </keep-alive>
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
      loaded: false,
      tabs: [
        {
          index: 0,
          name: "Home"
        },
        {
          index: 1,
          name: "Home"
        },
        {
          index: 2,
          name: "Home"
        },
        {
          index: 3,
          name: "Home"
        },
        {
          index: 4,
          name: "Home"
        }
      ]
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
}

.overlay_hidden {
  opacity: 0;
}

.wrapper,
.wrapper_rotated {
  position: absolute;
  right: 3%;
  top: 3%;
  cursor: pointer;
}

.wrapper_rotated {
  transform: rotateZ(180deg);
}
</style>
