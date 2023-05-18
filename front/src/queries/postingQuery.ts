import { useInfiniteQuery } from '@tanstack/react-query';
import PostsApi from 'apis/posts/PostsAPI';
import { queryKey } from 'consts/queryKey';


const useMainpPostingListQuery = () => {
   let startPage = 0

  const { data, fetchNextPage,hasNextPage, isFetching } = useInfiniteQuery(
    [queryKey.GET_MAINPOSTS_LIST],
    ({pageParam = 1} ) => 
       PostsApi.getPostsApi(pageParam),
    {
      // 마지막 꺼를 allpages에 추가를 해줘 
      getNextPageParam: (lastPage ,allPages) =>{
         const data = allPages.length 
         // data 현재 길이
         // lastPage.data.pageDTO.endPage 전체 길이
        if(data !== lastPage.data.pageDTO.endPage) return lastPage.data.pageDTO.startPage + 1
      },
      
      onError: (err : string) => {
        console.error(err);
      },
    }
  );

  return { data, fetchNextPage, isFetching };
};

export default useMainpPostingListQuery;