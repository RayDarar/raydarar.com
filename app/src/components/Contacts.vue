<template>
  <section id="contacts">
    <slot name="overlay" />
    <slot name="wrapper" />
    <slot name="explore" />
    <div class="title-block">
      <h2 class="title">{{ content.CONTACTS_TITLE }}</h2>
    </div>
    <div class="content-block">
      <div class="sub-title-block">
        <h3 class="sub-title" v-html="content.CONTACTS_SUB_TITLE"></h3>
      </div>
      <ul class="card-container">
        <li class="card" v-for="card in cards" :key="card.name">
          <img
            :src="$root.getImgUrl(card.icon)"
            :alt="card.name"
            class="card-icon"
          />
          <span class="card-name">{{ card.name }}:</span>
          <a class="card-value" :href="card.link" target="_blank">{{
            card.value
          }}</a>
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
    },
  },
  data() {
    return {
      cards: [
        {
          icon: "telegram-icon.svg",
          name: "Telegram",
          value: "@RayDarar",
          link: "https://t.me/RayDarar",
        },
        {
          icon: "gmail-icon.svg",
          name: "Gmail",
          value: "ansar.ryspekov@gmail.com",
          link:
            "https://mail.google.com/mail/?view=cm&fs=1&to=ansar.ryspekov@gmail.com",
        },
        {
          icon: "github-icon.svg",
          name: "Github",
          value: "@RayDarar",
          link: "https://github.com/RayDarar",
        },
        {
          icon: "linkedin_icon.svg",
          name: "LinkedIn",
          value: "RayDarar",
          link: "https://www.linkedin.com/in/raydarar",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
$mainColor: #1a2639;
$mainColor1: #d9dad7;
$mainColor2: #707070;
$mainColor3: #c24d2c;

#contacts {
  overflow: hidden;
}

.title-block {
  background-color: $mainColor;
  margin-top: 5%;
  padding: 1em;
}

.title {
  color: white;
  font-size: 2.2em;
  font-weight: normal;
  text-align: center;
}

.content-block {
  margin: {
    left: auto;
    right: auto;
    top: 5%;
  }
  background-color: white;
  width: 30%;
  height: 60%;
  border-radius: 5px;
}

.sub-title-block {
  background-color: $mainColor;
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

  &-icon {
    width: 28px;
  }

  &-name {
    margin-left: 0.6em;
    width: 22%;
  }

  &-value {
    justify-self: center;
    cursor: pointer;
    color: #1a2639;
    margin-left: 0.6em;
    text-decoration: none;
  }
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
    margin-top: 5%;
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
