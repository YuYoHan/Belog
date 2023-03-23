import Axios from "apis/@core";
import { API_BASE_URL } from "apis/test/api-config";
import { AxiosResponse } from "axios";
import { MainPageData, queryMainPost } from "pages/MainPage/MainList";


const PostsApi =  {
   getPostsApi(): Promise<queryMainPost> {
      return Axios.get('http://localhost:3001/mainpostslist')
   },
   testApi(): Promise<any> {
      return Axios.get(`http://localhost:8080/todo`)
   },
}


export default PostsApi;