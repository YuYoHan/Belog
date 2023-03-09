import PostingPage from "pages/Posting";
import { useState } from "react";
import styled from "styled-components"
import MyPageList from "../Myposting/MypageList";


function Tabheader() {


   let [form, setForm] = useState<string>('글');


   const onFormChange = (e : React.MouseEvent)  => {
      const { innerText } : any = e.target
      
      form = innerText.toLowerCase();
      setForm(form);
   };

   

   return(
      <S.Wrapper>
         <S.Header>
                <S.MypageSelector form={form} onClick={onFormChange}>
                    글
                </S.MypageSelector>
                <S.GroupSelector form={form} onClick={onFormChange}>
                    글 시리즈
                </S.GroupSelector>
            </S.Header>
            {form === '글' ? <MyPageList /> : <PostingPage />}
      </S.Wrapper>
   )
}

export default Tabheader

const Wrapper = styled.div`
    width: 100%;
    padding-bottom: 60px;
    
`;

const Header = styled.div`
    margin-top: 4.5rem;
    margin-bottom: 4.5rem;
    height: 48px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    & > div {
        height: 100%;
        width: 50%;
        cursor: pointer;
        text-align: center;
        line-height: 48px;
        font-weight: bold;
    }
    & > div::after{
        content: "";
        position: absolute;
        height: 4px;
        width: calc(100% - 50%);
        bottom: -22px;
        padding: 0 1rem;
        
    }
  
`;

const MypageSelector = styled.div<{form : string}>`

    & {
        ::after{
            background-color: ${({ form })  => (form === '글' ? '#757bf6' : 'none')};
            left: -13px;
            
        }
    }        
`;

const GroupSelector = styled.div<{form : string}>`
    & {
        ::after{
            background-color: ${({ form })  => (form === '글 시리즈' ? '#757bf6' : 'none')};
            right: -13px;
            
        }
    } 
`;

const S = {
    Wrapper,
    Header,
    MypageSelector,
    GroupSelector,
};
