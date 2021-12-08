<template>
<div class="hero is-light">
  <div class="hero-body">
    <div class="subtitle is-size-3">Источник трафика</div>
    <div class="control">
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
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'SourceInput',

  props: {
    modelValue: String
  },

  emits: ['update:modelValue'],

  methods: {
    change(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
};
</script>

<style>

</style>