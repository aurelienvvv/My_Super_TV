<template>
  <div class="header">
    <router-link to="/">
      <h1>My Super TV</h1>
    </router-link>
    <div id="nav">
      <router-link to="/explore">Explorer</router-link>
    </div>
  </div>
</template>

<script>
export default { name: "HelloWorld" };
</script>

<style lang='scss'>
@import "../../App.scss";
@import "Header.scss";
</style>