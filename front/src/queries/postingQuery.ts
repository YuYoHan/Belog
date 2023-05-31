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
      // 마지막 꺼를 allpages에 추가를 해줌
      getNextPageParam: (lastPage ,allPages) =>{
        const data = allPages.length 
         // data 현재 길이
         // lastPage.data.pageDTO.endPage 전체 길이
        if(data !== lastPage.data.pageDTO.endPage){
          return lastPage.data.pageDTO.startPage + 1
        }else{
          return
        } 
      },
      
      onError: (err : string) => {
        console.error(err);
      },
    }
  );

  return { data, fetchNextPage, isFetching };
};

export default useMainpPostingListQuery;