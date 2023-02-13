import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';


const GlobalStyles = createGlobalStyle`

   ${reset}
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
