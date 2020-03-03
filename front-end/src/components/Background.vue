<template>
  <div id="canvas"></div>
</template>

<script>
import sky from "@/helpers/NightSky";

export default {
  methods: {},
  mounted() {
    sky.createCanvas("canvas");
    sky.setBackgroundColors("#123578", "#1A2639");

    if (this.$root.isProd) {
      sky.setNumberOfStars(1000);
      sky.setFramerate(30);
    } else {
      sky.setNumberOfStars(1);
      sky.setFramerate(1);
    }

    sky.startSimulation();
  }
};
</script>

<style lang="scss" scoped></style>
