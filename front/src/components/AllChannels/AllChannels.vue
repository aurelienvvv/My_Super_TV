<template>
  <div class="all-channels">
    <div class="channel" v-for="(list, index) in listChannel" :key="index">
      <router-link :to="list.link">
        <div class="title">{{list.name}}</div>
      </router-link>
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
      axios.get("/api/").then((response) => {
        for (let r of response.data) {
          this.listChannel.push(r);
          r.link = `/tv/${(this.index += 1)}`;
        }

        console.log(this.listChannel);
      });
    },
  },

  mounted() {
    this.callAPI();
  },
};
</script>

<style lang='scss'>
@import "AllChannels";
</style>