import axios from "axios";
import { ref, onMounted } from "vue";

export default function useFetchedPosts(pageLimit, pageNumber) {
  const posts = ref([])
  const totalPages = ref(0)
  const isPostsLoading = ref(true)

  const fetching = async () => {
    try{
      isPostsLoading.value = true
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts?', {
        params: {
          _limit: pageLimit,
          _page: pageNumber.value
        }
      })
      totalPages.value = Math.ceil(response.headers['x-total-count'] / pageLimit)
      posts.value = response.data
    } catch(e){
      alert('Error')
    } finally {
      isPostsLoading.value = false
    }
  }

  onMounted(fetching)

  return {
    posts, isPostsLoading, totalPages, fetching
  }
}