<template>
<div class="hero is-light">
  <div class="hero-body pt-5 pb-5">
    <div class="subtitle is-size-4">Источник трафика</div>
    <my-select
      :width="'400px'"
      :title="title"
      :options="options"
      @update="change"
    ></my-select>
  </div>
</div>
</template>

<script>
import MySelect from '../UI/MySelect.vue';
export default {
  components: { MySelect },
  name: 'SourceInput',

  props: {
    traffics: {
      type: Array,
      required: false,
      default: []
    },
    title: {
      type: String,
      required: true
    }
  },

  emits: ['changed'],

  data() {
    return {

    };
  },

  computed: {
    options() {
      const options = [];
      for (let i = 0; i < this.traffics.length; i++)
        options.push({ value: i, name: this.traffics[i].platform });

      return options;
    }
  },

  methods: {
    change(value) {
      this.$emit('changed', value);
    }
  }
};
</script>

<style>

</style>