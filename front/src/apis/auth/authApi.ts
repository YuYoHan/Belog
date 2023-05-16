import Axios from "apis/@core";
import { userData } from "components/Header/LoginBtn/hooks/useHomeRegexp";
import { UserDataResponse } from "pages/UserUpdate/Index";


const path = 'http://13.125.208.169:8080/v1/user/'

interface UserUpdateDataProps {
    userAddr: string;
    userAddrDetail: string;
    userAddrEtc: string;
    userEmail: string;
    userPw: string;
}

export const AuthApi = {
    login: ({ userEmail ,userPw } : userData) :Promise<any> => {
        return Axios.post(
        path + 'loginUser' ,
        {  userEmail ,userPw });
    },
    signup: (joindata : userData)  : Promise<any> => {
        return Axios.post(path , joindata);
    },
    
    logout: () =>{
        return Axios.post(path + '/logout')
    },

    getUser: (userEmail : string)  : Promise<UserDataResponse> => {
        return Axios.get(path + userEmail );
    },

    userUpdate: (UserId: number,UserData : UserUpdateDataProps)  : Promise<any> => {
        return Axios.post( path + UserId, UserData);
    },
};
