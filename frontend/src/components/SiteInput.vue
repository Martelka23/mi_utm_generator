<template>
<div class="hero is-light">
  <div class="hero-body">
    <div class="subtitle is-size-3">Адрес целевой страницы</div>
    <div class="field has-addons">
      <p class="control">
        <span class="select is-rounded is-medium">
          <select :value="modelValue.protocol" @change="change('protocol', $event.target.value)">
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
          :value="modelValue.site"
          @input="change('site', $event.target.value)" 
        >
      </p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'SiteInput',

  props: {
    modelValue: Object
  },

  emits: ['update:modelValue'],

  methods: {
    change(key, value) {
      this.$emit('update:modelValue', { ...this.modelValue, [key]: value });
    }
  },

};
</script>

<style>

</style>