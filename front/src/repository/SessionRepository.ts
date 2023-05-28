

export const SessionRepository = {
    setSession: (email : string, userid:number) => {
        // sessionStorage
        // 로걸스토리지에 토큰값을 넣는방법
        sessionStorage.setItem("email",email);
        sessionStorage.setItem("userid", String(userid));
    },
    // 중복된 토큰 키 값이 set되면 update

    getSession: () => {
        return {
            email: sessionStorage.getItem("email"),
            userid: parseInt(sessionStorage.getItem("userid") || "0"),
        }
    },
    removeSession: () => {
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("userid");
    },
};
