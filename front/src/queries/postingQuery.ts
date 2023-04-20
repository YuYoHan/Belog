import { useInfiniteQuery } from '@tanstack/react-query';
import PostsApi from 'apis/posts/PostsAPI';
import { queryKey } from 'consts/queryKey';


const useMainpPostingListQuery = () => {
   let startPage = 0

  const { data, fetchNextPage, isFetching } = useInfiniteQuery(
    [queryKey.GET_MAINPOSTS_LIST],
    ({pageParam = 1} ) => 
      PostsApi.getPostsApi(pageParam),
    {

      getNextPageParam: (lastpage ,allPages) =>{
         const endPage =lastpage.data.pageDTO.realEnd
            return lastpage.data.pageDTO.startPage + 1



      },
      // console.log(lastpage && lastpage.data.pageDTO.startPage + 1),
      
      
      onError: (err : string) => {
        console.error(err);
      },
    }
  );

  return { data, fetchNextPage, isFetching };
};

export default useMainpPostingListQuery;