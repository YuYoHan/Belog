import {  useMutation, useQueryClient } from '@tanstack/react-query';
import CommentApi from 'apis/comment/CommentAPI';
import { commentKey } from 'consts/queryKey';
import React, { useEffect } from 'react'
import styled from 'styled-components';
import useInputs from 'hooks/useinputs'

export interface commentCardProps  {
   commentdata : string
   commentNum : number
   boardNum : number
   userId: number
   setUpdatehiddenBtn: React.Dispatch<React.SetStateAction<boolean>>
}

function CommentUpdateBtn({userId,commentdata,commentNum,boardNum,setUpdatehiddenBtn} : commentCardProps) {

   const [{ comment}, onChangeForm, setvalue] = useInputs({
      Updatecomment: commentdata || "",
   });
   
   const commentData = {userId,comment,commentNum,boardNum}
   
   useEffect(() => {
      setvalue({comment: commentdata || ""})
   },[commentdata])
   

   const onClickOpenBtn = () => {
      setUpdatehiddenBtn(false)
   }

   const queryClient = useQueryClient();
   const updateCommentMutation = useMutation(() => CommentApi.updateCommentApi(commentData), {
      onSuccess: (res) => {
          //낙관적 업데이트
          // 쿼리를 다시 불러오기 전에 UI를 업데이트 하고 불러오는 기능
         queryClient.cancelQueries([commentKey.GET_COMMENT_LIST]);
          // 기존에 있던 저장된 쿼리 저장을 삭제하고
         queryClient.setQueriesData([commentKey.GET_COMMENT_LIST], (oldData : any) => {
         let updateData = oldData.data.find((data : any) => data.commentNum === res.data.commentNum);
         updateData.comment = res.data.comment;
         return oldData
         })
         setUpdatehiddenBtn(false)

          // 비어있는 쿼리에 oldData(이전 데이터)
          // data를 다시 새로 받아온 데이터를 활용하여
          // UI를 먼저 바꿔주고
      },
      onSettled: () => {
         queryClient.invalidateQueries([commentKey.GET_COMMENT_LIST]);
      },
      // 성공 여부와 실패 여부와는 상관없이 데이터를 호출
   })


   return (
      <BtnWrap>
      <textarea typeof='text' name='comment' value={comment} onChange={onChangeForm}></textarea>
         <CancelBtn onClick={onClickOpenBtn}> 취소 </CancelBtn>
         <UpdateBtn onClick={()=> updateCommentMutation.mutate()}> 댓글 수정 </UpdateBtn>
      </BtnWrap>
   )
}

export default CommentUpdateBtn

const BtnWrap = styled.div`
   
   & textarea {
      resize: none;
      padding: 1rem 1rem 1.5rem;
      outline: none;
      border: 1px solid #e3e4e6;
      margin-bottom: 1.5rem;
      width: 100%;
      border-radius: 4px;
      min-height: 6.125rem;
      font-size: 1rem;
      color: #212529;
      line-height: 1.75;
      background: #FFFFFF; 
      font-family : "Pretendard";
   }
   & button{
      display: flex;
      justify-content: flex-end;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      cursor: pointer;
      outline: none;
      border: none;
      background: none;
      color: #757bf6;
      border-radius: 4px;
      padding: 0px 1.25rem;
      height: 2rem;
      font-size: 1rem;
   }
`



const CancelBtn = styled.button`
   
`

const UpdateBtn = styled.button`
   
`
