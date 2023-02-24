import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup';

// 유효성 검사를 위해 yup 라이브러리 설치 
    
export const joinUpValidation = yup.object({
    
    userName : yup
    .string()
    .required(),

    userEmail : yup
    .string()
    .required('이메일을 입력해주세요.')
    .email(),

    userPw : yup
    .string()
    .required('비밀번호를 입력해주세요.')
    .min(4,'비밀번호는 4자리 이상이여야합니다.')
    .max(15,'비밀번호는 15자리 이하여야합니다.' ),

   /* 
    비밀번호 확인 
    userPw2 : yup
    .string()
    .oneOf([yup.ref('userPw'),null],'비밀번호가 일치하지 않습니다.'),
*/
    
    /*주소입력API적용하기 
    userAddr : 
    */
})