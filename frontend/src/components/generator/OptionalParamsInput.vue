<template>
<div class="hero is-light">
  <div class="hero-body pt-5 pb-5">
    <div class="subtitle is-size-4">Необязательные параметры</div>
    <label class="is-size-5">Содержание объявления</label>
    <p class="control">
      <my-textarea
        :placeholder="'content'"
        :value="modelValue.content"
        @change="newValue => change('content', newValue)"
      />
    </p>
    <label class="is-size-5">Ключевое слово</label>
    <p class="control">
      <my-textarea 
        :placeholder="'term'"
        :value="modelValue.term"
        @change="newValue => change('term', newValue)"
      />
    </p>
  </div>
</div>
</template>

<script>
import MyTextarea from '../UI/MyTextarea.vue';

export default {
  name: 'ParamsInput',
  
  components: {
    MyTextarea
  },

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