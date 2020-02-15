<template>
  <section id="home">
    <slot name="overlay" />
    <slot name="wrapper" />
    <div class="home-wrapper">
      <div class="home-wrapper__profile-image">
        <img src="@/assets/profile-image.jpg" />
      </div>
      <span class="home-wrapper__name">{{ content.HOME_NAME }}</span>
      <span class="home-wrapper__def">{{ content.HOME_SUB }}</span>
      <div class="home-wrapper__icons-wrapper">
        <img
          class="icons-wrapper__icon"
          src="@/assets/vk-icon.svg"
          alt="vk-icon"
          title="vk"
          @click="goLink('https://vk.com/raydarar')"
        />
        <img
          class="icons-wrapper__icon"
          src="@/assets/github-icon.svg"
          alt="github-icon"
          title="github"
          @click="goLink('https://github.com/RayDarar')"
        />
        <img
          class="icons-wrapper__icon"
          src="@/assets/instagram-icon.svg"
          alt="instagram-icon"
          title="instagram"
          @click="goLink('https://www.instagram.com/raydarar/')"
        />
        <img
          class="icons-wrapper__icon"
          src="@/assets/gmail-icon.svg"
          alt="gmail-icon"
          title="gmail"
          @click="goLink('https://mail.google.com/mail/?view=cm&fs=1&to=dfqgth400@gmail.com')"
        />
        <img
          class="icons-wrapper__icon"
          src="@/assets/steam-icon.svg"
          alt="steam-icon"
          title="steam"
          @click="goLink('https://steamcommunity.com/id/RayDarar')"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
  methods: {
    goLink(link) {
      window.open(link, "_blank");
    }
  },
  computed: {
    content() {
      return this.$store.state.language;
    }
  },
  watch: {
    content(n, o) {
      document.title = n.TITLE_HOME;
    }
  }
};
</script>

<style lang="scss">
#home {
  color: white;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  border-radius: 34px;
}

.home-wrapper {
  background-color: rgba(255, 255, 255, 0.4);
  width: 35%;
  height: 65%;
  border-radius: 34px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: 1em;
}

.home-wrapper__profile-image {
  margin-top: 2em;
  border-radius: 50%;
  width: 45%;
}

.home-wrapper__profile-image > img {
  max-width: 100%;
  transition: 0.3s;
}

.home-wrapper__profile-image > img:hover {
  transform: scale(1.5);
  transform-origin: 50% 50%;
}

.home-wrapper__name {
  font-size: 2.5em;
  font-weight: 500;
}

.home-wrapper__def {
  font-size: 1.2em;
}

.home-wrapper__icons-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
  justify-content: space-around;
}

.icons-wrapper__icon {
  width: 34px;
  cursor: pointer;
  position: relative;
}

.icon {
  transition: 0.5s;
}
</style>
