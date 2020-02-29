<template>
  <section id="about">
    <slot name="overlay" />
    <slot name="wrapper" />
    <header class="heading">
      <h2 class="heading__title">{{ content["about-main-title"] }}</h2>
      <p class="heading__sub-title">{{ content["about-main-sub-title"] }}</p>
    </header>
  </section>
</template>

<script>
export default {
  name: "About",
  computed: {
    content() {
      return this.$store.state.language;
    }
  },
  created() {
    document.title = this.content["TITLE_ABOUT"];
  }
};
</script>

<style lang="scss" scoped>
$mainColor: #1a2639;
$mainColor1: #d9dad7;
$mainColor2: #707070;
$mainColor3: #c24d2c;

#about {
}

.heading {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.heading::after {
  content: "";
  display: block;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-image: url("../assets/quote-bg.jpg");
  background-attachment: fixed;
  z-index: -1;
  filter: blur(6px);
}

.heading__title {
  font-size: 3em;
  margin: 1em;
}

.heading__sub-title {
  font-size: 2em;
  color: $mainColor;
}
</style>
