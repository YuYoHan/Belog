import Axios from "apis/@core";
import { querycommentData} from "components/Comment/CommentList";
import { number } from "yargs";

interface addCommentProps  {
   comment : string
}

// const path = 'http://localhost:3001/comment'
const path = 'http://43.200.8.104:8080/v1/board/'

const CommentApi =  {
   // getCommentApi(boardNum : number): Promise<commentData> {
   //    return Axios.get( path +  `${boardNum}/comment/list` )
   // },
   getCommentApi(boardNum : number): Promise<any> {
      return Axios.get( path + `${boardNum}/comment/list`  )
   },
   createCommentApi(boardNum: number,data : addCommentProps): Promise<any> {
      return Axios.post(path + `${boardNum}/comment`,data)
   },

   updateCommentApi(comment : any): Promise<any> {
      return Axios.put(path)
   },

   deleteCommentApi(): Promise<any> {
      return Axios.put(path)
   },
}


export default CommentApi;