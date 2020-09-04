<template>
  <div id="app" class="-theme-blue">
    <Header></Header>
    <transition name="slide" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>


<script>
import Header from "./components/Header/Header";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style lang="scss">
@import "App.scss";
</style>
