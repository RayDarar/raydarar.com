<template>
  <div>
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
    text: String,
    "is-right": Boolean
  }
};
</script>

<style lang="scss" scoped></style>
