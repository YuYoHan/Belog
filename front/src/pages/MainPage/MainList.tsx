import { useQuery } from "@tanstack/react-query";
import Axios from "apis/@core";
import PostsApi from "apis/posts/PostsAPI";
import { AxiosError } from "axios";
import queryKey from "consts/queryKey";
import { media } from "libs/styles/media";
import { useEffect } from "react";
import styled from "styled-components"
import MainPageCard from "./MainCard";

export type MainPageData = {
   id : number,
   title : string,
   content : string,
   taglist : Array<string>,
   img: string,
   profile:{username : string,img:string},
   command : string,
   publishedAt: string
}

export type queryMainPost = {
   data : MainPageData[]
}

function MainPageList() {
   

   const {data : mainlist, isFetching } = useQuery<queryMainPost >([queryKey.GET_MAINPOSTS_LIST], PostsApi.getPostsApi);
   
   console.log(isFetching);
   

   return(
      <S.Wrapper>
         <S.Innerwrap>
            <S.Ul>
               {
                  mainlist?.data.map((list  ,index) => (
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
