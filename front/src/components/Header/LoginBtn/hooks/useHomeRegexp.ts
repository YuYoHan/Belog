import { useEffect, useState } from 'react';

export type userData = {

    userAddr? : string
    userAddrDetail? : string
    userEmail : string
    userPw : string
    userName? : string
    userAddrEtc? : string
}    

/*
    회원가입시 모든 input 입력을 해야 회원가입 버튼 활성화 
    추가로 비밀번호는 8자 이상이여야한다.
*/
const useHomeRegexp = ( joindata : userData) => {
    const [disabled, setDisabled] = useState<boolean>(true);
    
    useEffect(() => {
        const JoinData = Object.values(joindata)
        const allValuesEmpty = JoinData.every(val => val !== "")
        
        if(allValuesEmpty&& JoinData[1].length >= 8) {
            setDisabled(false)
        }else{
            setDisabled(true)
        }
    },[joindata])
    
    
    return disabled;
};

export default useHomeRegexp;
