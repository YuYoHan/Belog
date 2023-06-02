import { useInfiniteQuery } from '@tanstack/react-query';
import PostsApi from 'apis/posts/PostsAPI';
import { queryKey } from 'consts/queryKey';

// 무한 스크롤 함수
const useMainpPostingListQuery = () => {

  const { data, fetchNextPage, isFetching } = useInfiniteQuery(
    [queryKey.GET_MAINPOSTS_LIST],
    ({pageParam = 1} ) => 
    PostsApi.getPostsApi(pageParam),
    {
      getNextPageParam: (lastPage ,allPages) =>{
        
        /*
          currentPage - 현재 데이터의 길이
          totalPages - 서버에 저장된 게시판 전체 길이 
        */
        const currentPage = allPages.length;
        const totalPages = lastPage.data.pageDTO.endPage;
        /*
          현재 10개씩 담겨져 있는 page 배열의 길이가 서버에 저장된
          길이보다 작을때 다음페이지를 호출한다다
        */

        if (currentPage < totalPages) {
          return currentPage + 1;
        }
        return
      },
      
      onError: (err : string) => {
        console.error(err);
      },
    }
  );

  return { data, fetchNextPage, isFetching };
};

export default useMainpPostingListQuery;