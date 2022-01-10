<template>
<div class="hero is-light">
  <div class="hero-body">
    <div class="subtitle is-size-3">Источник трафика</div>
    <my-select
      :width="'400px'"
      :title="modelValue"
      :options="sources"
      @update="change"
    ></my-select>
  </div>
</div>
</template>

<script>
import MySelect from './MySelect.vue';
export default {
  components: { MySelect },
  name: 'SourceInput',

  props: {
    modelValue: String
  },

  emits: ['update:modelValue', 'changed'],

  data() {
    return {
      sources: [
        { value: 'Собственный', name: 'Собственный' },
        { value: 'Яндекс Директ', name: 'Яндекс Директ' },
        { value: 'Instagram', name: 'Instagram' },
        { value: 'ВКонтакте', name: 'ВКонтакте' },
        { value: 'YouTube', name: 'YouTube' },
        { value: 'Facebook', name: 'Facebook' },
        { value: 'myTarget', name: 'myTarget' },
        { value: 'Google Ads', name: 'Google Ads' },
      ]
    };
  },

  methods: {
    change(value) {
      this.$emit('update:modelValue', value);
      this.$emit('changed')
    }
  }
};
</script>

<style>

</style>