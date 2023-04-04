import React from 'react'
import styled, { keyframes } from 'styled-components';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKey } from "consts/queryKey";
import PostsApi from "apis/posts/PostsAPI";
import { useNavigate } from 'react-router-dom';


interface ModalType {
   id: number;
   setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
 }

function DetailConfirmModal ({id,setModalOpen} : ModalType) {
   
   const navigete = useNavigate()
   const queryClient = useQueryClient();
   
   
   const mutation  : any = useMutation(() => PostsApi.deletePostsApi(id), {
         onSuccess: () => {
            queryClient.invalidateQueries([queryKey.GET_MAINPOSTS_LIST])
            navigete('/')
         },
      })

  return (
   <S.Presentation>
     <S.WrapperModal>
      <S.Modal>
         <S.ModalTitle>
            게시물 삭제
         </S.ModalTitle>
            <S.ModalContent>
            정말로 삭제하시겠습니까?
            </S.ModalContent>
      <S.ButtonWrap>
         <S.ButtonClose onClick={() => setModalOpen(false)}>
            취소
         </S.ButtonClose>
         <S.ButtonCheck onClick={() => mutation.mutate()}>
            확인
         </S.ButtonCheck>
      </S.ButtonWrap>
      </S.Modal>
      </S.WrapperModal>
   </S.Presentation>
  )
}

export default DetailConfirmModal

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
  `;

const Presentation = styled.div`
  z-index: 1200;
  position: absolute;
`;

const WrapperModal = styled.div`
  position: fixed;
  inset: 0px;
  background-color: rgba(249,249,249,0.85);
  -webkit-tap-highlight-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
   position: relative;
   width: 25rem;
   height: 220px;
   box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
     0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
   background: #FFFFFF;
   overflow: hidden;
   border-radius: 8px;
   transition: all 400ms ease-in-out 2s;
   animation: ${fadeIn} 400ms;
   padding: 2rem 1.5rem;
  &::-webkit-scrollbar {
    display: none;
    visibility: hidden;
  }

  & {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  @media screen and (max-height: 768px) {
    & {
      overflow-y: scroll;
    }
  }

  @media screen and (max-width: 768px) {
    .modal__overview {
      font-size: 16px;
    }
    .modal__details {
      font-size: 16px;
    }
    .wrapper-modal {
      padding: 0;
    }
    & {
      overflow-y: scroll !important;
    }
  }
`;

const ModalTitle = styled.h2`
  padding: 0;
  font-size: 1.5rem;
  margin: 16px 0;
`;

const ModalContent = styled.div`
  color: #495057;
  line-height: 1.5;
   font-size: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    white-space: pre-wrap;
`;

const ButtonWrap = styled.div`
   margin-top: 2rem;
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;

    & button{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      cursor: pointer;
      outline: none;
      border: none;
      border-radius: 4px;
      padding: 0px 1.25rem;
      height: 2rem;
      font-size: 1rem;
}
`

const ButtonClose = styled.button`
   color: #757bf6;
   background-color: none;
`

const ButtonCheck = styled.button`
   color: #ffffff;
   background-color: #757bf6;
   margin-left: 0.75rem;
`




const S = {
   Presentation,
   WrapperModal,
   Modal,
   ModalContent,
   ModalTitle,
   ButtonWrap,
   ButtonClose,
   ButtonCheck,
}