<template>
  <article class="root">
    <transition name="nav-toggle">
      <navigation class="root__nav" v-show="loaded && isWrapped" @route-to="routeTo"></navigation>
    </transition>
    <transition name="slide-in">
      <keep-alive>
        <router-view
          :class="{
            root__component: !isWrapped,
            root__component_wrapped: isWrapped,
            'slide-out': sliding,
            'fade-in': fadeIn
          }"
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
      sliding: false,
      isFirst: true,
      fadeIn: true
    };
  },
  methods: {
    loadContent() {
      this.loaded = true;
    },
    wrap() {
      this.isWrapped = !this.isWrapped;
      this.$store.commit("closeFirstOpen");
    },
    routeTo(path) {
      if (this.$route.path !== path) {
        this.sliding = true;
        setTimeout(() => {
          this.sliding = false;
          this.$router.push(path);
          setTimeout(() => (this.isWrapped = false), 800);
        }, 500);
      }
    }
  },
  created() {
    // default language as English
    this.$store.commit("setLanguage");
  },
  mounted() {
    setTimeout(() => (this.fadeIn = false), 2500);
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");

$navWidth: 80%;
$navLeft: (100% - $navWidth) / 2;
$navHeight: 8%;

$mainColor: #1a2639;

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

::selection {
  background-color: $mainColor;
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
  width: 26px;
}

.wrapper_rotated {
  transform: rotateZ(180deg);
}

.slide-out {
  transition: all 0.5s ease-in-out;
  transform: translateY(-100%);
}

.slide-in-enter-active {
  transition: all 1s ease;
}

.slide-in-enter {
  transform: translateY(100%);
  opacity: 0;
}

@media screen and (max-width: 900px) {
  .root__component_wrapped {
    top: 15%;
  }
}

@media screen and (max-width: 530px) {
  .wrapper,
  .wrapper_rotated {
    width: 20px;
    top: 2%;
  }
  .root__component_wrapped {
    transform: translateY(30%);
    @include def_rect(0, 0, 100%, 100%);
  }

  .slide-out {
    transform: translateY(-100%);
  }

  .slide-in-enter {
    transform: translateY(100%);
  }
}

#canvas {
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}

.fade-in {
  opacity: 0;
  animation: fade-in 1.5s 1s ease-in-out forwards;
}
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
