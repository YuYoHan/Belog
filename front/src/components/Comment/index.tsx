import styled from 'styled-components';
import { commentKey } from "consts/queryKey";
import CommentApi from "apis/comment/CommentAPI";
import { useQuery } from "@tanstack/react-query";
import CommentCard from './CommentList/list/commentCard';


export type commentData = {
  data : {
    userEmail : string;
    boardNum : number,
    comment : string,
    commentNum? : number,
    userId : number
  }
}

export type querycommentData = {
  data : commentData[]
}

function CommentList({boardNum} : { boardNum : number }) {
  const {data : commentList} = useQuery<querycommentData>([commentKey.GET_COMMENT_LIST], () => CommentApi.getCommentApi(boardNum));
  
  console.log(commentList);
  console.log(boardNum);
  

  return (
    <Wrapper >
      {
        commentList?.data.map((list : any ,index) => 
          <CommentCard data={list} key={index}/>
      )}
    </Wrapper>
  )
}

export default CommentList

const Wrapper = styled.div`
   padding-top: 1.5rem;
   padding-bottom: 1.5rem;
`
