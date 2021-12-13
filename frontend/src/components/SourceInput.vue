<template>
<div class="hero is-light">
  <div class="hero-body">
    <div class="subtitle is-size-3">Источник трафика</div>
    <!-- <div class="control">
      <span class="select is-medium">
        <select :value="modelValue" @change="change">
          <option value="1">Собственный</option>
          <option value="2">Instagram</option>
          <option value="3">ВКонтакте</option>
          <option value="4">Google Ads</option>
          <option value="5">YouTube</option>
          <option value="6">Facebook</option>
          <option value="7">Yandex Direct</option>
          <option value="8">myTarget</option>
        </select>
      </span>
    </div> -->
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

  emits: ['update:modelValue'],

  data() {
    return {
      sources: [
        { value: 'Собственный', name: 'Собственный' },
        { value: 'Instagram', name: 'Instagram' },
        { value: 'ВКонтакте', name: 'ВКонтакте' },
        { value: 'YouTube', name: 'YouTube' },
        { value: 'Facebook', name: 'Facebook' },
        { value: 'myTarget', name: 'myTarget' },
        { value: 'Google Ads', name: 'Google Ads' },
        { value: 'Yandex Direct', name: 'Yandexffffffffffffffffffffffffffffffffffffffffffffff Direct' },
        { value: 'Yandex Direct', name: 'Yandex Direct' },
        { value: 'Yandex Direct', name: 'Yandex Direct' },
        { value: 'Yandex Direct', name: 'Yandex Direct' },
        { value: 'Yandex Direct', name: 'Yandex Direct' },
        { value: 'Yandex Direct', name: 'Yandex Direct' },
        { value: 'Yandex Direct', name: 'Yandex Direct' },
        { value: 'Yandex Direct', name: 'Yandex Direct' },
        { value: 'Yandex Direct', name: 'Yandex Direct' },
        { value: 'Yandex Direct', name: 'Yandex Direct' },
        { value: 'Yandex Direct', name: 'Yandex Dirasdfdect' },
      ]
    };
  },

  methods: {
    change(value) {
      this.$emit('update:modelValue', value);
    }
  }
};
</script>

<style>

</style>