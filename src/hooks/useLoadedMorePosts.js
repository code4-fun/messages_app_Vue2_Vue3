import axios from "axios";

export default function useLoadedMorePosts(pageLimit, pageNumber, posts, totalPages) {

  const fetchingMorePosts = async () => {
    try{
      pageNumber.value += 1
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts?', {
        params: {
          _limit: pageLimit,
          _page: pageNumber.value
        }
      })
      totalPages.value = Math.ceil(response.headers['x-total-count'] / pageLimit)
      posts.value = [...posts.value, ...response.data]
    } catch(e){
      alert('Error')
    }
  }

  return {
    fetchingMorePosts
  }
}