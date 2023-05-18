import Axios from "apis/@core";
import { commentData,querycommentData} from "components/Comment/CommentList";
import { number } from "yargs";

interface addCommentProps  {
   comment : string
}

const path = 'http://3.34.52.123:8080/v1/board/'

const CommentApi =  {
   getCommentApi(boardNum : number): Promise<querycommentData> {
      return Axios.get( path +  `${boardNum}/comment/list` )
   },
   
   createCommentApi(boardNum: number,data : addCommentProps): Promise<any> {
      return Axios.post(path + `${boardNum}/comment`,data)
   },
}


export default CommentApi;