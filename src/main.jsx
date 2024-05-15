import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './AuthProvider/AuthProvider';
import Login from './components/Login/Login';
import AddFood from './components/AddFood/AddFood';
import SignUp from './components/SignUp/SignUp';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import FoodDetails from './components/FoodDetails/FoodDetails';
import AvailableFood from './components/AvailableFood/AvailableFood';
import ManageMyFoods from './components/ManageMyFoods/ManageMyFoods';
import MyFoodRequest from './components/MyFoodRequest/MyFoodRequest';
import UpdateFood from './components/UpdateFood/UpdateFood';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://harvest-hub-server-nine.vercel.app/allFood'),
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <SignUp></SignUp>,
      },
      {
        path: '/manageMyFoods/:userEmail',
        element: <ProtectedRoute>
          <ManageMyFoods></ManageMyFoods>
          </ProtectedRoute>,
        loader: ({ params }) => fetch(`https://harvest-hub-server-nine.vercel.app/myFood/${params.userEmail}`)

      },
      {
        path: '/addFood',
        element:
          <ProtectedRoute>
            <AddFood></AddFood>
          </ProtectedRoute>,
      },
      {
        path: '/availableFood',
        element:
            <AvailableFood></AvailableFood>,
            loader: () => fetch('https://harvest-hub-server-nine.vercel.app/allFood')
      },
      {
        path: '/myFoodRequest/:userEmail',
        element: <ProtectedRoute>
          <MyFoodRequest></MyFoodRequest>
        </ProtectedRoute>,
        loader: ({ params }) => fetch(`https://harvest-hub-server-nine.vercel.app/myRequestFood/${params.userEmail}`)
      },
      {
        path: '/foodDetails/:id',
        element: <ProtectedRoute>
          <FoodDetails></FoodDetails>
        </ProtectedRoute>,
        loader: ({ params }) => fetch(`https://harvest-hub-server-nine.vercel.app/foodDetails/${params.id}`),
      }, 
      {
        path: '/updateFood/:id',
        element: <ProtectedRoute>
          <UpdateFood></UpdateFood>
        </ProtectedRoute>,
        loader: ({ params }) => fetch(`https://harvest-hub-server-nine.vercel.app/foodDetails/${params.id}`),
      }, 
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)