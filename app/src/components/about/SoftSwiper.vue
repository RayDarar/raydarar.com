<template>
  <div class="swiper-container">
    <soft-item
      class="swiper-slide"
      :id="item.index"
      v-for="item in items"
      :key="item.index"
      :active="item.isActive"
      :data-id="item.index"
    ></soft-item>
  </div>
</template>

<script>
import SoftItem from "./SoftItem";

export default {
  name: "SoftSwiper",
  mounted() {},
  components: {
    SoftItem,
  },
  data() {
    return {
      items: [
        {
          index: 0,
          isActive: false,
        },
        {
          index: 1,
          isActive: false,
        },
        {
          index: 2,
          isActive: false,
        },
        {
          index: 3,
          isActive: false,
        },
      ],
      observer: null,
    };
  },
  methods: {
    setActive(e) {
      this.items[+e[0].target.dataset.id].isActive = e[0].isIntersecting;
    },
  },
  computed: {
    width() {
      return window.innerWidth;
    },
  },
  mounted() {
    if (this.width <= 530) {
      this.observer = new IntersectionObserver(this.setActive, {
        root: null,
        threshold: 0.8,
      });
  
      const elements = document.querySelectorAll(".swiper-slide[data-id]");
      for (const el of elements) this.observer.observe(el);
    }
  },
};
</script>

<style lang="scss" scoped>
.swiper-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 2em;
}
</style>
