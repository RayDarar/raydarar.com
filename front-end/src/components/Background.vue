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
    sky.setNumberOfStars(1000);
    sky.setFramerate(30);
    sky.startSimulation();
    this.$emit("load-content");
  }
};
</script>

<style lang="scss" scoped></style>
