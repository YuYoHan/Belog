import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';


const GlobalStyles = createGlobalStyle`

   ${reset}
   
   html, body {
      height: 100%;
      font-family: Pretendard, -apple-system, BlinkMacSystemFont,'Malgun Gothic','맑은 고딕','helvetica','Apple SD Gothic Neo', sans-serif;
   }
   *{  
      box-sizing: border-box;
   }
   button {
      border: none;
   }
   a {
      text-decoration: none;
   }
   strong{
      font-weight: bold;
   }
   em {
      font-style: italic;
   }
   p{
      line-height: 1.5;
   }
   h1{
      font-size: 2.5rem;
   }
   h2{
      font-size: 2rem;
   }
   h3{
      font-size: 2rem;
   }
   h4{
      font-size:1.125rem
   }
  
`;
export default GlobalStyles;
