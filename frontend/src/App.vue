<template>
<div>
  <div class="navbar has-shadow has-text-centered mb-6">
    <div class="havbar-brand">
      <router-link to="/" class="navbar-item">
        <img src="./assets/images/logo.png" alt="logo">
      </router-link>
      <a class="navbar-burger" id="burger" @click="showMobileMenu = !showMobileMenu">
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>
    <div class="navbar-start">
      <div class="navbar-item is-size-3">MI UTM Генератор</div>
    </div>
    <div class="navbar-menu" :class="{'is-active': showMobileMenu }">
      <div class="navbar-end">
        <router-link 
          to="/" 
          class="navbar-item is-size-4 mr-5"
          :class="{'underliner': !isMobile}"
        >Генератор</router-link>
        <router-link 
          to="/information" 
          class="navbar-item is-size-4 mr-5"
          :class="{'underliner': !isMobile}"
        >Информация</router-link>
      </div>
    </div>
  </div>

  
  <router-view/>
</div>
</template>

<script>
export default {
  data() {
    return {
      showMobileMenu: false,
    };
  },

  computed: {
    isMobile() {
      return window.innerWidth <= 1024;
    }
  },

  async beforeCreate() {
    await this.$store.dispatch('loadTraffics');
    await this.$store.dispatch('loadInfos');
  }
};
</script>

<style scoped>
img {
  max-height: 60px; 
  height: 60px;
}

.underliner:after {
  content: "";
  position: absolute;
  background-color: #de2617;
  height: 3px;
  width: 0;
  left: 0;
  bottom: 13px;
  transition: 0.3s;
}

.underliner:hover {
  color: black;
  background-color: #fff;
}

.underliner:hover:after {
  width: 100%;
}

/* .underliner.router-link-active:after {
  width: 100%;
} */

div.navbar-end a.navbar-item:focus {
  color: black;
  background: none;
}
</style>
