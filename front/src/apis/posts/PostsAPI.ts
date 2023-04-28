import Axios from "apis/@core";
import { ResponseData } from "pages/MainPage/MainList";
import { Detaildata } from "pages/DetailPage/Detail"

const path = 'http://3.37.89.59:8080//v1/board/'

const PostsApi =  {
   getPostsApi(pageParam : number): Promise<ResponseData> {
      return Axios.get(path + pageParam)
        
   },
   
   getDetailPostsApi(boardnum : number): Promise<Detaildata> {
      return Axios.get( path + `boardDetail/${boardnum}`)
   },

   updatePostsApi(data : any): Promise<any> {
      return Axios.put( "http://3.37.89.59:8080/v1/board/", data)
   },

   deletePostsApi(boardnum : number): Promise<any> {
      return Axios.delete(`http://3.37.89.59:8080/v1/board/${boardnum}`)
   },
}


export default PostsApi;