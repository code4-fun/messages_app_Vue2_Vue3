<template>
  <div>
    <div class="app__btns">
      <my-button
          @click="showDialog"
          class="create-post__btn">
        Создать пост
      </my-button>
      <my-input
          :modelValue="searchQuery"
          @update:modelValue="setSearchQuery"
          class="search-input"
          placeholder="Search">
      </my-input>
      <my-select
          :modelValue="selectedPostsPresentation"
          @update:modelValue="setSelectedPostsPresentation"
          :options="postsPresentationOptions">
      </my-select>
      <my-select
          :modelValue="selectedSort"
          @update:modelValue="setSelectedSort"
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
          :pageNumber="pageNumber"
          @update:pageNumber="setPageNumber"
          :totalPages="totalPages">
      </my-pages>
    </div>
  </div>
</template>

<script>
import PostList from '@/components/PostList'
import PostForm from '@/components/PostForm'
import MyDialog from "@/components/ui/MyDialog";
import MyButton from "@/components/ui/MyButton";
import MySelect from "@/components/ui/MySelect";
import MyInput from "@/components/ui/MyInput";
import MyPages from "@/components/ui/MyPages";
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

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
      dialogVisible: false
    }
  },
  methods: {
    ...mapMutations({
      setPageNumber: 'post/setPageNumber',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedPostsPresentation: 'post/setSelectedPostsPresentation',
      setSelectedSort: 'post/setSelectedSort'
    }),
    ...mapActions({
      fetchPosts: 'post/fetchPosts',
      loadMorePosts: 'post/loadMorePosts'
    }),
    createPost(post){
      this.posts.push(post)
      this.dialogVisible = false
    },
    removePost(post){
      this.posts = this.posts.filter(item => item.id !== post.id)
    },
    showDialog(){
      this.dialogVisible = true
    }
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isPostsLoading: state => state.post.isPostsLoading,
      selectedSort: state => state.post.selectedSort,
      selectedPostsPresentation: state => state.post.selectedPostsPresentation,
      searchQuery: state => state.post.searchQuery,
      pageLimit: state => state.post.pageLimit,
      pageNumber: state => state.post.pageNumber,
      totalPages: state => state.post.totalPages,
      sortOptions: state => state.post.sortOptions,
      postsPresentationOptions: state => state.post.postsPresentationOptions
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
    })
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
