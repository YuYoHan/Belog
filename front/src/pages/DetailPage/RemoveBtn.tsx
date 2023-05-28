import React, { useState } from "react";
import styled from "styled-components"
import DetailConfirmModal from "./ConfirmModal/Modal";

interface  DetailProps {
   boardNum : number,
   img? : string[]
}


function RemoveBtn({ boardNum,img } :  DetailProps ) {

   const [modalOpen, setModalOpen] = useState<boolean>(false);
   
   const onOpenModal = () => {
      setModalOpen(true)
   }

   return (
      <div>
      <Button onClick={onOpenModal}>삭제</Button>
      {modalOpen && <DetailConfirmModal boardNum={boardNum} img={img} setModalOpen={setModalOpen}/>}
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
