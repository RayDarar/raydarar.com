<template>
  <div class="hard-container">
    <div class="title">
      <span>{{ title }}</span>
    </div>
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "HardContainer",
  props: {
    title: String
  }
};
</script>

<style lang="scss" scoped>
$mainColor2: #707070;

.hard-container {
  display: grid;
  grid-template-columns: 1fr 8fr;
}

.title {
  border-right: 2px solid $mainColor2;
}

.container {
  padding: 1em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
