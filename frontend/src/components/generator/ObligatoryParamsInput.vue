<template>
<div class="hero is-light">
  <div class="hero-body">
    <div class="subtitle is-size-3">Обязательные параметры</div>
    <label class="is-size-4">Источник кампании</label>
    <p class="control">
      <input 
        type="text" 
        class="input is-rounded is-medium mt-3 mb-5" 
        placeholder="yandex, google, instagram"
        :value="modelValue.source"
        @input="change('source', $event.target.value)"
      >
    </p>
    <label class="is-size-4">Канал трафика</label>
    <p class="control">
      <input 
        type="text" 
        class="input is-rounded is-medium mt-3 mb-5" 
        placeholder="cpc, cpm, social"
        :value="modelValue.medium"
        @input="change('medium', $event.target.value)"
      >
    </p>
    <label class="is-size-4">Название кампании</label>
    <p class="control">
      <input 
        type="text" 
        class="input is-rounded is-medium mt-3 mb-5" 
        placeholder="campaign"
        :value="modelValue.campaign"
        @input="change('campaign', $event.target.value)"
      >
    </p>
  </div>
</div>
</template>

<script>
export default {
  name: 'ParamsInput',

  props: {
    title: String,
    modelValue: Object,
  },

  emits: ['update:modelValue'],

  methods: {
    change(key, value) {
      this.$emit('update:modelValue', {...this.modelValue, [key]: value.trim()});
    }
  }
}
</script>

<style>

</style>