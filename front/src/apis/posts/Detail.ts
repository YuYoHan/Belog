import Axios from "apis/@core"
import { Detaildata } from "pages/DetailPage/Detail"

const path = 'http://3.37.89.59:8080//v1/board/'


export const PostDetailsApi =  {
   getDetailPostsApi(boardnum : number): Promise<Detaildata> {
      return Axios.get( path + `boardDetail/${boardnum}`)
   },
   deletePostsApi(id : number): Promise<any> {
      // url 변경해야함
      return Axios.delete(`http://localhost:3001/mainpostslist/${id}`)
   },
}