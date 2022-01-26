<template>
  <textarea
    class="is-rounded is-medium mt-2 mb-1" 
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
          this.$el.style.height = '42px';
          this.$el.style.height = `${this.$el.scrollHeight + 2}px`;
        }, 0);
      }
    }
  }
}
</script>

<style>
textarea {
  width: 100%;
  height: 42px;
  font-size: 17px;
  padding: 10px;
  border: #dbdbdb solid 1px;
  border-radius: 20px;
  resize: none;
  min-height: 40px;
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