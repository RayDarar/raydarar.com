<template>
  <article class="root">
    <navigation class="root__nav"></navigation>
    <router-view
      :class="{ root__component: !isWrapped, root__component_wrapped: isWrapped }"
    ></router-view>
  </article>
</template>

<script>
import Nav from "@/components/Navigation";

export default {
  name: "App",
  components: {
    navigation: Nav
  },
  data() {
    return {
      isWrapped: true
    };
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");

$navWidth: 80%;
$navLeft: (100% - $navWidth) / 2;
$navHeight: 10%;

@mixin def_rect($x, $y, $width, $height) {
  left: $x;
  top: $y;
  width: $width;
  height: $height;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  border: none;
  font: {
    size: 1rem;
    family: Montserrat;
  }
}

.root {
  display: flex;
  flex-direction: column;

  @include def_rect(0, 0, 100vw, 100vh);

  &__nav {
    position: absolute;
    @include def_rect($navLeft, 0, $navWidth, $navHeight);
    background-color: red;
    z-index: 0;
  }

  &__component_wrapped {
    position: absolute;
    @include def_rect($navLeft, $navHeight, $navWidth, 100% - $navHeight * 2);
    background-color: green;
  }

  &__component {
    position: absolute;
    @include def_rect(0, 0, 100%, 100%);
    z-index: 1;
    background-color: green;
  }
}
</style>
