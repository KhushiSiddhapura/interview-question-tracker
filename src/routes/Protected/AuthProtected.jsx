import {Navigate, Outlet} from 'react-router';
import {useAuth} from '../../features/auth/hook/authHook';

const AuthProtected = () => {
  const {activeUser} = useAuth ();
  if (activeUser) {
    return <Navigate to={'/'} />;
  }
  return <Outlet />;
};

export default AuthProtected;
