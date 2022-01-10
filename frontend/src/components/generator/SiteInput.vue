<template>
<div class="hero is-light">
  <div class="hero-body">
    <div class="subtitle is-size-3">Адрес целевой страницы</div>
    <div class="field has-addons">
      <my-select 
        :title="modelValue.protocol" 
        :options="protocols" 
        @update="value => change('protocol', value)"
      ></my-select>
      <p class="control">
        <input 
          type="text" 
          class="input is-rounded is-medium" 
          id="input"
          placeholder="site.ru"
          :value="modelValue.site"
          @input="change('site', $event.target.value)" 
        >
      </p>
    </div>
  </div>
</div>
</template>

<script>
import MySelect from './MySelect.vue';

export default {
  components: { MySelect },
  name: 'SiteInput',

  props: {
    modelValue: Object
  },

  emits: ['update:modelValue'],

  data() {
    return {
      protocols: [
        {value: 'https://', name: 'https://'},
        {value: 'http://', name: 'http://'}
      ]
    }
  },

  methods: {
    change(key, value) {
      this.$emit('update:modelValue', { ...this.modelValue, [key]: value.trim() });
    }
  },

};
</script>

<style>
select:focus,
input:focus {
  border-color: black !important;
  box-shadow: 0px 0px 2px black !important;
}

option {
  background: red !important;
}

option:hover {
  box-shadow: 0 0 10px 100px orange inset !important;
  background: red !important;
}
</style>