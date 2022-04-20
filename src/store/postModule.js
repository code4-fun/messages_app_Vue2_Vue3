import axios from "axios";

export const postModule = {
  state: () => ({
    posts: [],
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
  }),
  getters: {
    sortedPosts(state) {
      return [...state.posts].sort((post1, post2) =>
        post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]))
    },
    sortedAndSearchedPosts(state, getters){
      if(state.searchQuery === ''){
        return getters.sortedPosts
      } else {
        return getters.sortedPosts.filter(post =>
          post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
      }
    }
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setPostsLoading(state, bool) {
      state.isPostsLoading = bool
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort
    },
    setSelectedPostsPresentation(state, selectedPostsPresentation) {
      state.selectedPostsPresentation = selectedPostsPresentation
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery
    },
    setPageNumber(state, pageNumber) {
      state.pageNumber = pageNumber
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages
    }
  },
  actions: {
    async fetchPosts({state, commit}){
      try{
        commit('setPostsLoading', true)
        const posts = await axios.get('https://jsonplaceholder.typicode.com/posts?', {
          params: {
            _limit: state.pageLimit,
            _page: state.pageNumber
          }
        })
        commit('setTotalPages', Math.ceil(posts.headers['x-total-count'] / state.pageLimit))
        commit('setPosts', posts.data)
      } catch(e){
        alert('Error')
      } finally {
        commit('setPostsLoading', false)
      }
    },
    async loadMorePosts({state, commit}){
      try{
        commit('setPageNumber',  state.pageNumber + 1)
        const posts = await axios.get('https://jsonplaceholder.typicode.com/posts?', {
          params: {
            _limit: state.pageLimit,
            _page: state.pageNumber
          }
        })
        commit('setTotalPages', Math.ceil(posts.headers['x-total-count'] / state.pageLimit))
        commit('setPosts', [...state.posts, ...posts.data])
      } catch(e){
        alert('Error')
      }
    }
  },
  namespaced: true
}