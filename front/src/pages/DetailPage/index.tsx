// import CommentIndexPage from "components/Comment/CommentForm";
// import CommentList from "components/Comment/CommentList";
import PostsApi from "apis/posts/PostsAPI";
import CommentIndexPage from "components/Comment/CommentForm";
import CommentList from "components/Comment";
import useEditable from "hooks/editable";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components"
import EditBtn from "./EditBtn";
import RemoveBtn from "./RemoveBtn";
import TimeForToday from "hooks/usedaysTimer";


export interface DetailpageData {
   boardContents: string;
   writeTime: string;
   boardNum: number;
   boardTitle: string;
   hashTag?: string;
   boardImages?: string[];
   userId : null | number
   
}

export interface Detaildata {
   data : DetailpageData
}


function DetailPage() {

   /*
      {boardNum,userEmail,writeTime} - 게시글 상세 번호,이메일,작성날자
      data - 상세 페이지 api state
      tagList - 서버에 저장된 태그 리스트 저장 state
      userId - 게시글 작성 유저 아이디
      EditableBtn - 작성한 유저가 일치하면 수정 삭제 권한 부여 hook

   */
   const location = useLocation();
   const {boardNum,userEmail,writeTime} = location.state.data
   const [data , setData] = useState<DetailpageData>()
   const [tagList , setTagList] = useState<string[]>([])
   const userId = data?.userId as number;
   const EditableBtn =  useEditable(userId)
   
   
   //상세 페이지 api 호출 
   useEffect(() => {
      const fetchData = async () => {
         try{
            const res = await PostsApi.getDetailPostsApi(boardNum)
            setData(res.data)
            // 서버에서 빈 배열을 보내줬기떄문에 1보다 큰 것만 랜더링 되게 로직 구현
            if(res && (res?.data?.hashTag?.length ?? 0) >= 1) {
               const fetchtagItem = res?.data?.hashTag?.split(',')
               fetchtagItem?.map((item : string) => {
                  setTagList((props) => [...props,item])
               })
            }
         }catch(err){
            alert('상세 페이지를 불러오지 못했습니다.')
         }
      }
      fetchData()
   },[setData])


   return (
      <S.Wrapper> 
         <S.Title>
            {data?.boardTitle}
         </S.Title>
         <UserInpo>
            <div><span>작성자 : </span> <span>{userEmail}</span></div>
            <Days>
               <div><span>작성 날자 : </span><span>{TimeForToday(writeTime)}</span></div>
            </Days>
         </UserInpo>
         <S.TagWrap>
            {/* 서버에서 빈 배열 보내줘서 조건처리 0보다 큰 태그리스트만 랜더링 */}
            {
               tagList.length > 0 && 
               tagList.map((tagItem, index) => {
            return (
               <S.TagItem key={index}>
               <S.Text>{tagItem}</S.Text>
               </S.TagItem>
            )})}
         </S.TagWrap>
         {
            EditableBtn &&
            <S.ButtonWrap>
            {data && <EditBtn data={data} />}
               <RemoveBtn boardNum={boardNum} img={data?.boardImages}/>
            </S.ButtonWrap>
            }
         <S.Content className="ql-editor">
         {data && (
            <div dangerouslySetInnerHTML={{ __html: data.boardContents }} />
         )}
            <CommentList boardNum={boardNum}/>
         </S.Content>
      </S.Wrapper>
   )
}

export default DetailPage

const Wrapper = styled.div`
   max-width: 900px;
   width: 100%;
   display: flex;
   flex-direction: column;
   margin: 0 auto;
   padding: 1.5rem 1.5rem 5rem
`

const UserInpo = styled.div`
   margin-top: 5rem;
   padding-bottom: 3rem;
   border-bottom: 3px solid #f2f2f2;

   & span{
      color: #333;
      font-size: 18px;
      font-weight: 700;
      padding-right: 15px;
   }
`

const Days = styled.div`
   font-size: 18px;
   color: #717171;
   margin-top : 2rem
`

const Title = styled.div`
   margin-top: 2.5rem;
   font-weight: 800;
   font-size: 3rem;
   line-height: 126.5%;
   letter-spacing: -.005em;
   color: #000;
`
const ButtonWrap = styled.div`
   display: flex;
   justify-content: flex-end;
   margin-top: 3rem;

`
const Content = styled.div`
   margin: 5rem 0;

   & img{
      display: block;
      margin: 3rem auto;
      max-width: 100%;
   }
`

const TagWrap = styled.div`
   color: #212529;
   font-size: 1.125rem;
   display: flex;
   align-items: center;
   flex-wrap: wrap;
   margin-top: 1.5rem;
   margin-bottom: -0.875rem;
   min-height: 0.875rem;
`

const TagItem = styled.div`
   background-color: #757bf6;
   color: white;
   margin-bottom: 0.875rem;
   padding-left: 1rem;
   padding-right: 1rem;
   height: 2rem;
   border-radius: 1rem;
   display: inline-flex;
   align-items: center;
   margin-right: 0.875rem;
   text-decoration: none;
   font-weight: 500;
   font-size: 1rem;
`

const Text = styled.span``



const S = {
   Wrapper,
   Title,
   ButtonWrap,
   Content,
   TagWrap,
   TagItem,
   Text,
}