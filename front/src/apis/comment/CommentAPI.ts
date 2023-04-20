import Axios from "apis/@core";
import { commentData,querycommentData} from "components/Comment/CommentList";
const path = '/v1/board/'

const CommentApi =  {
   getCommentApi(): Promise<querycommentData> {
      return Axios.get( path )
   },
   
   createCommentApi(data : object): Promise<querycommentData> {
      return Axios.post("http://localhost:3001/comment",data)
   },
}


export default CommentApi;