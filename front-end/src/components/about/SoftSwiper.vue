<template>
  <div class="swiper-container">
    <soft-item class="swiper-slide" :id="0"></soft-item>
    <soft-item class="swiper-slide" :id="1"></soft-item>
    <soft-item class="swiper-slide" :id="2"></soft-item>
    <soft-item class="swiper-slide" :id="3"></soft-item>
  </div>
</template>

<script>
import SoftItem from "./SoftItem";

export default {
  name: "SoftSwiper",
  mounted() {},
  components: {
    SoftItem
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.swiper-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 2em;
}
</style>
