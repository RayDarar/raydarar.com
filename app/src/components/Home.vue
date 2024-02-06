<template>
  <section id="home">
    <slot name="overlay" />
    <slot name="wrapper" />
    <slot name="explore" />
    <div class="home-wrapper">
      <div class="home-wrapper__profile-image">
        <img src="@/assets/soft-skills-image-1.jpg" alt="profile-image" />
      </div>
      <div class="home-wrapper__name">
        <span class="name">{{ content.HOME_NAME }}</span>
        <span class="description">{{ content.HOME_SUB }}</span>
      </div>
      <div class="home-wrapper__links">
        <router-link class="link" to="/contacts">{{
          content.NAV_CONTACTS
        }}</router-link>
        <a class="link" href="https://github.com/RayDarar">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
  computed: {
    content() {
      return this.$store.state.language;
    },
    isFirstOpen() {
      return this.$store.state.isFirstOpen;
    },
  },
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
  background-color: rgba(255, 255, 255, 0.1);
  width: 32%;
  height: 60%;
  border-radius: 34px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-size: 1em;

  &__profile-image {
    margin-top: 2em;
    border-radius: 50%;
    width: 45%;
    overflow: hidden;
  }

  &__profile-image > img {
    max-width: 100%;
    transition: transform 0.3s;
    transform-origin: 50% 50%;
    transform: scale(1.2);
    border-radius: 50%;
  }

  &__profile-image > img:hover {
    transform: scale(1.5);
  }

  &__name {
    display: flex;
    flex-direction: column;
    text-align: center;
    .name {
      font-size: 2.5em;
      font-weight: bold;
    }
    .description {
      font-size: 1.2em;
      color: lightgray;
    }
  }

  &__links {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 70%;
    justify-content: space-around;

    .link {
      color: white;
      font-size: 1.2em;
    }
  }
}

.icon {
  transition: transform 0.5s;
}

@media screen and (max-width: 1440px) {
  .home-wrapper {
    width: 35%;
    height: 60%;
  }
}

@media screen and (max-width: 1024px) {
  .home-wrapper {
    width: 85%;
    height: 75%;
  }
}

@media screen and (max-width: 530px) {
  .home-wrapper {
    width: 100%;
    height: 80%;
    border-radius: 0px;

    &__profile-image {
      width: 60%;
    }

    &__name {
      .name {
        font-size: 2.2em;
      }
      .description {
        font-size: 1em;
      }
    }

    &__links {
      width: 90%;
      justify-content: space-around;
    }
  }
}

@media screen and (max-width: 340px) {
  .home-wrapper__name {
    .name {
      font-size: 2.1em;
    }
    .description {
      font-size: 0.9em;
    }
  }
}
</style>
