const Session_KEY = 'Session';

export const SessionRepository = {
    setSession: (token : any) => {
        // sessionStorage
        // 로걸스토리지에 토큰값을 넣는방법
        localStorage.setItem(Session_KEY, token);
    },
    // 중복된 토큰 키 값이 set되면 update

    getSession: () => {
        return localStorage.getItem(Session_KEY);
    },
    // removeToken: (removetoken : string) => {
    //     return localStorage.removeItem(TOKEN_KEY,removetoken);
    // },
};
