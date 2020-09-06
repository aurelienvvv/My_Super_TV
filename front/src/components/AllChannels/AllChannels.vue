<template>
  <div class="wrapper-channels">
    <div class="title-wrapper">
      <h1>Explore les chaînes</h1>
      <p class="desc">Retrouve ici toutes les chaînes créées, y'a du lourd. Enjoy ;)</p>
    </div>
    <div class="all-channels">
      <div class="channel" v-for="(list, index) in listChannel" :key="index">
        <router-link :to="list.link">
          <div class="title">{{list.name}}</div>
          <div class="author">Par {{list.pseudo}}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      listChannel: [],
      index: 0,
    };
  },
  methods: {
    callAPI: function () {
      axios.get("http://localhost:3000/api/").then((response) => {
        for (let r of response.data) {
          this.listChannel.push(r);
          r.link = `/tv/${(this.index += 1)}`;
        }

        this.listChannel = this.listChannel.reverse();
      });
    },
  },

  mounted() {
    this.callAPI();
  },
};
</script>

<style lang='scss'>
@import "../../App.scss";
@import "AllChannels";
</style>