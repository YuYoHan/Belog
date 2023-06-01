import { useEffect, useState } from 'react';

export type userData = {

    userAddr? : string
    userAddrDetail? : string
    userEmail : string
    userPw : string
    userName? : string
    userAddrEtc? : string
}    


const useHomeRegexp = ( joindata : userData) => {
    const [disabled, setDisabled] = useState<boolean>(true);
    
    useEffect(() => {
        const JoinData = Object.values(joindata)
        const allValuesEmpty = JoinData.every(val => val !== "")
        
        if(allValuesEmpty&& JoinData[1].length > 8) {
            setDisabled(false)
        }else{
            setDisabled(true)
        }
    },[joindata])
    
    
   
    return disabled;
};

export default useHomeRegexp;
