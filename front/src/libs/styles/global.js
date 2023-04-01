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
`;
export default GlobalStyles;
