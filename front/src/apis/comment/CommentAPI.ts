import Axios from "apis/@core";


type addCommentProps = {
   comment : string
}

const path = 'http://15.164.220.47:8080/v1/board/'

const CommentApi =  {
   
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