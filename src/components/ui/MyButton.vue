<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped lang="scss">
.btn {
  height: 34px;
  padding: 0 5px;
  font-size: 1rem;
  background: #007bff;
  color: #ffffff;
  border: 0;
  border-radius: 2px;
  font-family:'Raleway', sans-serif;
  &:hover{
    background: #4c93ff;
  }
  &:active{
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
}
</style>