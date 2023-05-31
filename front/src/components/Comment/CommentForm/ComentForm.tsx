import useInput from "hooks/useInput"
import styled from "styled-components"
import CommentApi from 'apis/comment/CommentAPI'
import { commentKey } from 'consts/queryKey'
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Axios from "apis/@core";
import { toast } from "react-toastify";
import { SessionRepository } from "repository/SessionRepository";


function ComentForm({boardNum} : {boardNum : number}) {

   //input 사용자가 입력한 text 데이터
   const [comment , setContent, reset] = useInput('');
   const UserSessiondata = SessionRepository.getSession();
   const userId = UserSessiondata.userid
   
   // 서버에 보낼 댓글 데이터
   const commentobj = {
      comment,
      userId,
   }
   
   const queryClient = useQueryClient();
   const CommentAddmutation  : any = useMutation(() => CommentApi.createCommentApi(boardNum,commentobj), {
      onSuccess: (res) => {
         queryClient.invalidateQueries([commentKey.GET_COMMENT_LIST]);
         reset("");
      },
   })

   // 댓글 등록시 값을 입력하지 않았다면 등록되지않음, 댓글 등록시 CommentAddmutation.mutate() 실행
   const handleCommentMutation = () => {
      if(!userId) return toast.error('로그인 후 이용 가능합니다.')
      if(comment.length === 0) return toast.error('댓글 내용을 입력해주세요.')
      CommentAddmutation.mutate();
   }
      

   return (
      <S.Wrapper>
         <form >
            <textarea value={comment}  onChange={setContent} placeholder="댓글을 작성하세요" ></textarea>
         </form>
         <ButtonWrap>
         {/* <button onClick={test}> */}
         <button onClick={handleCommentMutation}>
            댓글 등록
         </button>
      </ButtonWrap>
      </S.Wrapper>
   )
}

export default ComentForm

const Wrapper = styled.div`
   & textarea{
      font-family: inherit;
      padding: 1rem 1rem 1.5rem;
      outline: none;
      border: 2px solid #e1e1e1;
      border-radius: 16px;
      width: 100%;
      min-height: 100px;
      margin-bottom: 10px;
      resize: none;
   }
`
const ButtonWrap = styled.div`
      display: flex;
      justify-content: flex-end;
      margin: 16px 0 24px;
   & button{
      padding: 10px 30px;
      min-width: 120px;
      height: 40px;
      background-color: #757bf6;
      border-radius: 50px;
      font-weight: 700;
      color: #fff;
      font-size: 16px;
      cursor: pointer;
   }
`





const S = {
   Wrapper,
  
}