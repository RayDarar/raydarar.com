<template>
  <article class="root">
    <navigation class="root__nav"></navigation>
    <router-view class="root__component"></router-view>
  </article>
</template>

<script>
import Nav from "@/components/Navigation";

export default {
  name: "App",
  components: {
    navigation: Nav
  }
};
</script>

<style lang="scss">
$navWidth: 80%;
$navLeft: (100% - $navWidth) / 2;
$navHeight: 10%;

* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
  border: none;
  font-size: 1rem;
}

.root {
  display: flex;
  flex-direction: column;

  height: 100vh;
  width: 100vw;

  &__nav {
    position: absolute;
    width: $navWidth;
    left: $navLeft;
    height: $navHeight;
    background-color: red;
  }

  &__component {
    position: absolute;
    background-color: green;
    width: $navWidth;
    left: $navLeft;
    top: $navHeight;
    height: 100% - $navHeight * 2;
  }
}
</style>
