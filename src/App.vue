<template>
  <article>
    <navigation></navigation>
    <router-view></router-view>
  </article>
</template>

<script>
import Nav from "@/components/Navigation";

export default {
  name: "App",
  components: {
    Nav
  }
};
</script>

<style lang="scss"></style>
