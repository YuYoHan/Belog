import Axios from "apis/@core";


const PostsApi =  {
   getPostsApi() {
      return Axios.get('http://localhost:3001/mainpostslist')
   },
   
}

export default PostsApi;