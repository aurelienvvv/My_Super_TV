<template>
  <div id="app" class="-theme-blue">
    <Header></Header>
    <transition name="slide" mode="out-in">
      <router-view />
    </transition>

    <div class="video-app">
      <VuePlyr ref="plyr" style="height: 100%; overflow: hidden">
        <div data-plyr-provider="youtube" :data-plyr-embed-id="video"></div>
      </VuePlyr>
    </div>
  </div>
</template>


<script>
import Header from "./components/Header/Header";
import Konami from "konami";
import VuePlyr from "vue-plyr";


export default {
  name: "App",
  components: {
    Header,
    VuePlyr,
  },

  data(){
    return {
      video: 'RkZsnTfJHSU'
    }
  },

  computed: {
    // appel l'objet player de plyr
    player() {
      return this.$refs.plyr.player;
    },
  },

  mounted(){
    console.log(process.env.NODE_ENV);

    new Konami(()=> {
      alert('Konami ???')
      document.querySelector('.video-app').style.display = 'block';

      setTimeout(()=> {
        this.player.play();
      }, 1000);

      setTimeout(()=> {
        this.player.stop();
        document.querySelector('.video-app').style.display = 'none';
      }, 5000);

    });
  }
};
</script>

<style lang="scss">
@import "App.scss";
</style>
