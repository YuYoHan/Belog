import Axios from "apis/@core"

const path = 'http://43.201.113.140:8080//v1/board/'


export const PostDtailsApi =  {
   getPostDtailsApi(boardnum: number): Promise<any> {
      return Axios.get(path + boardnum)
        
   },
   deletePostsApi(id : number): Promise<any> {
      // url 변경해야함
      return Axios.delete(`http://localhost:3001/mainpostslist/${id}`)
   },
}