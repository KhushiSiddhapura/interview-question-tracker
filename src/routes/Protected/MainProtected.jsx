import {Navigate, Outlet} from 'react-router';
import {useAuth} from '../../features/auth/hook/authHook';

const MainProtected = () => {
  const {activeUser} = useAuth ();
  if (!activeUser) {
    return <Navigate to={'/auth'} />;
  }
  return <Outlet />;
};

export default MainProtected;
