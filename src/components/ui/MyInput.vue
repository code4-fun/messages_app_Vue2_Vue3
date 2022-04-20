<template>
  <input
      :value="modelValue"
      @input="updateInput"
      type="text"
      class="input">
</template>

<script>
export default {
  name: 'my-input',
  props: {
    modelValue: [String, Number]  // Допустимые значения: строка, число.
  },
  methods: {
    updateInput(event){
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped lang="scss">
.input {
  padding: 10px;
  width: 100%;
  height: 34px;
  font-size: 16px;
  border: 1px solid #ced4da;
  border-radius: 2px;
  &:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
}
</style>