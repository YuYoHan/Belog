import Axios from "apis/@core";


type addCommentProps = {
   comment : string
}

const url = process.env.REACT_APP_BASE_URL
const path = `${url}v1/board/`

const CommentApi =  {
   
   getCommentApi(boardNum : number): Promise<any> {
      return Axios.get( path + `${84}/comment/list`  )
   },
   createCommentApi(boardNum: number,data : addCommentProps): Promise<any> {
      return Axios.post(path + `${84}/comment`,data)
   },

   updateCommentApi(comment : any): Promise<any> {
      return Axios.put(path)
   },

   deleteCommentApi(): Promise<any> {
      return Axios.put(path)
   },
}


export default CommentApi;