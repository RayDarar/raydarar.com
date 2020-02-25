<template>
  <section id="contacts">
    <slot name="overlay" />
    <slot name="wrapper" />
    <div class="title-block">
      <h2 class="title">{{ content.CONTACTS_TITLE }}</h2>
    </div>
    <div class="content-block">
      <div class="sub-title-block">
        <h3 class="sub-title" v-html="content.CONTACTS_SUB_TITLE"></h3>
      </div>
      <ul class="card-container">
        <li class="card" v-for="card in cards" :key="card.name">
          <img :src="getImgUrl(card.icon)" alt="social-media-icon" class="card-icon" />
          <span class="card-name">{{ card.name }}:</span>
          <span class="card-value" @click="goLink(card.link)">{{ card.value }}</span>
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
          link: "https://t.me/RayDarar"
        },
        {
          icon: "gmail-icon.svg",
          name: "Gmail",
          value: "dfqgth400@gmail.com",
          link: "https://mail.google.com/mail/?view=cm&fs=1&to=dfqgth400@gmail.com"
        },
        {
          icon: "whatsapp-icon.svg",
          name: "WhatsApp",
          value: "+7 (708) 614-46-72",
          link: "https://api.whatsapp.com/send?phone=77086144672"
        },
        {
          icon: "instagram-icon.svg",
          name: "Instagram",
          value: "@RayDarar",
          link: "https://www.instagram.com/raydarar/"
        },
        {
          icon: "vk-icon.svg",
          name: "VK",
          value: "@RayDarar",
          link: "https://vk.com/raydarar"
        },
        {
          icon: "github-icon.svg",
          name: "Github",
          value: "@RayDarar",
          link: "https://github.com/RayDarar"
        },
        {
          icon: "steam-icon.svg",
          name: "Steam",
          value: "cin>>RayDarar",
          link: "https://steamcommunity.com/id/RayDarar"
        }
      ]
    };
  },
  methods: {
    getImgUrl(image) {
      const images = require.context("@/assets/", false, /\.svg$/);
      return images("./" + image);
    },
    goLink(link) {
      window.open(link, "_blank");
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
    left: 6%;
    top: 4%;
  }
  background-color: white;
  width: 30%;
  height: 60%;
  border-radius: 5px;
}

.sub-title-block {
  background-color: #c24d2c;
  color: white;
  margin-top: 5%;
  padding: 1em;
}

.sub-title {
  font-weight: normal;
  font-size: 1em;
}

.card-container {
  margin-top: 4%;
  margin-left: 4%;
}

.card {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1.3em;
}
.card-icon {
  width: 28px;
}
.card-name {
  margin-left: 0.6em;
  width: 22%;
}
.card-value {
  justify-self: center;
  cursor: pointer;
  color: #1a2639;
  margin-left: 0.6em;
}

@media screen and (max-width: 1114px) {
  .content-block {
    width: 40%;
  }
}

@media screen and (max-width: 1024px) {
  .content-block {
    margin: {
      left: auto;
      right: auto;
      top: 10%;
    }
    width: 80%;
  }
}

@media screen and (max-width: 530px) {
  .title {
    font-size: 8vw;
  }
  .title-block {
    margin-top: 15%;
  }
  .sub-title {
    font-size: 0.8em;
  }
  .content-block {
    width: 100%;
    height: 100%;
  }

  .card-icon {
    width: 20px;
  }

  .card-name {
    width: 30%;
    font-size: 0.94em;
  }

  .card-value {
    font-size: 0.94em;
  }
}
</style>
