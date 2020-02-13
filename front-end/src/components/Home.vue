<template>
  <section id="home">
    <span @click="$emit('wrap')">
      <i class="fas fa-bars menu-icon"></i>
    </span>
    This will be a Home section
  </section>
</template>

<style lang="scss">
#home {
  // background-color: black;
  color: white;
}
</style>
