import Axios from "apis/@core";
import { AxiosResponse } from "axios";
import { MainPageData, queryMainPost } from "pages/MainPage/MainList";


const PostsApi =  {
   getPostsApi(): Promise<queryMainPost> {
      return Axios.get('http://localhost:3001/mainpostslist')
   },
  
}


export default PostsApi;