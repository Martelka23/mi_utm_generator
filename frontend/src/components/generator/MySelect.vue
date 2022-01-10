<template>
<div>
  <div class="select__background" v-if="showOptions" @click="showOptions = false"></div>
  <div class="m-select" :style="`width: ${width}`">
    <div class="select__title" @click="showOptions = !showOptions">
      <span>{{ title }}</span>
      <span class="icon" style="transform: translateY(5px)"><i class="fas fa-chevron-down"></i></span>
    </div>
    <ul 
      class="select__options" 
      :class="{'mvisible': showOptions, 'mhidden': !showOptions}"
      :style="`width: ${width};`"
    >
      <li
        v-for="option in options" 
        :key="option.value" 
        class="option"
        @click="update(option.value)"
      >
        {{ option.name }}
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'MySelect',

  props: {
    title: {
      type: String,
      required: false,
      default: 'Select'
    },
    options: {
      type: Array,
      required: false,
      default: []
    },
    width: {
      type: String,
      required: false,
      default: '120px'
    }
  },

  data() {
    return {
      showOptions: false,
    };
  },

  methods: {
    update(value) {
      this.showOptions = false;
      this.$emit('update', value);
    }
  }
}
</script>

<style scoped>
.select__background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.select__title,
.select__options {
  font-size: 1.25rem;
  color: #363636;
  border: 1px solid #dbdbdb;
  background: white;
  cursor: pointer;
  display: flex;
}

.select__title {
  justify-content: space-between;
  height: 50px;
  padding: 10px;
}

.select__title:hover {
  border-right: 1px solid #b5b5b5;
  border-color: #b5b5b5; 
}

.select__options {
  position: absolute;
  border-top: none;
  max-height: 500px;
  overflow-y: auto;
  transition: 0.3s;
  flex-direction: column;
}

.select__options.mhidden {
  visibility: hidden;
  opacity: 0;
  z-index: 0;
  /* transform: translateY(-3em); */
}

.select__options.mvisible {
  visibility: visible;
  opacity: 1;
  z-index: 1;
  /* transform: translateY(0em); */
}

.option {
  border-top: 1px solid #dbdbdb;
  padding: 10px 10px 0px 10px;
  display: flex;
  justify-content: center;
  transition: 0.1s;
  word-break: break-word;
}

.option:first-child {
  border-top: none;
}

.option:hover {
  background-color: #de2617;
  color: white;
}
</style>