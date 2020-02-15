<template>
  <nav id="nav">
    <li class="link" @click="$router.push('/')">{{ content.NAV_HOME }}</li>
    <li class="link" @click="$router.push('about-me')">{{ content.NAV_ABOUT }}</li>
    <li class="link">{{ content.NAV_TIMELAPSE }}</li>
    <li class="link">{{ content.NAV_PROJECTS }}</li>
    <li class="link">{{ content.NAV_CONTACTS }}</li>
    <div class="link-wrapper">
      <span class="link" @click="setLanguage('en')">en</span>
      <span class="link" @click="setLanguage('ru')">ru</span>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {};
  },
  computed: {
    content() {
      return this.$store.state.language;
    }
  },
  methods: {
    setLanguage(lang) {
      this.$store.commit("setLanguage", lang);
    }
  }
};
</script>

<style lang="scss" scoped>
#nav {
  background-color: rgba(62, 70, 82, 0.7);
  border-radius: 34px;
  margin: 1em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.link-wrapper {
  display: flex;
  flex-direction: column;
}

.link {
  color: white;
  text-decoration: none;
  font-size: 1.2em;
  opacity: 0.8;
  transition: 0.3s;
  cursor: pointer;
}

.link-active {
  opacity: 1;
  border-bottom: 1px solid white;
}

.link:hover {
  opacity: 1;
}
</style>
