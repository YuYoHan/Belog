import Axios from "apis/@core";
import { commentCardProps } from "components/Comment/CommentList/list/UpdateBtn";


type CommentFetchProps = {
   comment : string
   commentNum? : number
   boardNum? : number
}

const url = process.env.REACT_APP_BASE_URL
const path = `${url}v1/board/`

//댓글 리스트, 생성 , 수정 , 삭제 API
const CommentApi =  {
   
   getCommentApi(boardNum : number): Promise<any> {
      return Axios.get( path + `${boardNum}/comment/list`  )
   },
   createCommentApi(boardNum: number,data : CommentFetchProps): Promise<any> {
      return Axios.post(path + `${boardNum}/comment`,data)
   },

   updateCommentApi(comment : any): Promise<any> {
      return Axios.put(path + `${comment.boardNum}/comment/${comment.commentNum}`,comment)
   },

   deleteCommentApi(boardNum:number,commentNum:number): Promise<any> {
      return Axios.delete(path + `${boardNum}/comment/${commentNum}`)
   },
}


export default CommentApi;