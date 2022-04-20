<template>
  <select :value="modelValue" @change="changeOption">
    <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        :disabled="option.disabled">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'my-select',
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    },
    defaultValue: {
      type: String
    }
  },
  methods: {
    changeOption(event){
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped lang="scss">

</style>