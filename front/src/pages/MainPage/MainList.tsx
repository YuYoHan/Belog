import LodingPage from "components/Loding/loding";
import { queryKey} from "consts/queryKey";
import { media } from "libs/styles/media";
import useMainpPostingListQuery from "queries/postingQuery";
import React, { useEffect } from "react";
import styled from "styled-components"
import MainPageCard from "./MainCard";
import { useInView } from 'react-intersection-observer';


export interface BoardData {
   boardContents: string;
   writeTime: string;
   boardNum: number;
   boardTitle: string;
   hashTag?: string;
   boardImages?: string[];
   userEmail:string;
}

interface Board {
   boardList: BoardData[];
}

interface PageParams {
   [index: number]: undefined;
}

interface Page {
   data: Board[];
}

export interface getPostingData {
   boardList: Board;
   data: any;
   pageParams: PageParams;
   pages: Page[];
}


function MainPageList() {
   
   /*
      react-query 무한스크롤
      data 10개 게시판 리스트 , fetchNextPage 무한스크롤 함수 , isFetching 비동기 함수가 처리되었는지 여부 
   */ 
   const { data, fetchNextPage, isFetching } = useMainpPostingListQuery();
   const [ref, inView] = useInView();
   
   // 웹 브라우저 끝 지점 도달 시 무한 스크롤 함수 실행
   useEffect(() => {
      // 서버 요청시 취소됐을때
      if (!inView || isFetching) return;
      fetchNextPage();
      
    }, [inView]);

   
   return(
      <S.Wrapper>
         <S.Innerwrap>
            <S.Ul>
               {data &&
                  data.pages.map((page, index) => (
                     <React.Fragment key={index}>
                        {page.data.boardList.map((data : BoardData, index : number ) => (
                           <MainPageCard data={data} key={index}/>
                           ))}
                     </React.Fragment>
               ))}

            </S.Ul>
         </S.Innerwrap>
               <div ref={ref} />
         {isFetching && <LodingPage />}
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
