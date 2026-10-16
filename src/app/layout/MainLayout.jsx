import {Outlet} from 'react-router';
import {MainProvider} from '../context/MainContext';

const MainLayout = () => {
  return (
    <MainProvider>
      <Outlet />
    </MainProvider>
  );
};

export default MainLayout;
