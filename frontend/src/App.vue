<template>
<div>
  <div class="navbar has-shadow has-text-centered mb-6">
    <div class="havbar-brand">
      <router-link to="/" class="navbar-item">
        <img src="./assets/logo.png" alt="logo" style="max-height: 80px; height: 80px;">
      </router-link>
      <a class="navbar-burger" id="burger">
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>
    <div class="navbar-item is-size-3">MI UTM generator</div>
  </div>

  
  <router-view/>
</div>
</template>

<script>
export default {
  data() {
    return {
      logo: require('./assets/mi-logo.svg'),
    };
  },
};
</script>

<style scoped>

</style>
