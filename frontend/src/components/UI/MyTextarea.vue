<template>
  <textarea
    class="is-rounded is-medium mt-3 mb-5" 
    style=""
    :placeholder="placeholder"
    :value="(function() {resize(); return value})()"
    @input="change($event)"
  />
</template>

<script>
export default {
  name: 'MyTextarea',

  props: {
    placeholder: {
      type: String,
      required: false,
      default: ''
    },
    value: {
      type: String,
      required: true
    }
  },

  emits: ['change'],

  methods: {
    change(event) {
      // this.resize();
      this.$emit('change', event.target.value);
    },
    resize() {
      if (this.$el) {
        setTimeout(() => {
          this.$el.style.height = '55px';
          this.$el.style.height = `${this.$el.scrollHeight}px`;
        }, 0);
      }
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
  resize: none;
  min-height: 55px;
}

textarea:hover {
  border-color: #b5b5b5;
}

textarea::placeholder {
  color: #c6c2c2;
}

textarea::-webkit-scrollbar {
  width: 0px;
}
</style>