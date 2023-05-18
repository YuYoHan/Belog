import useInput from "hooks/useInput"
import styled from "styled-components"
import CommentApi from 'apis/comment/CommentAPI'
import { commentKey } from 'consts/queryKey'
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import { commentScrollMove } from "atom/comment/commentScrollmove";
import Axios from "apis/@core";


function ComentForm({boardNum} : {boardNum : number}) {


   const [comment , setContent, reset] = useInput('');
   const [commentScrollMoveValue ,setcommentScrollMoveValue] = useRecoilState<boolean>(commentScrollMove)

   const commentobj = {
      comment
   }
   
   

   const queryClient = useQueryClient();
      const mutation  : any = useMutation(() => CommentApi.createCommentApi(boardNum,commentobj), {
         onSuccess: (res) => {
            queryClient.invalidateQueries([commentKey.GET_COMMENT_LIST]);
            reset("");
            setcommentScrollMoveValue(true)
         },
      })
      
      const test = () => {
         Axios.post(`http://3.34.52.123:8080/v1/board/${boardNum}/comment`,commentobj).
         then((res) => {
            
         }).catch((err)=>{
            console.log(err);
            
         })
      }
      

   return (
      <S.Wrapper>
         <form >
            <textarea value={comment}  onChange={setContent} placeholder="댓글을 작성하세요" ></textarea>
         </form>
         <ButtonWrap>
         <button onClick={test}>
         {/* <button onClick={()=> mutation.mutate()}> */}
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