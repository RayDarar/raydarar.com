<template>
  <section id="about">
    <slot name="overlay" />
    <slot name="wrapper" />
    <slot name="explore" />
    <header class="heading" v-if="$root.isProd">
      <h2 class="heading__title">{{ content["about_main_title"] }}</h2>
      <p class="heading__sub-title">{{ content["about_main_subtitle"] }}</p>
      <img class="heading__background" src="@/assets/quote-bg.jpg" alt="red-cross photo" />
    </header>
    <div class="info-block soft-skills" v-if="$root.isProd">
      <h3 class="info-block__title">{{ content["about_soft_title"] }}</h3>
      <soft-swiper class="info-block__data"></soft-swiper>
    </div>
    <div class="info-block hard-skills">
      <h3 class="info-block__title">{{ content["about_hard_title"] }}</h3>
      <div class="info-block__data">
        <hard-container :title="content['about_hard_blocks'][0]">
          <hard-item>HTML5</hard-item>
          <hard-item>CSS3</hard-item>
          <hard-item>JS</hard-item>
          <hard-item>AJAX</hard-item>
          <hard-item>Vue</hard-item>
          <hard-item>Vuex</hard-item>
          <hard-item>Sass</hard-item>
          <hard-item>Node.js</hard-item>
          <hard-item>Express</hard-item>
          <hard-item>Nest.js</hard-item>
          <hard-item>SQL</hard-item>
          <hard-item>MongoDB</hard-item>
          <hard-item>jQuery</hard-item>
        </hard-container>
        <hard-container :title="content['about_hard_blocks'][1]">
          <hard-item>OOP</hard-item>
          <hard-item>Patterns</hard-item>
          <hard-item>SOLID</hard-item>
          <hard-item>MVC</hard-item>
          <hard-item>MVVM</hard-item>
          <hard-item>BEM</hard-item>
        </hard-container>
        <hard-container :title="content['about_hard_blocks'][2]">
          <hard-item>PHP7</hard-item>
          <hard-item>Svelte</hard-item>
          <hard-item>C/C++</hard-item>
          <hard-item>SDL</hard-item>
          <hard-item>Python3</hard-item>
          <hard-item>C#</hard-item>
          <hard-item>ASP.Net</hard-item>
          <hard-item>ADO.Net</hard-item>
          <hard-item>WPF</hard-item>
          <hard-item>Java</hard-item>
          <hard-item>Spring</hard-item>
          <hard-item>Postgre</hard-item>
          <hard-item>MSSQL</hard-item>
          <hard-item>MySQL</hard-item>
        </hard-container>
        <hard-container :title="content['about_hard_blocks'][3]">
          <hard-item>Git</hard-item>
          <hard-item>VS code</hard-item>
          <hard-item>VS</hard-item>
          <hard-item>Adobe XD</hard-item>
          <hard-item>Figma</hard-item>
          <hard-item>Photoshop</hard-item>
          <hard-item>Windows</hard-item>
          <hard-item>Linux</hard-item>
        </hard-container>
      </div>
    </div>
    <div
      class="scroll-up"
      :class="{
        'scroll-up_visible': isScrollUpVisible,
      }"
      @click="scrollToTop"
    >
      <img src="@/assets/double_arrow_white.svg" alt="scroll-up arrow" />
    </div>
  </section>
</template>

<script>
import SoftSwiper from "./about/SoftSwiper";
import HardContainer from "./about/HardContainer";
import HardItem from "./about/HardItem";

const SCROLL_UP_HEIGHT = 100;
const SCROLL_UP_FACTOR = 15;

export default {
  name: "About",
  computed: {
    content() {
      return this.$store.state.language;
    },
  },
  created() {
    document.title = this.content["TITLE_ABOUT"];
  },
  mounted() {
    this.$el.addEventListener("scroll", (e) => {
      if (this.$el.scrollTop >= SCROLL_UP_HEIGHT) {
        this.isScrollUpVisible = true;
      } else this.isScrollUpVisible = false;
    });
  },
  data() {
    return {
      blocks: [0, 1, 2, 3],
      isScrollUpVisible: false,
    };
  },
  components: {
    SoftSwiper,
    HardContainer,
    HardItem,
  },
  methods: {
    scrollToTop() {
      if (this.$el.scrollTop > 0) {
        this.$el.scrollTop -= this.$el.scrollTop / SCROLL_UP_FACTOR;
        requestAnimationFrame(this.scrollToTop);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$mainColor: #1a2639;
$mainColor1: #d9dad7;
$mainColor2: #707070;

.heading {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__background {
    display: block;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: -1;
    object-fit: cover;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000000, $alpha: 0.8);
    z-index: 0;
  }

  color: $mainColor1;
  &__title {
    font-size: 3em;
    margin: 1em;
    z-index: 1;
  }

  &__sub-title {
    font-size: 2em;
    z-index: 2;
  }
}

.info-block {
  margin-top: 300px;
  background-color: whitesmoke;

  &__title {
    color: white;
    background-color: $mainColor;
    font-size: 2em;
    padding: 1em;
    text-align: center;
  }

  &__data {
    margin: 0;
  }
}

.scroll-up {
  position: fixed;
  bottom: 5%;
  right: 5%;
  z-index: 1;
  transform: rotate(180deg);
  opacity: 0;
  transition: all 0.2s ease-in-out;
  background-color: #202020;
  padding: 0.5em;
  cursor: pointer;

  $size: 50px;
  width: $size;
  height: $size;
  border-radius: 50%;

  &:hover {
    transform: rotate(180deg) translateY(10%);
  }

  img {
    width: 100%;
    height: 100%;
  }

  &_visible {
    opacity: 1;
  }
}

@media screen and (max-width: 900px) {
  .info-block {
    margin-top: 200px;
  }
  .heading {
    &__title,
    &__sub-title {
      text-align: center;
    }
  }

  .info-block {
    &__title {
      font-size: 1.8em;
    }
  }
}

@media screen and (max-width: 530px) {
  .info-block {
    margin-top: 100px;
  }

  .heading {
    &__title {
      font-size: 2em;
    }
    &__sub-title {
      font-size: 1.2em;
    }
    &::after {
      background-attachment: initial;
    }
  }

  .info-block {
    &__title {
      font-size: 1.5em;
    }
  }
}
</style>
