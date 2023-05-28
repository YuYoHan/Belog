import { useEffect, useState } from 'react';
import { SessionRepository } from 'repository/SessionRepository';

const useEditable = ( Detailnum : number) => {
   
   const [isEditable , setEditable] = useState<boolean>(false);
   const SessionData = SessionRepository.getSession();
   const userid = SessionData.userid
   console.log(userid === Detailnum);
   
   /*
      게시글 , 댓글 등 작성한 사용자 아이디 매개변수로 받은 후 
      본인 작성글에만 삭제 수정 버튼 노출 리턴값으로 boolean 
   */ 
   useEffect(() => {
      
      if (userid === Detailnum) {
         setEditable(true);
       } else {
         setEditable(false);
       }
   },[Detailnum,isEditable])
   
   return isEditable
};

export default useEditable;
