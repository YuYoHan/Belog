import { useMutation, useQueryClient } from "@tanstack/react-query";
import PostsApi from "apis/posts/PostsAPI";
import axios from "axios";
import { queryKey } from "consts/queryKey";
import React, { useState } from "react";
import styled from "styled-components"
import DetailConfirmModal from "./ConfirmModal/Modal";



function RemoveBtn({ id } : {id : number} ) {

   const [modalOpen, setModalOpen] = useState<boolean>(false);
   
   const onOpenModal = () => {
      setModalOpen(true)
   }

   return (
      <div>
      <Button onClick={onOpenModal}>삭제</Button>
      {modalOpen && <DetailConfirmModal id={id} setModalOpen={setModalOpen}/>}
      </div>
   )
}

export default RemoveBtn

const Button = styled.div`
   padding: 12px 20px;
   min-width: 60px;
   height: 40px;
   border-radius: 50px;
   font-weight: 700;
   font-size: 14px;
   background: #e9ecef;
   color: #272c32;
   margin-right: 1rem;
   cursor: pointer;
`
