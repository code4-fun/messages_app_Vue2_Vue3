<template>
  <div>
    <div class="app__btns">
      <my-button
          @click="showDialog"
          class="create-post__btn">
        Создать пост
      </my-button>
      <my-input
          v-model="searchQuery"
          class="search-input"
          placeholder="Search">
      </my-input>
      <my-select
          v-model="selectedPostsPresentation"
          :options="postsPresentationOptions">
      </my-select>
      <my-select
          v-model="selectedSort"
          :options="sortOptions">
      </my-select>
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form
          @createPost="createPost" />
    </my-dialog>
    <post-list
        :posts="sortedAndSearchedPosts"
        @removePost="removePost"
        v-if="!isPostsLoading"
    />
    <div v-else>Идет загрузка...</div>

    <div ref="observer"></div>

    <div v-if="selectedPostsPresentation === 'pagination' || selectedPostsPresentation === ''">
      <my-pages
          v-model:pageNumber="pageNumber"
          :totalPages="totalPages">
      </my-pages>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import PostList from '@/components/PostList'
import PostForm from '@/components/PostForm'
import MyDialog from "@/components/ui/MyDialog";
import MyButton from "@/components/ui/MyButton";
import MySelect from "@/components/ui/MySelect";
import MyInput from "@/components/ui/MyInput";
import MyPages from "@/components/ui/MyPages";

export default {
  components: {
    MyPages,
    MyInput,
    MySelect,
    MyButton,
    MyDialog,
    PostList,
    PostForm
  },
  data(){
    return {
      posts: [],
      dialogVisible: false,
      isPostsLoading: true,
      selectedSort: 'selected',
      selectedPostsPresentation: 'pagination',
      searchQuery: '',
      pageLimit: 10,
      pageNumber: 1,
      totalPages: 0,
      sortOptions: [
        {value: 'selected', name: 'Сортировка', disabled: true},
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержимому'}
      ],
      postsPresentationOptions: [
        {value: 'pagination', name: 'Пагинация'},
        {value: 'infiniteScroll', name: 'Бесконечная прокрутка'}
      ]
    }
  },
  methods: {
    createPost(post){
      this.posts.push(post)
      this.dialogVisible = false
    },
    removePost(post){
      this.posts = this.posts.filter(item => item.id !== post.id)
    },
    showDialog(){
      this.dialogVisible = true
    },
    async fetchPosts(){
      try{
        this.isPostsLoading = true;
        const posts = await axios.get('https://jsonplaceholder.typicode.com/posts?', {
          params: {
            _limit: this.pageLimit,
            _page: this.pageNumber
          }
        })
        this.totalPages = Math.ceil(posts.headers['x-total-count'] / this.pageLimit)
        this.posts = posts.data
      } catch(e){
        alert('Error')
      } finally {
        this.isPostsLoading = false
      }
    },
    async loadMorePosts(){
      try{
        this.pageNumber += 1
        const posts = await axios.get('https://jsonplaceholder.typicode.com/posts?', {
          params: {
            _limit: this.pageLimit,
            _page: this.pageNumber
          }
        })
        this.totalPages = Math.ceil(posts.headers['x-total-count'] / this.pageLimit)
        this.posts = [...this.posts, ...posts.data]
      } catch(e){
        alert('Error')
      }
    }
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>
          post1[this.selectedSort]
              ?.localeCompare(post2[this.selectedSort]))
    },
    sortedAndSearchedPosts(){
      if(this.searchQuery === ''){
        return this.sortedPosts
      } else {
        return this.sortedPosts.filter(post =>
            post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
      }
    }
  },
  watch:{
    pageNumber(){
      if (this.selectedPostsPresentation === 'pagination') {
        this.fetchPosts()
      }
    }
  },
  mounted(){
    this.fetchPosts()

    const options = {
      rootMargin: '0px',
      threshold: 1.0
    }
    const callback = (entries) => {
      if (entries[0].isIntersecting
          && this.pageNumber < this.totalPages
          && this.selectedPostsPresentation === 'infiniteScroll') {
        this.loadMorePosts()
      }
    };
    const observer = new IntersectionObserver(callback, options)
    observer.observe(this.$refs.observer)
  }
}
</script>

<style scoped lang="scss">
.app__btns {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.create-post__btn {
  flex-shrink: 0;
}
.search-input {
  max-width: 400px;
}
</style>
