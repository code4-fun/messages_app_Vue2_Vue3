<template>
  <div>
    <ul>
      <li><a class="active" @click="$router.push('/')">Home</a></li>
      <li><a @click="$router.push('/posts')">Posts</a></li>
      <li><a @click="$router.push('/store')">PostsWithStore</a></li>
      <li><a @click="$router.push('/composition')">CompositionAPI</a></li>
      <li style="float:right"><a @click="$router.push('/about')">About</a></li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  position: fixed;
  top: 0;
  width: 100%;
}
li {
  float: left;
  & a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    &:hover {
      cursor: pointer;
    }
    &:hover:not(.active) {
      background-color: #111
    }
  }
}
.active {
  background-color: #007bff;
  &:hover {
    background-color: #4c93ff;
  }
}
</style>