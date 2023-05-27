import Axios from "apis/@core";
import { BoardData, getPostingData } from "pages/MainPage/MainList";
import { Detaildata } from "pages/DetailPage"
import { postingApiDataProps } from "pages/Posting/components/PostingRegisterbtn";

type PostsData = {
   data : string
}


const path = 'http://15.164.220.47:8080/v1/board/'

const PostsApi =  {
   // 게시물 
   getPostsApi(pageParam : number): Promise<getPostingData> {
      return Axios.get(path + pageParam)
   },
   
   getDetailPostsApi(boardnum : number): Promise<Detaildata> {
      return Axios.get( path + `boardDetail/${boardnum}`)
   },

   createPostsApi(data : postingApiDataProps): Promise<PostsData> {
      return Axios.post( path, data)
   },

   updatePostsApi(data : postingApiDataProps): Promise<BoardData> {
      return Axios.put( path, data)
   },

   deletePostsApi(boardnum : number): Promise<PostsData> {
      return Axios.delete(path + boardnum)
   },
}


export default PostsApi;