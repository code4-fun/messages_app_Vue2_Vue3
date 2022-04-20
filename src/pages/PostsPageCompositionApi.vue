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

    <div ref="observerVar"></div>

    <div v-if="selectedPostsPresentation === 'pagination' || selectedPostsPresentation === ''">
      <my-pages
          v-model:pageNumber="pageNumber"
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
import useFetchedPosts from "@/hooks/useFetchedPosts";
import useSortedPosts from "@/hooks/useSortedPosts";
import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts";
import useLoadedMorePosts from "@/hooks/useLoadedMorePosts";
import useInfiniteScrollDown from "@/hooks/useInfiniteScrollDown";
import { ref, watch, onMounted } from "vue";

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
  setup(){
    const dialogVisible = ref(false)
    const pageLimit = 10
    const pageNumber = ref(1)
    const selectedPostsPresentation = ref('pagination')
    const observerVar = ref(null)

    const sortOptions = ref([
      {value: 'selected', name: 'Сортировка', disabled: true},
      {value: 'title', name: 'По названию'},
      {value: 'body', name: 'По содержимому'}
    ])
    const postsPresentationOptions = ref([
      {value: 'pagination', name: 'Пагинация'},
      {value: 'infiniteScroll', name: 'Бесконечная прокрутка'}
    ])

    const { posts, isPostsLoading, totalPages, fetching } = useFetchedPosts(pageLimit, pageNumber)
    const { selectedSort, sortedPosts } = useSortedPosts(posts)
    const { searchQuery, sortedAndSearchedPosts } = useSortedAndSearchedPosts(sortedPosts)
    const { fetchingMorePosts } = useLoadedMorePosts(pageLimit, pageNumber, posts, totalPages)
    const { infiniteScrollDown } = useInfiniteScrollDown(pageNumber, totalPages, selectedPostsPresentation, observerVar, fetchingMorePosts)

    const showDialog = () => {
      dialogVisible.value = true
    }

    const createPost = (post) => {
      posts.value.push(post)
      dialogVisible.value = false
    }

    const removePost = (post) => {
      posts.value = posts.value.filter(item => item.id !== post.id)
    }

    watch(pageNumber, () => {
      if (selectedPostsPresentation.value === 'pagination') {
        fetching()
      }
    });

    onMounted(infiniteScrollDown)

    return {
      posts,
      dialogVisible,
      totalPages,
      isPostsLoading,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts,
      pageNumber,
      selectedPostsPresentation,
      sortOptions,
      postsPresentationOptions,
      showDialog,
      createPost,
      removePost,
      fetchingMorePosts,
      observerVar
    }
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
