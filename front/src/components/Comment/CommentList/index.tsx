import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import CommandContent from './command';
import Profile from './Profile'
import { commentKey } from "consts/queryKey";
import CommentApi from "apis/comment/CommentAPI";
import { useQuery } from "@tanstack/react-query";
import React from 'react';
import {RecoilState, useRecoilState, useRecoilValue,} from 'recoil';
import { commentScrollMove } from "atom/comment/commentScrollmove";


export type commentData = {
  id : number,
  username : string,
  profileimg : string,
  command : string
}

export type querycommentData = {
  data : commentData[]
}

function CommentList() {
  const {data : commentist} = useQuery<querycommentData>([commentKey.GET_COMMENT_LIST], CommentApi.getCommentApi);
  const ref = useRef<HTMLInputElement>(null);
   const [commentScrollMoveValue ,setcommentScrollMoveValue] = useRecoilState<boolean>(commentScrollMove)
  

  console.log(commentScrollMoveValue);
  
  useEffect(()=>{
    if(commentScrollMoveValue === true){
      ref.current?.scrollIntoView({ behavior: 'smooth' });
      return setcommentScrollMoveValue(false)
    }
  },[commentScrollMoveValue])
  
  

  return (
    <Wrapper >
      {
        commentist?.data.map((list,index) => 
        <div key={index} ref={ref}>
          <Profile user={list.username} imgurl={list.profileimg}/>
          <CommandContent command={list.command}/>
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