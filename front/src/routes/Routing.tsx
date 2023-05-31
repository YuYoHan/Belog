import Header from 'components/Header/Header';
import DetailPage from 'pages/DetailPage';
import MainPageList from 'pages/MainPage/MainList';
import PostingPage from 'pages/Posting';
import UserSettion from 'pages/UserUpdate/Index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SessionRepository } from 'repository/SessionRepository';
import ScrollToTop from 'ScrollRestoration/Restoration';
import PrivateRoute from './PrivateRoute';
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
         <ScrollToTop/>
         <Routes >
            <Route element={<Header/>}>
               <Route path='/' element={<MainPageList/>} />
               <Route path='list/:title' element={<DetailPage/>} />
               <Route path='/setting' element={
                  <PrivateRoute 
                  component={UserSettion}/>}/>
            </Route>
            <Route path="/Posting" element={
                  <PrivateRoute
                  component={PostingPage}/>}/>
            <Route path='/Posting/:boardNum' element={
               <PrivateRoute 
                  component={PostingPage}/>}/>
         </Routes>
      </BrowserRouter>
   )
}
export default Routing