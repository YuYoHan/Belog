import {  Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SessionRepository } from 'repository/SessionRepository';

function PrivateRoute({component: Component }) {
    
    // 로그인된 유저만 필요하기떄문에 세션에 저장된 유저 아이디 가져오기
    const access = SessionRepository.getSession();

    if (access.userid) {
        return <Component />;
    } else {
        toast.error('로그인 사용자만 사용 할 수 있습니다.');
        return <Navigate to="/" />;
    }
}
export default PrivateRoute;
