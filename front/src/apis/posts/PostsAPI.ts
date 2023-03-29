import Axios from "apis/@core";
import { queryMainPost } from "pages/MainPage/MainList";


const PostsApi =  {
   getPostsApi(): Promise<queryMainPost> {
      return Axios.get('http://localhost:3001/mainpostslist')
   },
   deletePostsApi(id : number): Promise<any> {
      
      return Axios.delete(`http://localhost:3001/mainpostslist/${id}`)
   },

   test(): Promise<any> {
      
      return Axios.get(`http://3.35.52.233:8080/`)
   },
}


export default PostsApi;