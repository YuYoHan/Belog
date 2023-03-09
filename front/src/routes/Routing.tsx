import Header from 'components/Header/Header';
import DetailPage from 'pages/Detail/Detail';
import MyPage from 'pages/Mypage';
import PostingPage from 'pages/Posting';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Routing() {
   return(
      <BrowserRouter>
         <Routes>
            <Route element={<Header/>}>
               <Route path='/Posting' element={<PostingPage/>} />
               <Route path='/' element={<MyPage/>} />
               <Route path='/:title' element={<DetailPage/>} />
            </Route>
         </Routes>
      </BrowserRouter>
   )
}
export default Routing