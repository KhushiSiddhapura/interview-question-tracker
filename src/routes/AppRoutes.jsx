import {createBrowserRouter, RouterProvider} from 'react-router';
import AuthProtected from './Protected/AuthProtected';
import AuthLayout from '../app/layout/AuthLayout';
import Login from '../features/auth/ui/pages/Login';
import Register from '../features/auth/ui/pages/Register';
import MainProtected from './Protected/MainProtected';
import MainLayout from '../app/layout/MainLayout';
import DashboardPage from '../features/main/ui/pages/DashboardPage';
import QuestionModal from '../features/main/ui/component/QuestionModal';

const AppRoutes = () => {
  const router = createBrowserRouter ([
    {
        path: "/auth",
        element: <AuthProtected />,
        children: [
            {
                path: "",
                element: <AuthLayout />,
                children: [
                    {
                        path: "",
                        element: <Login />,
                    },
                    {
                        path: "register",
                        element: <Register />
                    }
                ]
            }
        ]
    },
    {
        path: "/",
        element: <MainProtected />,
        children: [
            {
                path: "",
                element: <MainLayout />,
                children: [
                    {
                        path: "",
                        element: <DashboardPage />
                    },
                    {
                        path: "addQuestion",
                        element: <QuestionModal />
                    }
                ]
            }
        ]
    }
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
