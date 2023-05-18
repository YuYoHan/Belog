import Axios from "apis/@core";
import { ResponseData } from "pages/MainPage/MainList";
import { Detaildata } from "pages/DetailPage/Detail"
import { postingApiDataProps, postingDataProps } from "pages/Posting/components/PostingRegisterbtn";

const path = 'http://3.34.52.123:8080/v1/board/'

const PostsApi =  {
   getPostsApi(pageParam : number): Promise<ResponseData> {
      return Axios.get(path + pageParam)
        
   },
   
   getDetailPostsApi(boardnum : number): Promise<Detaildata> {
      return Axios.get( path + `boardDetail/${boardnum}`)
   },

   createPostsApi(data : postingApiDataProps): Promise<any> {
      return Axios.post( path, data)
   },

   updatePostsApi(data : postingApiDataProps): Promise<any> {
      return Axios.put( path, data)
   },

   deletePostsApi(boardnum : number): Promise<any> {
      return Axios.delete(path + boardnum)
   },
}


export default PostsApi;