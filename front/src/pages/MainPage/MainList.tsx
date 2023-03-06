import axios from "axios";
import { media } from "libs/styles/media";
import { useState,useEffect } from "react";
import styled from "styled-components"
import MainPageCard from "./MainCard";

export type MainPageData  = {
   id : number,
   title : string,
   content : string,
   taglist : Array<string>,
   img: string,
   profile:{username : string,img:string},
   command : string,
}
// testsadasdasdadssad
function MainPageList() {

   const [mainlist , setmainlist] = useState<Array<MainPageData>>();
  
   useEffect(() => {
      axios
      .get("https://2432b997-c1de-4c6d-a6a7-36b68e210341.mock.pstmn.io/mainlist")
      .then((res) => {
         setmainlist(res.data)
      })
      .catch((err) => {
         console.log(err);
      });
   },[])
   // console.log(mainlist);
   

   return(
      <S.Wrapper>
         <S.Innerwrap>
            <S.Ul>
               { mainlist &&
                  mainlist.map((list,index) => (
                     <MainPageCard data={list} key={index}/>
                  ))}
            </S.Ul>
         </S.Innerwrap>
      </S.Wrapper>
   )
}

export default MainPageList

const Wrapper = styled.div`
   background-color: #fff;
   min-height: 100%;
   width: 1728px;
   margin-left: auto;
   margin-right: auto;

   ${media.desktopL} {
      width: 1376px;
   }
   ${media.desktopM} {
      width: 1024px;
   }
   ${media.tablet} {
      width: calc(100% - 2rem);
   }
  
`;

const Innerwrap = styled.div`
   margin-top: 4rem;
`

const Ul = styled.ul`
   flex-wrap: wrap;
   display: flex;
   margin: -1rem;
   
   ${media.tablet} {
      margin: 0;
   }
`;

const S = {
   Wrapper,
   Innerwrap,
   Ul,
};
