<template>
  <div class="hard-item" :class="{ 'hard-item_flex': resize }">
    <slot />
  </div>
</template>

<script>
export default {
  name: "HardItem",
  props: {
    resize: Boolean
  }
};
</script>

<style lang="scss" scoped>
@mixin setRect($width) {
  width: $width;
  height: $width;
}

.hard-item {
  transition: background-color 0.3s;
  @include setRect(150px);
  margin: 2em;
  box-shadow: 10px 10px 20px rgba($color: #000000, $alpha: 0.08);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
}

.hard-item_flex {
  width: 100% !important;
  font-size: 1rem !important;
}

@media screen and (max-width: 900px) {
  .hard-item {
    margin: 1em;
    @include setRect(130px);
  }
}

@media screen and (max-width: 530px) {
  .hard-item {
    @include setRect(80px);
    font-size: 0.8em;
    margin: 0.5em;
  }
}
</style>
