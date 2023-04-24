import Header from 'components/Header/Header';
import DetailPage from 'pages/DetailPage/Detail';
import MainPageList from 'pages/MainPage/MainList';
import MyPage from 'pages/Mypage';
import PostingPage from 'pages/Posting';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Routing() {
   return(
      <BrowserRouter>
         <Routes>
            <Route element={<Header/>}>
               <Route path='/' element={<MainPageList/>} />
               <Route path='/Posting' element={<PostingPage/>} />
               <Route path='/Posting/:boardNum' element={<PostingPage/>} />
               <Route path='/myPage' element={<MyPage/>} />
               <Route path='list/:title' element={<DetailPage/>} />
               <Route path='/mypage/:title' element={<DetailPage/>} />
            </Route>
         </Routes>
      </BrowserRouter>
   )
}
export default Routing