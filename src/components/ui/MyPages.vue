<template>
  <div class="page-wrapper">
    <div
        v-for="page in totalPages"
        :key="page"
        class="page"
        :class="{
            'current-page': pageNumber === page
          }"
        @click="changePage(page)">
      {{ page }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-pages',
  props: {
    pageNumber: {
      type: Number
    },
    totalPages: {
      type: Number
    }
  },
  methods: {
    changePage(page){
      this.$emit('update:pageNumber', page)
    }
  }
}
</script>

<style scoped lang="scss">
.page-wrapper {
  display: flex;
  margin-top: 15px;
}
.page {
  border: 1px solid black;
  padding: 10px;
  margin-left: 5px;
  &:hover{
    cursor: pointer;
  }
}
.current-page {
  border: 2px solid #007bff;
}
</style>