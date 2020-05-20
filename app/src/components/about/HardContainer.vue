<template>
  <div class="hard-container">
    <h3 class="title">
      {{ title }}
    </h3>
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
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

.title {
  border-bottom: 2px solid $mainColor2;
  padding: 1em;
  font-size: 2em;
}

.container {
  padding: 1em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

@media screen and (max-width: 530px) {
  .hard-container {
    width: 100%;
  }
}

</style>
