<template>
  <div class="about">
    <traffic-info
      :traffic="yandex_direct"
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
      yandex_direct: {
        img: "yandex_direct.png",
        params: [
          {name: '{campaign_id}', value: 'Идентификатор рекламной кампании. Передает число.'},
          {name: '{campaign_name}', value: 'Название кампании. Передает текст до 60 символов.'},
          {name: '{ad_id}', value: 'Передает число-идентификатор объявления.'},
          {name: '{keyword}', value: 'Передает текст ключевой фразы, по которой было показано объявление.'},
        ]
      },
    };
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