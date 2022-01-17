<template>
<div class="hero is-light">
  <div class="hero-body">
    <div class="subtitle is-size-3">Обязательные параметры</div>
    <label class="is-size-4">Источник кампании</label>
    <p class="control">
      <textarea  
        class="is-rounded is-medium mt-3 mb-5" 
        placeholder="yandex, google, instagram"
        :value="modelValue.source"
        @input="change('source', $event.target.value)"
      />
    </p>
    <label class="is-size-4">Канал трафика</label>
    <p class="control">
      <textarea 
        class="is-rounded is-medium mt-3 mb-5" 
        placeholder="cpc, cpm, social"
        :value="modelValue.medium"
        @input="change('medium', $event.target.value)"
      />
    </p>
    <label class="is-size-4">Название кампании</label>
    <p class="control">
      <textarea
        class="is-rounded is-medium mt-3 mb-5" 
        placeholder="campaign"
        :value="modelValue.campaign"
        @input="change('campaign', $event.target.value)"
      />
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
textarea {
  width: 100%;
  height: 55px;
  font-size: 20px;
  padding: calc(0.75rem - 1px);
  border: #dbdbdb solid 1px;
  border-radius: 40px;
  resize: vertical;
  min-height: 55px;
}

textarea::placeholder {
  color: #c6c2c2;
}

textarea:hover {
  border-color: #b5b5b5;
}
</style>