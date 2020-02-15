<template>
  <nav id="nav">
    <li class="link" :class="{ link_active: index === 0 }" @click="routeTo('/', 0)">
      {{ content.NAV_HOME }}
    </li>
    <li class="link" :class="{ link_active: index === 1 }" @click="routeTo('/about-me', 1)">
      {{ content.NAV_ABOUT }}
    </li>
    <li class="link" :class="{ link_active: index === 2 }" @click="routeTo('/timelapse', 2)">
      {{ content.NAV_TIMELAPSE }}
    </li>
    <li class="link" :class="{ link_active: index === 3 }" @click="routeTo('/projects', 3)">
      {{ content.NAV_PROJECTS }}
    </li>
    <li class="link" :class="{ link_active: index === 4 }" @click="routeTo('/contacts', 4)">
      {{ content.NAV_CONTACTS }}
    </li>
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
    },
    index() {
      return this.$store.state.tabIndex;
    }
  },
  methods: {
    setLanguage(lang) {
      this.$store.commit("setLanguage", lang);
    },
    routeTo(path, index) {
      this.$store.commit("setTabIndex", index);
      this.$emit("route-to", path);
    }
  }
};
</script>

<style lang="scss" scoped>
#nav {
  background-color: rgba(62, 70, 82, 0.7);
  border-radius: 34px;
  // margin: 1em;
  margin-top: 1em;
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

.link_active {
  opacity: 1;
}

.link:hover {
  opacity: 1;
}
</style>
