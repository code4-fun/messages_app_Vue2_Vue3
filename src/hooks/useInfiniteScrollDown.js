
export default function useInfiniteScrollDown(pageNumber, totalPages, selectedPostsPresentation, observerVar, fetchingMorePosts) {

  const infiniteScrollDown = () => {
    const options = {
      rootMargin: '0px',
      threshold: 1.0
    }
    const callback = (entries) => {
      if (entries[0].isIntersecting
        && pageNumber.value < totalPages.value
        && selectedPostsPresentation.value === 'infiniteScroll') {
        console.log('scroll func');
        fetchingMorePosts()
      }
    };
    const observer = new IntersectionObserver(callback, options)
    observer.observe(observerVar.value)
  }

  return {
    infiniteScrollDown
  }
}