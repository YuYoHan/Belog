import { useEffect, useState } from 'react';

const useCheckPassword = ( password : string) => {
   const [disabled, setDisabled] = useState(false);

    /*
    조건
    1. 이메일안에 @가 들어가있고
    2. 비밀번호가 8글자이 상이면
    3. disabled 상태가 fals가 된다.
    */
    useEffect(() => {
        if (password.length >= 8) {
         setDisabled(true);
           
      } else {
         setDisabled(false);
        }
    }, [ password]);

    return disabled;
};

export default useCheckPassword;
