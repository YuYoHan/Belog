import { media } from "libs/styles/media";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import styled from "styled-components"
import { MypageData } from "./MypageList"



function MyPageCard({data} : {data : MypageData} ) {

   return(
      
            <S.Li>
               <S.StyledLink to={`/mypage/${data.title}`} state={{data}}>
                  <S.ImgContainer>
                     <img src={data.img}/>
                  </S.ImgContainer>
                  <S.Content>
                  <strong>{data.title}</strong>
                  <p>{data.content}</p>
                  <S.Tag>
                     {data.taglist.map((list,index) =><span key={index}>{list} </span>)}
                  </S.Tag>
                  
                  </S.Content>
               </S.StyledLink>
            </S.Li>
   )
}

export default MyPageCard



const Li = styled.li`
   width: 20rem;
   margin: 1rem;
   display: flex;
   flex-direction: column;

   ${media.desktopM} {
      width: calc(50% - 2rem);
   }
`

const StyledLink = styled(Link)`
   transition: .2s ease-in;

   :hover{
      transform: scale(1.02);
   }
`

const ImgContainer = styled.div`
   padding-top: 52%;
   width: 100%;
   position: relative;

      & img {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
   }

   
`

const Content = styled.div`
   padding-left: 1.5rem;
   padding-right: 1.5rem;
   box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);

    padding: 1rem;
   display: flex;
   flex: 1 1 0%;
   flex-direction: column;

   & strong {
      font-size: 1rem;
      margin: 0px 0px 0.25rem;
      line-height: 1.5;
      word-break: break-word;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      color: #212529;
   }

   & p {
      margin: 0px 0px 1.5rem;
      word-break: break-word;
      overflow-wrap: break-word;
      font-size: 0.875rem;
      line-height: 1.5;
      height: 3.9375rem;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #495057;
   }
`
const Tag = styled.div`
   display: flex;
   flex-wrap: wrap;
   
   & span{
      font-size: .875rem;
      background-color:  #F8F9FA;;
      margin: 0 0.55rem 0.4rem 0.55rem;
      border-radius: 0.5rem;
      padding: 0.5rem 0.9rem;
      text-align: center;
      color: #757bf6;
   }
`


const S = {
   Li,
   StyledLink,
   ImgContainer,
   Content,
   Tag,
}