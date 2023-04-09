import Axios from "apis/@core";
import { queryMainPost } from "pages/MainPage/MainList";


const PostsApi =  {
   getPostsApi(): Promise<queryMainPost> {
      return Axios.get('http://localhost:3001/mainpostslist')
   },
   deletePostsApi(id : number): Promise<any> {
      // url 변경해야함
      return Axios.delete(`http://localhost:3001/mainpostslist/${id}`)
   },
}


export default PostsApi;