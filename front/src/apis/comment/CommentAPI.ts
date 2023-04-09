import Axios from "apis/@core";
import {  commentData, querycommentData } from "pages/DetailPage/Detail";


const CommentApi =  {
   getCommentApi(): Promise<querycommentData> {
      return Axios.get("http://localhost:3001/comment")
   },
   
   createCommentApi(data : object): Promise<commentData> {
      return Axios.post("http://localhost:3001/comment",data)
   },
}


export default CommentApi;