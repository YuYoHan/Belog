import { Outlet, Navigate } from 'react-router-dom';
import { SessionRepository } from 'repository/SessionRepository';

function PrivateRoute() {
    const access = SessionRepository.getToken();
    return access ? <Outlet /> : <Navigate to="/" />;
}
export default PrivateRoute;
