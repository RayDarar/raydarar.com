<template>
  <section id="home">
    <slot name="overlay" />
    <slot name="wrapper" />
    <slot name="explore" />
    <div class="home-wrapper">
      <div class="home-wrapper__profile-image">
        <img src="@/assets/soft-skills-image-1.jpg" alt="profile-image" />
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
  data() {
    return {};
  },
  methods: {
    goLink(link) {
      window.open(link, "_blank");
    }
  },
  computed: {
    content() {
      return this.$store.state.language;
    },
    isFirstOpen() {
      return this.$store.state.isFirstOpen;
    }
  },
  watch: {
    content(n, o) {
      document.title = n.TITLE_HOME;
    }
  },
  created() {
    document.title = this.content["TITLE_HOME"];
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
  background-color: rgba(255, 255, 255, 0.3);
  width: 40%;
  height: 70%;
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
  overflow: hidden;
}

.home-wrapper__profile-image > img {
  max-width: 100%;
  transition: transform 0.3s;
  border-radius: 50%;
}

.home-wrapper__profile-image > img:hover {
  transform: scale(1.5);
  transform-origin: 50% 50%;
}

.home-wrapper__name {
  font-size: 2.5em;
  font-weight: bold;
}

.home-wrapper__def {
  font-size: 1.5em;
}

.home-wrapper__icons-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 65%;
  justify-content: space-around;
}

.icons-wrapper__icon {
  width: 34px;
  cursor: pointer;
  position: relative;
}

.icon {
  transition: transform 0.5s;
}

@media screen and (max-width: 1114px) {
  .home-wrapper {
    width: 70%;
    height: 75%;
  }
}

@media screen and (max-width: 900px) {
  .home-wrapper {
    width: 85%;
    height: 75%;
  }

  .home-wrapper__name {
    font-size: 2.6em;
  }

  .home-wrapper__def {
    font-size: 1.3em;
  }
}

@media screen and (max-width: 530px) {
  .home-wrapper {
    width: 100%;
    height: 80%;
    border-radius: 0px;
  }

  .home-wrapper__profile-image {
    width: 60%;
  }

  .home-wrapper__profile-image > img:hover {
    transform: scale(1);
  }

  .home-wrapper__def {
    font-size: 1em;
  }

  .home-wrapper__icons-wrapper {
    width: 90%;
    justify-content: space-around;
  }

  .icons-wrapper__icon {
    width: 30px;
    cursor: pointer;
    position: relative;
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
