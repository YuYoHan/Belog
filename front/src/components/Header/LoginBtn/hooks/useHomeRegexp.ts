import { useEffect, useState } from "react";

export type userData = {
    userAddr?: string;
    userAddrDetail?: string;
    userEmail: string;
    userPw: string;
    userName?: string;
    userAddrEtc?: string;
};

const useHomeRegexp = (joindata: userData) => {
    const [disabled, setDisabled] = useState<boolean>(true);

    useEffect(() => {
        const allValuesEmpty = Object.values(joindata).every(
            (val) => val !== ""
        );
        if (allValuesEmpty) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [joindata]);

    return disabled;
};

export default useHomeRegexp;
