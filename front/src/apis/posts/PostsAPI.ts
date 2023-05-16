import Axios from "apis/@core";
import { ResponseData } from "pages/MainPage/MainList";
import { Detaildata } from "pages/DetailPage/Detail"
import { postingApiDataProps, postingDataProps } from "pages/Posting/components/PostingRegisterbtn";

const path = 'http://13.125.208.169:8080/v1/board/'

const PostsApi =  {
   getPostsApi(pageParam : number): Promise<ResponseData> {
      return Axios.get(path + pageParam)
        
   },
   
   getDetailPostsApi(boardnum : number): Promise<Detaildata> {
      return Axios.get( path + `boardDetail/${boardnum}`)
   },

   createPostsApi(data : postingApiDataProps): Promise<any> {
      return Axios.post( "http://13.125.208.169:8080/v1/board", data)
   },

   updatePostsApi(data : postingApiDataProps): Promise<any> {
      return Axios.put( "http://13.125.208.169:8080/v1/board", data)
   },

   deletePostsApi(boardnum : number): Promise<any> {
      return Axios.delete(`http://13.125.208.169:8080/v1/board/${boardnum}`)
   },
}


export default PostsApi;