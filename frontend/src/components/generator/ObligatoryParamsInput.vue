<template>
<div class="hero is-light">
  <div class="hero-body">
    <div class="subtitle is-size-3">Обязательные параметры</div>
    <label class="is-size-4">Источник кампании</label>
    <p class="control">
      <my-textarea  
        :placeholder="'yandex, google, instagram'"
        :value="modelValue.source"
        @change="newValue => change('source', newValue)"
      />
    </p>
    <label class="is-size-4">Канал трафика</label>
    <p class="control">
      <my-textarea 
        :placeholder="'cpc, cpm, social'"
        :value="modelValue.medium"
        @change="newValue => change('medium', newValue)"
      />
    </p>
    <label class="is-size-4">Название кампании</label>
    <p class="control">
      <my-textarea
        :placeholder="'campaign'"
        :value="modelValue.campaign"
        @change="newValue => change('campaign', newValue)"
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