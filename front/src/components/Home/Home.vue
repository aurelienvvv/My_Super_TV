<template>
  <div class="home-container">
    <div class="theme-choice">
      <ul>
        <li>
          <a href="#" class="blue" @click="blueTheme"></a>
        </li>
        <li>
          <a href="#" class="violet" @click="violetTheme"></a>
        </li>
        <li>
          <a href="#" class="orange" @click="orangeTheme"></a>
        </li>
      </ul>
    </div>

    <div class="info-container">
      <p class="intro">Créé ta TV personnalisée avec ton contenu youtube favoris !</p>

      <div class="btns-wrapper">
        <router-link class="btn" to="/creer-tv">
          <span>Commencer</span>
        </router-link>
      </div>
    </div>
    <div class="filter-img"></div>
    <div class="video-container">
      <VuePlyr ref="plyr" style="height: 100%; overflow: hidden">
        <div data-plyr-provider="youtube" :data-plyr-embed-id="video"></div>
      </VuePlyr>
    </div>
  </div>
</template>

<script>
import VuePlyr from "vue-plyr";

export default {
  name: "Home",

  components: {
    VuePlyr,
  },

  data() {
    return {
      video: "iXzBdNjpYw0",
      videoList: [],
    };
  },

  computed: {
    // appel l'objet player de plyr
    player() {
      return this.$refs.plyr.player;
    },
  },

  methods: {
    blueTheme: function () {
      document.querySelector("#app").classList.add("-theme-blue");
      document.querySelector("#app").classList.remove("-theme-orange");
    },

    orangeTheme: function () {
      document.querySelector("#app").classList.add("-theme-orange");
      document.querySelector("#app").classList.remove("-theme-blue");
    },

    violetTheme: function () {
      document.querySelector("#app").classList.remove("-theme-orange");
      document.querySelector("#app").classList.remove("-theme-blue");
    },
  },

  mounted() {
    // lance le player après 3s
    setTimeout(() => {
      this.player.play();
      this.player.currentTime = 50;
      this.player.volume = 0;
    }, 3000);
  },
};
</script>

<style lang='scss'>
@import "../../App.scss";
@import "Home.scss";
</style>