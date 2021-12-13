<template>
<div class="generator-utm">

  <div class="columns">
    <div class="column is-6">
      <site-input v-model="url"></site-input>
    </div>

    <div class="column is-6">
      <source-input v-model="trafficSource"></source-input>
    </div>
  </div>
  

  <div class="columns">
    <div class="column is-6">
      <obligatory-params-input v-model="obligatoryParams"></obligatory-params-input>
    </div>

    <div class="column is-6">
      <optional-params-input
        v-model="optionalParams"
      ></optional-params-input>
    </div>
  </div>

  <div class="hero is-light">
    <div class="hero-body">
      <div class="result-header">
        <span class="subtitle is-size-3">Готовая ссылка</span>
        <div class="result-buttons">
          <button class="button is-white is-medium is-rounded mr-4" @click="clean" style="width: 185px">
            <span class="icon">
              <i class="fas fa-trash"></i>
            </span>
            <span>Очистить</span>
          </button>
          <button class="button is-white is-medium is-rounded" @click="copy">
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
          style="word-break: break-word;"
        >
      </p>
    </div>
  </div>
</div>
</template>

<script>
import SiteInput from '../components/SiteInput.vue'
import SourceInput from '../components/SourceInput.vue';
import OptionalParamsInput from '../components/OptionalParamsInput.vue';
import ObligatoryParamsInput from '../components/ObligatoryParamsInput.vue';

export default {
  name: 'GeneratorUtm',

  components: {
    SiteInput,
    SourceInput,
    OptionalParamsInput,
    ObligatoryParamsInput
  },

  data() {
    return {
      url: {
        protocol: 'https://',
        site: '',
      },
      trafficSource: 'Собственный',
      obligatoryParams: {
        source: '',
        medium: '',
        campaign: '',
      },
      optionalParams: {
        content: '',
        term: '',
      },
      copied: false
    };
  },

  computed: {
    resultLink() {
      this.copied = false;

      let result = `${this.url.protocol}`;
      let utms = [];

      if (this.url.site) {
        result += `${this.url.site}/?`;
      }

      if (this.obligatoryParams.source) {
        utms.push(`utm_source=${this.obligatoryParams.source}`);
      }

      if (this.obligatoryParams.medium) {
        utms.push(`utm_medium=${this.obligatoryParams.medium}`);
      }

      if (this.obligatoryParams.campaign) {
        utms.push(`utm_campaign=${this.obligatoryParams.campaign}`);
      }

      if (this.optionalParams.content) {
        utms.push(`utm_content=${this.optionalParams.content}`);
      }

      if (this.optionalParams.term) {
        utms.push(`utm_term=${this.optionalParams.term}`);
      }

      result += utms.join('&');

      return result;
    },
  },

  methods: {
    clean() {
      this.url.protocol = 'https://';
      this.url.site = '';
      this.obligatoryParams.source = '';
      this.obligatoryParams.medium = '';
      this.obligatoryParams.campaign = '';
      this.optionalParams.content = '';
      this.optionalParams.term = '';
    },
    copy() {
      navigator.clipboard.writeText(this.resultLink);
      this.copied = true;
    }
  }
};
</script>

<style scoped lang="scss">
$input-focus-color: red;

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
  transition: 0.3s;
}

.button:hover {
  background-color: #de2617;
  color: white;
}

</style>