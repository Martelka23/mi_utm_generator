<template>
<div class="generator-utm">

  <div class="columns">
    <div class="column is-6">
      <site-input v-model="url"></site-input>
    </div>

    <div class="column is-6">
      <source-input 
        :title="trafficSource"
        :traffics="traffics"
        @changed="changeTraffic"
      ></source-input>
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

  <div class="hero is-light mb-6">
    <div class="hero-body pt-5 pb-5">
      <div class="result-header">
        <span class="subtitle is-size-4">Готовая ссылка</span>
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
        <my-textarea
          id="result"
          readonly
          :value="resultLink"
          style="word-break: break-word;"
        />
      </p>
    </div>
  </div>
</div>
</template>

<script>
import MyTextarea from '../components/UI/MyTextarea.vue';
import SiteInput from '../components/generator/SiteInput.vue';
import SourceInput from '../components/generator/SourceInput.vue';
import OptionalParamsInput from '../components/generator/OptionalParamsInput.vue';
import ObligatoryParamsInput from '../components/generator/ObligatoryParamsInput.vue';

export default {
  name: 'GeneratorUtm',

  components: {
    MyTextarea,
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
      let result = '';
      let site = '';
      let params = [];
      let hash = '';

      if (this.url.site) {
        if (this.url.site.includes('://')) {
          this.url.protocol = this.url.site.split('://')[0] + '://';
          this.url.site = this.url.site.split('://')[1];
        }
        site = this.url.site.split('#')[0].split('/?')[0];
        if (this.url.site.includes('?'))
          params = this.url.site.split('?').at(-1).split('/')[0].split('#')[0].split('&');
        if (this.url.site.includes('#'))
          hash = this.url.site.split('#').at(-1).split('/')[0].split('?')[0];

        result = `${this.url.protocol}`;
        result += `${site}`;
      }

      if (this.obligatoryParams.source) {
        params.push(`utm_source=${this.obligatoryParams.source}`);
      }

      if (this.obligatoryParams.medium) {
        params.push(`utm_medium=${this.obligatoryParams.medium}`);
      }

      if (this.obligatoryParams.campaign) {
        params.push(`utm_campaign=${this.obligatoryParams.campaign}`);
      }

      if (this.optionalParams.content) {
        params.push(`utm_content=${this.optionalParams.content}`);
      }

      if (this.optionalParams.term) {
        params.push(`utm_term=${this.optionalParams.term}`);
      }

      if (params.length)
        result += '/?' + params.join('&');
      if (hash)
        result += '#' + hash;

      result = result.slice(0, 8) + result.slice(8).replaceAll("//", "/");

      return result;
    },

    traffics() {
      return this.$store.getters.getTraffics;
    }
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
    },
    changeTraffic(idx) {
      const traffic = this.traffics[idx];

      this.obligatoryParams.source = traffic.source;
      this.obligatoryParams.medium = traffic.medium;
      this.obligatoryParams.campaign = traffic.campaign;
      this.optionalParams.content = traffic.content;
      this.optionalParams.term = traffic.term;

      this.trafficSource = traffic.platform;
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