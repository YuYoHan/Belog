import TimeForToday from "hooks/usedaysTimer";
import { media } from "libs/styles/media"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { BoardData} from "./MainList"


/**
 * @param {number} boardNum - 게시판 아이디.
 * @param {strinnumberg} userId - 사용자 아이디
 * @param {string} boardTitle - 제목
 * @param {string} boardImages - 본문 이미지
 * @param {string} writeTime - 작성시간
 * @param {string} boardContents - 게시물 본문 내용
 * @param {string} hashTag - 태그리스트
 */
function MainPageCard ({data} : {data : BoardData}) {
   
   //HTML 태그 text 만 노출시키기 위한  랜더링 해주기 위한 함수
   const createMarkup = () => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(data.boardContents, 'text/html');
      const html = doc.body.textContent;
      
      return html;
   };

   const markup = createMarkup();
   

   return (
      <S.Li>
         {/* state 게시판 ID 전달 */}
         <S.StyledLink to={`list/${data.boardTitle}`} state={{data}}>
            {
            data.boardImages && data.boardImages.length > 0 &&
               <S.ImgContainer>
                  <img src={data.boardImages?.[0]} alt="게시판 이미지"/>
               </S.ImgContainer>
            }
            <S.Content>
               <strong>{data.boardTitle}</strong>
               {markup && <p dangerouslySetInnerHTML={{ __html: markup }}></p>}
               <Days>
                  <span>{TimeForToday(data.writeTime)}</span>
               </Days>
            </S.Content>
         </S.StyledLink>
      </S.Li>
   )
}

export default MainPageCard


const Li = styled.li`
   width: 20rem;
   min-height: 20rem;
   margin: 1rem;
   display: flex;
   flex-direction: column;
   box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);
   ${media.tablet} {
      width: calc(50% - 2rem);
   }
   
   ${media.mobildL} {
      width: 100%;
      margin: 2rem 0px;
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
   padding: 1rem 1rem;
}

   
`

const Content = styled.div`
   padding-left: 1.5rem;
   padding-right: 1.5rem;
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
      font-weight: 600;
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

const Days = styled.div`
   color: #868E96;
   font-size: 0.75rem;
   line-height: 1.5;
`

const Userinfo = styled.div`
   padding: 0.625rem 1rem;
   border-top: 1px solid #F1F3F5;
   display: flex;
   font-size: 0.75rem;
   line-height: 1.5;
   justify-content: space-between;
   background-color: #fff;
   
   & div{
      display: flex;
   }
   & div img {
      object-fit: cover;
      border-radius: 50%;
      width: 1.5rem;
      height: 1.5rem;
      display: block;
      margin-right: 0.5rem;
   }
   & div > span {
      color: #222;
   }
`


const S = {
   Li,
   StyledLink,
   ImgContainer,
   Content,
   Days,
   Userinfo,
}