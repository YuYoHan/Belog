import Axios from "apis/@core";
import { commentData,querycommentData} from "components/Comment/CommentList";


const CommentApi =  {
   getCommentApi(): Promise<querycommentData> {
      return Axios.get("http://localhost:3001/comment")
   },
   
   createCommentApi(data : object): Promise<querycommentData> {
      return Axios.post("http://localhost:3001/comment",data)
   },
}


export default CommentApi;