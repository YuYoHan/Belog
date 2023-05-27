import Axios from "apis/@core";
import { userData } from "components/Header/LoginBtn/hooks/useHomeRegexp";
import { UserData, UserDataResponse } from "pages/UserUpdate/Index";

interface loginData {
    data : {
        userAddr: null | string;
        userAddrDetail: null | string;
        userAddrEtc: null | string;
        userEmail: string;
        userId: number;
        userName: null | string;
        userPw: null | string;
    }
}

interface JoinData {
    data : string
}

const path = 'http://15.164.220.47:8080/v1/user/'
/*
    AuthApi.login - 로그인 API (이메일,비밀번호)
    AuthApi.signup - 회원가입 API (userData - 타입스크립트참고)
    AuthApi.logout - 로그아웃 API
    AuthApi.getUser - 유저 상세조회 (유저 이메일)
    AuthApi.userUpdate - 유저 상세정보 수정 API (유저아이디 ,userData - 타입스크립트참고)
 */
export const AuthApi = {
    login: ({ userEmail ,userPw } : userData) :Promise<loginData> => {
        return Axios.post(
        path + 'loginUser' ,
        {  userEmail ,userPw });
    },
    signup: (joindata : userData)  : Promise<JoinData> => {
        return Axios.post(path , joindata);
    },
    
    logout: () => {
        return Axios.get(path + 'logOut')
    },

    getUser: (userEmail : string)  : Promise<UserDataResponse> => {
        return Axios.get(path + userEmail );
    },

    userUpdate: (UserId: number,UserData : UserData)  : Promise<UserDataResponse> => {
        return Axios.put( path + UserId, UserData);
    },
};
