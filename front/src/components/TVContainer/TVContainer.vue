<template>
  <div class="wrapper-tv">
    <div class="btn-info-channel" @click="toggleDescr"></div>
    <div class="infos-channel">
      <div class="title">{{ titleTV }}</div>
      <div class="pseudo">Par {{ pseudo }}</div>
      <div>{{ description }}</div>
    </div>

    <div @mousemove="mouseOver" class="left-part">
      <a href="#" @click="prevVideo"></a>
    </div>

    <div @mousemove="mouseOverRight" class="right-part">
      <a href="#" @click="nextVideo"></a>
    </div>
    <button class="btn-prev"></button>

    <div>
      <div class="marquee-text">
        <marquee-text :repeat="8" :duration="5">
          {{ marquee }}
          <span class="spacer"></span>
        </marquee-text>
      </div>
    </div>

    <div class="video-container">
      <div class="load-video">
        <div class="title-load">{{ titleTV }}</div>
      </div>
      <VuePlyr ref="plyr" style="height: 100%; overflow: hidden">
        <div data-plyr-provider="youtube" :data-plyr-embed-id="video"></div>
      </VuePlyr>
    </div>
  </div>
</template>

<script>
import VuePlyr from "vue-plyr";
import MarqueeText from "vue-marquee-text-component";
import axios from "axios";

export default {
  name: "HelloWorld",
  components: {
    VuePlyr,
    MarqueeText,
  },
  data() {
    return {
      video: "",
      currentVideoIndex: "",
      videoList: [],
      mute: false,
      onPlay: true,
      marquee: "Welcome",
      titleTV: "",
      titre: "",
      btnEditActive: false,
      idChannel: this.$route.params.id,
      pseudo: "",
      description: "",
    };
  },

  methods: {
    // selectionne vidéo au hasard dans le tableau de vidéos
    selectVideo: function () {
      // let randomIndex = Math.floor(Math.random() * this.videoList.length);
      this.video = this.videoList[0].id;
      this.marquee = this.videoList[0].artist;
      console.log(this.video);
    },

    // modifie les options du player video
    playerOptions: function () {
      this.player.config.autoplay = true;
      this.player.config.autopause = false;
      this.player.config.displayDuration = false;
      this.player.config.clickToPlay = false;
    },

    // au click sur le bouton pause / play
    pausePlayer: function () {
      if (this.onPlay) {
        this.player.pause();
      } else {
        this.player.play();
      }

      this.onPlay = !this.onPlay;
    },

    // au click sur le bouton mute / unmute
    mutePlayer: function () {
      this.mute = !this.mute;

      if (this.mute) {
        this.player.volume = 0;
      } else {
        this.player.volume = 1;
      }
    },

    // au click sur le bouton précedent
    nextVideo: function () {
      if (this.currentVideoIndex === this.videoList.length - 1) {
        this.currentVideoIndex = 0;
      } else {
        this.currentVideoIndex += 1;
      }

      this.video = this.videoList[this.currentVideoIndex].id;

      setTimeout(() => {
        this.marquee = this.videoList[this.currentVideoIndex].artist;
      }, 1000);

      this.sourceVideo();
    },

    // au click sur le bouton précedent
    prevVideo: function () {
      if (this.currentVideoIndex === 0) {
        this.currentVideoIndex = this.videoList.length - 1;
      } else {
        this.currentVideoIndex -= 1;
      }

      this.video = this.videoList[this.currentVideoIndex].id;

      setTimeout(() => {
        this.marquee = this.videoList[this.currentVideoIndex].artist;
      }, 1000);

      this.sourceVideo();
    },

    mouseOver: function (e) {
      let styleBtn = document.querySelector(".btn-prev").style;

      setTimeout(() => {
        styleBtn.top = `${e.clientY}px`;
        styleBtn.left = `${e.clientX}px`;
        styleBtn.transform = "scaleX(-1)";
      }, 100);
    },

    mouseOverRight: function (e) {
      let styleBtn = document.querySelector(".btn-prev").style;

      styleBtn.top = `${e.clientY}px`;
      styleBtn.left = `${e.clientX}px`;
      styleBtn.transform = "scaleX(1)";
    },

    // écran de chargement entre 2 vidéos
    loadScreen: function () {
      let loadClass = document.querySelector(".load-video");

      loadClass.classList.add("active");

      setTimeout(() => {
        loadClass.classList.remove("active");
      }, 3000);
    },

    // change la vidéo dans le player
    sourceVideo: function () {
      this.player.source = {
        type: "video",
        sources: [
          {
            src: this.video,
            provider: "youtube",
          },
        ],
      };

      this.loadScreen();
    },

    changeAtEnd: function () {
      setInterval(() => {
        if (
          parseInt(this.player.currentTime) ===
          parseInt(this.player.media.duration) - 5
        ) {
          this.nextVideo();
        }
      }, 1000);

      this.loadScreen();
    },

    callAPI: function () {
      axios.get("/api/").then((response) => {
        // ajoute le titre
        let getData = response.data[this.idChannel - 1];
        this.titleTV = getData.name;
        this.pseudo = getData.pseudo;
        this.description = getData.description;

        console.log(response);

        // ajoute la liste de videos
        for (let data of response.data[this.idChannel - 1].list) {
          this.videoList.push(data);
        }

        // selectionne la première vidéo
        this.selectVideo();
      });
    },

    toggleDescr: function () {
      document.querySelector(".infos-channel").classList.toggle("-visible");
    },
  },

  computed: {
    // appel l'objet player de plyr
    player() {
      return this.$refs.plyr.player;
    },
  },

  created() {
    // appel l'API
    this.callAPI();
  },

  mounted() {
    // récupère l'index de la video en cours
    // this.currentVideoIndex = this.videoList.findIndex((v) => v === this.video);
    this.currentVideoIndex = 0;

    // règle les options de plyr
    this.playerOptions();

    // lance le player après 3s
    setTimeout(() => {
      console.log('mounted play video');
      this.player.play();
      this.player.volume = 1;
    }, 3000);

    // setinterval toutes les secondes, lance la vidéo suivante quand une fini
    this.changeAtEnd();
  },
};
</script>

<style lang="scss">
@import "../../App.scss";
@import "TVContainer.scss";
</style>
