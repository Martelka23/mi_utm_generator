<template>
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
          @input="inputHandler"
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
    modelValue: Object,
  },

  methods: {
    inputHandler(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<style>

</style>