<template>
  <div class="post">
    <div>
      <div><strong>ID:</strong> {{ post.id }} </div>
      <div><strong>Название:</strong> {{ post.title }}</div>
      <div><strong>Описание:</strong> {{ post.body }}</div>
    </div>
    <div class="post__btns">
      <my-button class="post-btn" @click="$router.push(`/posts/${post.id}`)">Открыть</my-button>
      <my-button class="post-btn" @click="removePost">Удалить</my-button>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    removePost(){
      this.$emit('removePost', this.post)
    }
  }
}
</script>
<style scoped>
.post__btns {
  display: flex;
}
.post-btn {
  margin-left: 10px;
}
</style>