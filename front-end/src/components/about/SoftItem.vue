<template>
  <div class="soft-item">
    <div class="text-wrapper">
      <h3 class="title">{{ content["about_soft_blocks"][id].title }}</h3>
      <p class="text">
        {{ content["about_soft_blocks"][id].text }}
      </p>
    </div>
    <img :src="$root.getImgUrl(`soft-skills-image-${id + 1}.jpg`)" />
  </div>
</template>

<script>
export default {
  name: "SoftItem",
  props: {
    id: Number
  },
  computed: {
    content() {
      return this.$store.state.language;
    }
  }
};
</script>

<style lang="scss" scoped>
.soft-item {
  position: relative;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1em;
  cursor: pointer;

  .title {
    font-size: 3em;
    transition: all 0.3s;
  }

  .text {
    font-size: 1.5em;
    margin-left: 3em;
    margin-right: 3em;
    letter-spacing: 1px;
    transition: all 0.3s;
    opacity: 0;
    top: 2em;
    position: relative;
  }

  &:hover .text {
    opacity: 1;
  }
}
</style>
