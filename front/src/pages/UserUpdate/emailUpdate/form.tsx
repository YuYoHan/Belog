import  {  useState } from 'react'
import styled from 'styled-components'
import { userEmailDataPrpos } from '../Index'

function UserEmailform({email,userEmail,onChangeForm} : userEmailDataPrpos) {

   /*
      EmailEdit - 수정하기 버튼 클릭 시 div -> input 태그 용도
      Emailvalue - 서버에서 받아온 유저 이메일
   */
   const [EmailEdit, setEmailEdit] = useState<boolean>(false)
   const [Emailvalue, setEmailvalue]= useState(email)

   const onClickEmailUpdate = () => {
      setEmailEdit(true)
   }
   
   const onChnageEmailEdit = () => {
      setEmailEdit(false)
      setEmailvalue(userEmail)
   }

   return (
      <Wrapper>
         <EmailTitle >
            {
               !EmailEdit ? 
               Emailvalue
               :
               <Input type='email' name='userEmail' value={userEmail} onChange={onChangeForm}/>
            }
         </EmailTitle>
         <EditWrapper>
            {
               EmailEdit ?
               <button onClick={onChnageEmailEdit}>저장</button>
               :
               <button onClick={onClickEmailUpdate}>수정</button>
            }
         </EditWrapper>
      </Wrapper>
   )
}

export default UserEmailform
   
const Wrapper = styled.div`
   flex: 1 1 0%;
   display: flex;
   align-items: center;

   
`
const EmailTitle = styled.div`
   flex: 1 1 0%;
   font-size: 1rem;
   color: #495057;
   line-height: 1.5;
   display: flex;
   align-items: center;
`
const EditWrapper = styled.div`
   display: flex;
   align-items: center;
   margin-left: 1rem;

   & button{
      outline: none;
      padding: 0px;
      border: none;
      display: inline;
      font-size: 1rem;
      line-height: 1.5;
      color: #757bf6;
      text-decoration: underline;
      background: none;
      cursor: pointer;
   }
`
const Input = styled.input`
   display: block;
   border: 1px solid #DEE2E6;
   background: #FFFFFF;
   padding: 0.5rem;
   color: #495057;
   font-size: 1rem;
   line-height: 1rem;
   outline: none;
   border-radius: 4px;
   flex: 1 1 0%;
   margin-right: 1rem;
`