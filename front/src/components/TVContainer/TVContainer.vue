<template>
  <div class="wrapper-tv" :class='color'>
    <div class="filter-img"></div>
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
    <button class="btn-next"></button>

    <div>
      <div class="marquee-text">
        <marquee-text :repeat="8" :duration="5">
          {{ marquee }}
          <span class="spacer"></span>
        </marquee-text>
      </div>
    </div>

    <div class="video-number">Track 
      {{ currentVideoIndex + 1 }} /
      {{ videoList.length }}
      </div>

    <div class="video-container">
      <div class="load-video">
        <div class="title-load">{{ titleTV }}</div>
      </div>
        <VuePlyr ref="plyr" v-if="linkLoaded" style="height: 100%; overflow: hidden">
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
      linkLoaded: false,
      player: "",
      color: "",
      serverLink: ""
    };
  },

  methods: {
    // selectionne vidéo au hasard dans le tableau de vidéos
    selectVideo: function () {
      this.video = this.videoList[0].id;
      this.marquee = this.videoList[0].artist;
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

      if (window.matchMedia("(min-width: 800px)").matches) {
        styleBtn.top = `${e.clientY}px`;
        styleBtn.left = `${e.clientX}px`;
        styleBtn.transform = "scaleX(-1)";
      }
    },

    mouseOverRight: function (e) {
      let styleBtn = document.querySelector(".btn-prev").style;

      if (window.matchMedia("(min-width: 800px)").matches) {
        styleBtn.top = `${e.clientY}px`;
        styleBtn.left = `${e.clientX}px`;
        styleBtn.transform = "scaleX(1)";
      }
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

      setTimeout(()=> {
        this.player.play();
      }, 2000)

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
      axios.get(`${this.serverLink}/api/`).then((response) => {
        
        // ajoute le titre
        let getData = response.data[this.idChannel - 1];
        this.titleTV = getData.name;
        this.pseudo = getData.pseudo;
        this.description = getData.description;
        this.color = getData.color;

        console.log(response);

        // ajoute la liste de videos
        for (let data of response.data[this.idChannel - 1].list) {
          this.videoList.push(data);
        }

        // selectionne la première vidéo
        this.selectVideo();

        this.linkLoaded = true;

        setTimeout(()=> {
          this.player = this.$refs.plyr.player;
          this.player.play();
          this.$refs.plyr.player.volume = 1
        }, 2000);
      });
    },

    toggleDescr: function () {
      document.querySelector(".infos-channel").classList.toggle("-visible");
    },
  },

  computed: {
  },

  created() {
    if (process.env.NODE_ENV === "development") {
      this.serverLink = 'http://localhost:3000';
    }

    console.log(process.env.NODE_ENV);


    // appel l'API
    this.callAPI();
  },

  mounted() {
    this.loadScreen();

    // récupère l'index de la video en cours
    this.currentVideoIndex = 0;

    // setinterval toutes les secondes, lance la vidéo suivante quand une fini
    this.changeAtEnd();
  },
};
</script>

<style lang="scss">
@import "../../App.scss";
@import "TVContainer.scss";
</style>
