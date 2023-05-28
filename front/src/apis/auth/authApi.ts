import Axios from "apis/@core";
import { userData } from "components/Header/LoginBtn/hooks/useHomeRegexp";
import { UserDataResponse } from "pages/UserUpdate/Index";

const path = "http://localhost:8080/v1/user/";

interface UserUpdateDataProps {
    userId: number;
    userAddr: string;
    userAddrDetail: string;
    userAddrEtc: string;
    userEmail: string;
    userPw: string;
    userName: string;
}

export const AuthApi = {
    login: ({ userEmail, userPw }: userData): Promise<any> => {
        return Axios.post(path + "loginUser", { userEmail, userPw });
    },
    signup: (joindata: userData): Promise<any> => {
        return Axios.post(path, joindata);
    },

    logout: () => {
        return Axios.get(path + "logOut");
    },

    getUser: (userEmail: string): Promise<UserDataResponse> => {
        console.log(userEmail);
        return Axios.get(path + userEmail);
    },

    userUpdate: (UserId: number, UserData: any): Promise<any> => {
        return Axios.put(path + UserId, UserData);
    },
};
