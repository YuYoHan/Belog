import {  Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function PrivateRoute({ authenticated, component: Component }) {
    if (authenticated) {
        return <Component />;
    } else {
        toast.error('로그인 사용자만 사용 할 수 있습니다.');
        return <Navigate to="/" />;
      }
}
export default PrivateRoute;
