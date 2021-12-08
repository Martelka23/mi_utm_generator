<template>
<div class="generator-utm">

  <div class="columns">
    <div class="column is-6">
      <div class="hero is-light">
        <div class="hero-body">
          <div class="subtitle is-size-3">Адрес целевой страницы</div>
          <div class="field has-addons">
            <p class="control">
              <span class="select is-rounded is-medium">
                <select v-model="protocol">
                  <option value="https://">https://</option>
                  <option value="http://">http://</option>
                </select>
              </span>
            </p>
            <p class="control">
              <input 
                type="text" 
                class="input is-rounded is-medium" 
                placeholder="site.ru"
                v-model="site"  
              >
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="column is-6">
      <div class="hero is-light">
        <div class="hero-body">
          <div class="subtitle is-size-3">Источник трафика</div>
          <div class="control">
            <span class="select is-medium">
              <select>
                <option value="">Собственный</option>
                <option value="">Instagram</option>
                <option value="">ВКонтакте</option>
                <option value="">Google Ads</option>
                <option value="">YouTube</option>
                <option value="">Facebook</option>
                <option value="">Yandex Direct</option>
                <option value="">myTarget</option>
              </select>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  

  <div class="columns">
    <div class="column is-6">
      <div class="hero is-light">
        <div class="hero-body">
          <div class="subtitle is-size-3">Обязательные параметры</div>
          <label class="is-size-4">Источник</label>
          <p class="control">
            <input 
              type="text" 
              class="input is-rounded is-medium mt-3 mb-5" 
              placeholder="yandex, google, instagram"
              v-model="source"
            >
          </p>
          <label class="is-size-4">Тип трафика</label>
          <p class="control">
            <input 
              type="text" 
              class="input is-rounded is-medium mt-3 mb-5" 
              placeholder="cpc, cpm, social"
              v-model="medium"
            >
          </p>
          <label class="is-size-4">Кампания</label>
          <p class="control">
            <input 
              type="text" 
              class="input is-rounded is-medium mt-3" 
              placeholder="campaign"
              v-model="campaign"  
            >
          </p>
        </div>
      </div>
    </div>

    <div class="column is-6">
      <div class="hero is-light">
        <div class="hero-body">
          <div class="subtitle is-size-3">Необязательные параметры</div>
          <label class="is-size-4">Содержание объявления</label>
          <p class="control">
            <input 
              type="text" 
              class="input is-rounded is-medium mt-3 mb-5" 
              placeholder="content"
              v-model="content"
            >
          </p>
          <label class="is-size-4">Ключевое слово</label>
          <p class="control">
            <input 
              type="text" 
              class="input is-rounded is-medium mt-3 mb-5" 
              placeholder="term"
              v-model="term"
            >
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="hero is-light">
    <div class="hero-body">
      <div class="result-header">
        <span class="subtitle is-size-3">Готовая ссылка</span>
        <div class="result-buttons">
          <button class="button is-medium is-rounded mr-4" @click="clean">
            <span class="icon">
              <i class="fas fa-copy"></i>
            </span>
            <span>Очистить</span>
          </button>
          <button class="button is-medium is-rounded" @click="copy">
            <span class="icon">
              <i class="fas" :class="{'fa-check': copied, 'fa-copy': !copied}"></i>
            </span>
            <span>{{copied ? 'Скопировано' : 'Копировать'}}</span>
          </button>
        </div>
      </div>
      <p class="control">
        <input 
          type="text" 
          class="input is-rounded is-medium" 
          readonly
          v-model="resultLink"  
        >
      </p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'GeneratorUtm',

  data() {
    return {
      protocol: 'https://',
      site: '',
      source: '',
      medium: '',
      campaign: '',
      content: '',
      term: '',
      copied: false
    };
  },

  computed: {
    resultLink() {
      this.copied = false;

      let result = `${this.protocol}`;
      let utms = [];

      if (this.site) {
        result += `${this.site}/?`;
      }

      if (this.source) {
        utms.push(`utm_source=${this.source}`);
      }

      if (this.medium) {
        utms.push(`utm_medium=${this.medium}`);
      }

      if (this.campaign) {
        utms.push(`utm_campaign=${this.campaign}`);
      }

      if (this.content) {
        utms.push(`utm_content=${this.content}`);
      }

      if (this.term) {
        utms.push(`utm_term=${this.term}`);
      }

      result += utms.join('&');

      return result;
    },
  },

  methods: {
    clean() {
      this.protocol = 'https://';
      this.site = '';
      this.source = '';
      this.medium = '';
      this.campaign = '';
      this.content = '';
      this.term = '';
    },
    copy() {
      navigator.clipboard.writeText(this.resultLink);
      this.copied = true;
    }
  }
};
</script>

<style scoped>
.column {
  padding: 0;
}

.hero.is-light {
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom: 40px;
  border-radius: 20px;
}

.result-header {
  display: flex;
  justify-content: space-between;
}

.button {
  outline: none;
}

</style>