import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { commentKey } from "consts/queryKey";
import CommentApi from "apis/comment/CommentAPI";
import { useQuery } from "@tanstack/react-query";
import CommentCard from './list/commentCard';
import axios from 'axios';


export type commentData = {
  data : {
    useremail : string;
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
  const {data : commentist} = useQuery<querycommentData>([commentKey.GET_COMMENT_LIST], () => CommentApi.getCommentApi(boardNum));
  const ref = useRef<HTMLInputElement>(null);
  
 
  return (
    <Wrapper >
      {
        commentist?.data.map((list : any ,index) => 
        <div key={index} ref={ref}>
          <CommentCard data={list}/>
        </div>
      )}
    </Wrapper>
  )
}

export default CommentList

const Wrapper = styled.div`
   padding-top: 1.5rem;
   padding-bottom: 1.5rem;
`
