import Header from 'components/Header/Header';
import DetailPage from 'pages/DetailPage';
import MainPageList from 'pages/MainPage/MainList';
import PostingPage from 'pages/Posting';
import UserSettion from 'pages/UserUpdate/Index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Routing() {
   /* 
   MainPageList - 메인페이지 
   PostingPage - 게시글 작성페이지
   PostingPage - 수정페이지
   DetailPage - 상세페이지
   UserSettion - 유저 설정페이지
   */
   return(
      <BrowserRouter>
         <Routes>
            <Route element={<Header/>}>
               <Route path='/' element={<MainPageList/>} />
               <Route path='list/:title' element={<DetailPage/>} />
               <Route path='/setting' element={<UserSettion/>} />
            </Route>
            <Route path='/Posting' element={<PostingPage/>} />
            <Route path='/Posting/:boardNum' element={<PostingPage/>} />
         </Routes>
      </BrowserRouter>
   )
}
export default Routing