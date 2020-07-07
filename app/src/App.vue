<template>
  <article class="root">
    <transition name="nav-toggle">
      <navigation
        class="root__nav"
        v-show="isWrapped"
        @routed="routed"
      ></navigation>
    </transition>
    <transition :name="$root.isProd ? 'slide' : ''" mode="out-in">
      <keep-alive>
        <router-view
          :class="{
            root__component: !isWrapped,
            root__component_wrapped: isWrapped,
            'fade-in': isFirstOpen && $root.isProd,
          }"
        >
          <div
            :class="{ overlay: isWrapped, overlay_hidden: !isWrapped }"
            slot="wrapper"
            ref="overlay"
            @click="wrap"
          />
          <img
            src="@/assets/double_arrow_white.svg"
            alt="wrapper-icon"
            slot="wrapper"
            ref="wrapper"
            :class="{ wrapper: !isWrapped, wrapper_rotated: isWrapped }"
            @click="wrap"
          />
          <span
            class="explore-more"
            :class="{ 'fade-in': isFirstOpen }"
            v-if="isFirstOpen"
            slot="explore"
            >{{ content.EXPLORE_MORE }}</span
          >
        </router-view>
      </keep-alive>
    </transition>
    <background />
  </article>
</template>

<script>
import Nav from "@/components/Navigation";
import Background from "@/components/Background";

const WRAP_TIMEOUT = 500;

export default {
  name: "App",
  components: {
    navigation: Nav,
    Background,
  },
  data() {
    return {
      isWrapped: false,
      sliding: false,
    };
  },
  methods: {
    wrap(e) {
      if (
        e.target != this.$refs.overlay ||
        (e.target == this.$refs.overlay && this.isWrapped)
      ) {
        this.isWrapped = !this.isWrapped;
        this.$store.commit("closeFirstOpen");
      }
    },
    routed() {
      setTimeout(() => {
        this.isWrapped = false;
      }, WRAP_TIMEOUT);
    },
  },
  computed: {
    isFirstOpen() {
      return this.$store.state.isFirstOpen;
    },
    content() {
      return this.$store.state.language;
    },
  },
  created() {
    if (navigator.language.includes("ru"))
      this.$store.commit("setLanguage", "ru");
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");

$navWidth: 80%;
$navLeft: (100% - $navWidth) / 2;
$navHeight: 8%;

$mainColor: #1a2639;
$mainColor1: #d9dad7;
$mainColor2: #707070;
$mainColor3: #c24d2c;

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

::-webkit-scrollbar {
  width: 0.3rem;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: $mainColor2;
}

::selection {
  background-color: $mainColor;
  color: white;
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

  &__component,
  &__component_wrapped {
    position: relative;
    z-index: 2;
    transition: all 0.8s;
  }

  &__component {
    @include def_rect(0, 0, 100%, 100%);
    overflow-y: auto;
  }

  &__component_wrapped {
    @include def_rect($navLeft, $navHeight * 1.5, $navWidth, 80%);
    // transform: perspective(400px) rotateX(10deg);
    // transform-style: preserve-3d;
    border-radius: 34px;
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
  transition: opacity 0.3s;
  z-index: 1;
}

.overlay {
  cursor: pointer;
}

.overlay_hidden {
  opacity: 0;
  z-index: -1;
  width: 0%;
}

.wrapper,
.wrapper_rotated {
  position: absolute;
  right: 3%;
  top: 3%;
  cursor: pointer;
  z-index: 2;
  transition: transform 0.3s;
  width: 26px;
}

.wrapper_rotated {
  transform: rotateZ(180deg);
}

.explore-more {
  z-index: 1;
  position: absolute;
  right: 6%;
  top: 4%;
  color: white;
}

@media screen and (max-width: 900px) {
  .root__component_wrapped {
    top: 15%;
  }
  .explore-more {
    top: 4%;
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
  .explore-more {
    top: 3%;
    right: 10%;
  }
}

.slide-enter-active,
.slide-leave-active,
.nav-toggle-enter-active,
.nav-toggle-leave-active {
  transition-duration: 0.6s;
  transition-property: height, opacity, transform;
  transition-timing-function: ease-in-out;
  // overflow: hidden;
}

.slide-enter {
  opacity: 0;
  transform: translateY(100%);
}

.slide-leave-active {
  opacity: 0;
  transform: translateY(-100%);
}

.nav-toggle-leave-active,
.nav-toggle-enter {
  overflow: 0;
  transform: translateY(-120%);
}

.fade-in {
  opacity: 0;
  animation: fade-in 0.75s 1s ease-in-out forwards;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

#canvas {
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}
</style>
