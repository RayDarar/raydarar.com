<template>
  <section id="about">
    <slot name="overlay" />
    <slot name="wrapper" />
    <slot name="explore" />
    <header class="heading" v-if="$root.isProd">
      <h2 class="heading__title">{{ content["about_main_title"] }}</h2>
      <p class="heading__sub-title">{{ content["about_main_subtitle"] }}</p>
    </header>
    <div class="info-block soft-skills">
      <h3 class="info-block__title">{{ content["about_soft_title"] }}</h3>
      <soft-swiper class="info-block__data"></soft-swiper>
    </div>
    <div class="info-block hard-skills">
      <h3 class="info-block__title">{{ content["about_hard_title"] }}</h3>
      <div class="info-block__data"></div>
    </div>
  </section>
</template>

<script>
import SoftSwiper from "./about/SoftSwiper";

export default {
  name: "About",
  computed: {
    content() {
      return this.$store.state.language;
    }
  },
  created() {
    document.title = this.content["TITLE_ABOUT"];
  },
  data() {
    return {
      blocks: [0, 1, 2, 3]
    };
  },
  components: {
    SoftSwiper
  }
};
</script>

<style lang="scss" scoped>
$mainColor: #1a2639;
$mainColor1: #d9dad7;
$mainColor2: #707070;
$mainColor3: #c24d2c;

.heading {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &::after {
    content: "";
    display: block;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    position: absolute;
    background-image: url("../assets/quote-bg.jpg");
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: -1;
    filter: blur(6px);
  }

  &__title {
    font-size: 3em;
    margin: 1em;
  }

  &__sub-title {
    font-size: 2em;
    color: $mainColor;
  }
}

.info-block {
  margin-top: 300px;
  background-color: white;

  &__title {
    color: white;
    background-color: $mainColor3;
    font-size: 2em;
    padding: 0.5em;
    margin-top: 2em;
    text-align: center;
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
  }

  .info-block {
    &__title {
      font-size: 1.5em;
    }
  }
}
</style>
