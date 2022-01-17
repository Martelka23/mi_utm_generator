<template>
  <div class="about">
    <traffic-info
      v-for="info in infos"
      :key="info.id"
      :info="info"
    ></traffic-info>

    <div class="hero is-light">
      <div class="hero-body">
        <h1 class="title">Контакты</h1>
        <span class="is-size-5"><strong>Разработчик:</strong>
          Исупов Андрей (digital-аналитик)
           Почта: <a href="mailto:Andrey.Isupov@mediainstinctgroup.ru">Andrey.Isupov@mediainstinctgroup.ru</a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import TrafficInfo from '../components/information/TrafficInfo.vue';

export default {
  components: { TrafficInfo },
  name: 'Information',

  data() {
    return {
      
    };
  },

  computed: {
    infos() {
      return this.$store.getters.getInfos;
    }
  },

  methods: {
    
  },
};
</script>

<style scoped>
.hero.is-light {
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 40px;
  border-radius: 20px;
}
</style>