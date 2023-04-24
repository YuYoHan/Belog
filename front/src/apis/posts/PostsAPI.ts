import Axios from "apis/@core";
import { ResponseData } from "pages/MainPage/MainList";

const path = 'http://13.125.56.209:8080//v1/board/'

const PostsApi =  {
   getPostsApi(pageParam : number): Promise<ResponseData> {
      return Axios.get(path + pageParam)
        
   },
   deletePostsApi(id : number): Promise<any> {
      // url 변경해야함
      return Axios.delete(`http://localhost:3001/mainpostslist/${id}`)
   },
}


export default PostsApi;