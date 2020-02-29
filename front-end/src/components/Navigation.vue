<template>
  <nav id="nav">
    <li
      v-for="route in routes"
      :key="route.index"
      class="link"
      :class="{ link_active: index === route.index }"
      @click="routeTo(route.name, route.index)"
    >
      {{ content[route.content] }}
    </li>
    <div class="link-wrapper">
      <span
        class="link"
        @click="setLanguage('en')"
        :class="{ link_active: selectedLanguage === 'en' }"
        >en</span
      >
      <span
        class="link"
        @click="setLanguage('ru')"
        :class="{ link_active: selectedLanguage === 'ru' }"
        >ru</span
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      routes: [
        {
          index: 0,
          name: "/",
          content: "NAV_HOME"
        },
        {
          index: 1,
          name: "/about-me",
          content: "NAV_ABOUT"
        },
        {
          index: 2,
          name: "/history",
          content: "NAV_TIMELAPSE"
        },
        {
          index: 3,
          name: "/projects",
          content: "NAV_PROJECTS"
        },
        {
          index: 4,
          name: "/contacts",
          content: "NAV_CONTACTS"
        }
      ]
    };
  },
  computed: {
    content() {
      return this.$store.state.language;
    },
    index() {
      return this.$store.state.tabIndex;
    },
    selectedLanguage() {
      return this.$store.getters.selectedLanguage;
    }
  },
  methods: {
    setLanguage(lang) {
      this.$store.commit("setLanguage", lang);
    },
    routeTo(path, index) {
      if (this.$route.path !== path) {
        this.$router.push(path);
        this.$store.commit("setTabIndex", index);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#nav {
  background-color: rgba(62, 70, 82, 0.7);
  border-radius: 34px;
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
@media screen and (max-width: 1114px) {
  .link {
    list-style: none;
  }
}

@media screen and (max-width: 900px) {
  #nav {
    font-size: 0.8em;
  }
}

@media screen and (max-width: 530px) {
  #nav {
    width: 60%;
    height: 25%;
    top: 0;
    left: 0;
    margin-top: 0;
    border-radius: 0 0 34px 0;

    display: grid;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: 1fr 0.2fr;
    padding: 1em;
  }

  #nav > li {
    grid-column: 1 / 2;
  }

  .link-wrapper {
    grid-column: 2 / 3;
    grid-row: 4 / 5;
  }
}

@media screen and (max-width: 340px) {
  .home-wrapper__def {
    font-size: 0.9em;
  }

  .home-wrapper__name {
    font-size: 2.3em;
  }
}
</style>
