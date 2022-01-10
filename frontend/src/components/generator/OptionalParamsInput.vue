<template>
<div class="hero is-light">
  <div class="hero-body">
    <div class="subtitle is-size-3">Необязательные параметры</div>
    <label class="is-size-4">Содержание объявления</label>
    <p class="control">
      <input 
        type="text" 
        class="input is-rounded is-medium mt-3 mb-5" 
        placeholder="content"
        :value="modelValue.content"
        @input="change('content', $event.target.value)"
      >
    </p>
    <label class="is-size-4">Ключевое слово</label>
    <p class="control">
      <input 
        type="text" 
        class="input is-rounded is-medium mt-3 mb-5" 
        placeholder="term"
        :value="modelValue.term"
        @input="change('term', $event.target.value)"
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