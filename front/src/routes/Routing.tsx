import Header from 'components/Header/Header';
import PostingPage from 'pages/Posting';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Routing() {
   return(
      <BrowserRouter>
         <Routes>
            <Route element={<Header/>}>
               <Route path='/' element={<PostingPage/>} />
            </Route>
         </Routes>
      </BrowserRouter>
   )
}
export default Routing