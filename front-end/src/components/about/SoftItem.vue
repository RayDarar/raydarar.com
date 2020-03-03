<template>
  <div class="soft-item">
    <div class="text-wrapper" :class="{ 'text-wrapper_right': 'is-right' }">
      <h3 class="title">{{ title }}</h3>
      <p class="text">
        {{ text }}
      </p>
    </div>
    <img :src="$root.getImgUrl(url)" />
  </div>
</template>

<script>
export default {
  name: "SoftItem",
  props: {
    url: String,
    title: String,
    text: String
  }
};
</script>

<style lang="scss" scoped>
.soft-item {
  width: 50%;
}
img {
  max-width: 100%;
}
.text-wrapper {
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
