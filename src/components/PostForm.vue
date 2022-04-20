<template>
  <form @submit.prevent>
    <h3>Создание поста</h3>
    <my-input
        v-focus
        v-model="post.title"
        type="text"
        placeholder="Название"
        class="dialog-input"/>
    <my-input
        v-model="post.body"
        type="text"
        placeholder="Описание"
        class="dialog-input" />
    <my-button
        @click="createPost"
        class="form__btn">
      Создать
    </my-button>
  </form>
</template>

<script>

export default {
  data(){
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    createPost(){
      this.post.id = Date.now()  // к посту, который уже заполненный лежит в data, добавляем id и можно передавать наверх
      this.$emit('createPost', this.post)
      this.post = {
        title: '',
        body: ''
      }
    }
  }
}
</script>

<style scoped lang="scss">
.form__btn {
  align-self: flex-end;
  margin-top: 10px;
}
.dialog-input {
  margin-top: 10px;
}
</style>