import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import CommandContent from './command';
import { commentKey } from "consts/queryKey";
import CommentApi from "apis/comment/CommentAPI";
import { useQuery } from "@tanstack/react-query";
import React from 'react';
import { useRecoilState, } from 'recoil';
import { commentScrollMove } from "atom/comment/commentScrollmove";
import axios from 'axios';
import Axios from 'apis/@core';


export type commentData = {
  boardNum? : number,
  comment? : string,
  commentNum? : number,
  userId? : number
}

export type querycommentData = {
  data : commentData[]
}

function CommentList({boardNum} : { boardNum : number }) {
  const {data : commentist} = useQuery<querycommentData>([commentKey.GET_COMMENT_LIST], () => CommentApi.getCommentApi(boardNum));
  const ref = useRef<HTMLInputElement>(null);
  const [commentScrollMoveValue ,setcommentScrollMoveValue] = useRecoilState<boolean>(commentScrollMove)
  
  useEffect(() => {
    Axios.get(`http://3.34.52.123:8080/v1/board/${boardNum}/comment/list`)
    .then((res) =>{
      console.log(res);
    }).catch((err) => {
      console.log(err);
      
    })
  },[])

  useEffect(()=>{
    if(commentScrollMoveValue === true){
      ref.current?.scrollIntoView({ behavior: 'smooth' });
      return setcommentScrollMoveValue(false)
    }
  },[commentScrollMoveValue])
  

  

  return (
    <Wrapper >
      {/* {
        commentist?.data.map((list,index) => 
        <div key={index} ref={ref}>
          <Profile user={list.username} imgurl={list.profileimg}/>
          <CommandContent command={list.command}/>
        </div>
      )} */}
    </Wrapper>
  )
}

export default CommentList

const Wrapper = styled.div`
   padding-top: 1.5rem;
   padding-bottom: 1.5rem;
`