<template>
  <div v-if="posts.length > 0">
    <h3>Список сообщений</h3>
    <transition-group name="post-list">
      <post-item
          :post="post"
          v-for="post in posts"
          :key="post.id"
          @removePost = "removePost"
      />
    </transition-group>
  </div>
  <h3 v-else>
    Список сообщений пуст
  </h3>
</template>

<script>
import PostItem from "@/components/PostItem";
export default {
  components: { PostItem },
  props: {
    posts: {
      required: true,
      type: Array
    }
  },
  methods: {
    removePost(post){
      this.$emit('removePost', post)
    }
  }
}
</script>

<style scoped>
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.4s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.post-list-move {
  transition: transform 0.4s ease;
}
</style>