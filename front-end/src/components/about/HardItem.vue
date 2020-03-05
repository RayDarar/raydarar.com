<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  name: "HardItem",
  props: {
    color: {
      type: String,
      default: "#FFFFFF"
    }
  }
};
</script>
