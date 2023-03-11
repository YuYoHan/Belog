import Axios from "apis/@core";
import PostsApi from "apis/posts/PostsAPI";
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
   publishedAt: string
}
// testsadasdasdadssad
function MainPageList() {

   const [mainlist , setmainlist] = useState<Array<MainPageData>>();
  
   useEffect(() => {
      
      const fetchData = async () => {
         const res = await PostsApi.getPostsApi();
         setmainlist(res.data);
      }
       fetchData()
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
