import {createRoot} from 'react-dom/client';
import './index.css';
import AppRoutes from './routes/AppRoutes.jsx';
import {ToastContainer} from 'react-toastify';
import {DataProvider} from './app/context/AuthContext.jsx';

createRoot (document.getElementById ('root')).render (
  <DataProvider>
    <AppRoutes />
    <ToastContainer />
  </DataProvider>
);
