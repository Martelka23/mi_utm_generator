<template>
<div class="traffic-source-info">
  <div class="hero is-light">
    <div class="hero-body" @click="toggleOpen">
      <div class="traffic_header">
        <img
          v-if="info.image"
          :src="require(`@/assets/images/${info.image}`)" 
          :alt="info.platform"
        >
        <p v-else class="is-size-3">{{info.platform}}</p>
        <span class="icon is-size-3"><i class="fas fa-chevron-down"></i></span>
      </div>
    </div>
  </div>
  
  <div class="hero is-light mt-1" v-if="isOpen">
    <div class="hero-body">
      <div 
        class="params-table"
        :class="{'mvisible': isOpen, 'mhidden': !isOpen}"
      >
        <div class="columns">
          <div class="column is-3 is-size-4"><strong>Параметр</strong></div>
          <div class="column is-3 is-size-4"><strong>Значение</strong></div>
          <div class="column is-6 is-size-4"><strong>Описание</strong></div>
        </div>
        <div v-for="param in info.params" :key="param">
          <div class="columns" v-for="value in param.values" :key="value">
            <div class="column is-3 is-size-4">{{ param.name }}</div>
            <div class="column is-3 is-size-4">{{ value.value }}</div>
            <div class="column is-6 is-size-5">{{ value.description }}</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'TrafficInfo',

  props: {
    info: {
      platform: String,
      image: String,
      params: [{
        name: String,
        values: [{
          value: String,
          description: String
        }]
      }]
    }
  },

  data() {
    return {
      isOpen: false,
    };
  },

  methods: {
    toggleOpen() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style scoped>
/* .traffic-source-info {
  margin-top: 20px;
  margin-right: 200px;
  margin-left: 200px;
} */

.hero.is-light {
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 40px;
  border-radius: 20px;
}

.traffic-source-info .traffic_header {
  display: flex;
  justify-content: space-between;
}

.traffic-source-info .params-table {
  margin-top: 30px;
}

th, td {
  background-color: #f5f5f5;
}

.params-table {
  transition: 1s;
}

.params-table.mhidden {
  visibility: hidden;
  opacity: 0;
  z-index: 0;
  /* transform: translateY(-3em); */
}

.params-table.mvisible {
  visibility: visible;
  opacity: 1;
  z-index: 1;
  /* transform: translateY(0em); */
}
</style>