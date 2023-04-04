import Axios from "apis/@core";
import {  querycommentData } from "pages/DetailPage/Detail";


const CommentApi =  {
   getCommentApi(): Promise<querycommentData> {
      return Axios.get("http://localhost:3001/comment")
   },
   
   createCommentApi(): Promise<querycommentData> {
      return Axios.get("http://localhost:3001/comment")
   },
}


export default CommentApi;