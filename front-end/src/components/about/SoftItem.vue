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
  filter: grayscale(100%);
  z-index: 0;
  transition: all 0.3s;
}
.text-wrapper {
  z-index: 1;
  color: white;
  background-color: rgba(0, 0, 0, 0.65);
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

  .title {
    font-size: 3em;
    transition: all 0.3s;
    opacity: 0;
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

  &:hover + img {
    filter: grayscale(0%);
  }

  &:hover .text,
  &:hover .title {
    opacity: 1;
  }
}

@media screen and (max-width: 1024px) {
  .text-wrapper {
    .title {
      font-size: 2.5em;
    }

    .text {
      font-size: 1.2em;
    }
  }
}

@media screen and (max-width: 900px) {
  .text-wrapper {
    .title {
      font-size: 2em;
    }
    .text {
      font-size: 1em;
    }
  }
}

@media screen and (max-width: 530px) {
  .soft-item {
    width: 100%;
  }
  .text-wrapper {
    .title {
      font-size: 1.8em;
    }

    .text {
      font-size: 1em;
      margin-left: 2em;
      margin-right: 2em;
    }
  }
}
</style>
