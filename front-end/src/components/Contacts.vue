<template>
  <section id="contacts">
    <slot name="overlay" />
    <slot name="wrapper" />
    <div class="title-block">
      <h2 class="title">{{ content.CONTACTS_TITLE }}</h2>
    </div>
    <div class="content-block">
      <div class="sub-title-block">
        <h3 class="sub-title">{{ content.CONTACTS_SUB_TITLE }}</h3>
      </div>
      <ul class="card-container">
        <li class="card" v-for="card in cards" :key="card.name">
          <img :src="getImgUrl(card.icon)" alt="social-media-icon" class="card-icon" />
          <span class="card-name">{{ card.name }}:</span>
          <span class="card-value">{{ card.value }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contacts",
  computed: {
    content() {
      return this.$store.state.language;
    }
  },
  data() {
    return {
      cards: [
        {
          icon: "telegram-icon.svg",
          name: "Telegram",
          value: "@RayDarar",
          link: ""
        },
        {
          icon: "gmail-icon.svg",
          name: "Gmail",
          value: "dfqgth400@gmail.com",
          link: ""
        },
        {
          icon: "whatsapp-icon.svg",
          name: "WhatsApp",
          value: "+7 (708) 614-46-72",
          link: ""
        },
        {
          icon: "instagram-icon.svg",
          name: "Instagram",
          value: "@RayDarar",
          link: ""
        },
        {
          icon: "vk-icon.svg",
          name: "VK",
          value: "@RayDarar",
          link: ""
        },
        {
          icon: "github-icon.svg",
          name: "Github",
          value: "@RayDarar",
          link: ""
        },
        {
          icon: "steam-icon.svg",
          name: "Steam",
          value: "cin>>RayDarar",
          link: ""
        }
      ]
    };
  },
  methods: {
    getImgUrl(image) {
      const images = require.context("@/assets/", false, /\.svg$/);
      return images("./" + image);
    }
  }
};
</script>

<style lang="scss" scoped>
.title-block {
  background-color: #d9dad7;
  margin-top: 5%;
  padding: 1em;
}

.title {
  font-size: 2.2em;
  font-weight: normal;
  margin-left: 5%;
}

.content-block {
  margin: {
    left: 5%;
    top: 4%;
  }
  background-color: white;
  width: 400px;
  padding: 1em;
  height: 60%;
}
</style>
