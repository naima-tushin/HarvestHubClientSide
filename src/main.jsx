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
// import AOS from 'aos';
// import AvailableFoods from './components/AvailableFoods/AvailableFoods';
// import MyArtCraft from './components/MyArtCraft/MyArtCraft';
import FeaturedFoodsHomeDetails from './components/FeaturedFoodsHomeDetails/FeaturedFoodsHomeDetails';
// import 'aos/dist/aos.css';
// AOS.init();
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AvailableFood from './components/AvailableFood/AvailableFood';
// import AllCraftCategoryDetails from './components/AllCraftCategoryDetails/AllCraftCategoryDetails';
// import AllSubcategoryCraft from './components/AllSubcategoryCraft/AllSubcategoryCraft';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        // loader: () => fetch('https://users-management-server-five.vercel.app/craft')

      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <SignUp></SignUp>,
      },
      // {
      //   path: '/AvailableFoods',
      //   element: <AvailableFoods></AvailableFoods>,
      //   loader: () => fetch('https://users-management-server-five.vercel.app/craft')
      // },
      // {
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
            loader: () => fetch('http://localhost:5000/allFood')
      
      },

      // {
      //   path: '/myartcraft/:userEmail',
      // ManageMyFoods
      //   element: <ProtectedRoute>
      //     <MyArtCraft></MyArtCraft>,
      //   </ProtectedRoute>,
      //   loader: ({ params }) => fetch(`https://users-management-server-five.vercel.app/myCraft/${params.userEmail}`)
      // },
      {
        path: '/FeaturedFoodsHomeDetails',
        element: <ProtectedRoute>
          <FeaturedFoodsHomeDetails></FeaturedFoodsHomeDetails>
        </ProtectedRoute>,
        // loader: ({ params }) => fetch(`https://users-management-server-five.vercel.app/craft/${params.id}`)
      },
      // {
      //   path: '/allCraftCategoryDetails/:id',
      // MyFoodRequest
      //   element: <AllCraftCategoryDetails></AllCraftCategoryDetails>,
      //  loader: ({ params }) => fetch(`https://users-management-server-five.vercel.app/craftSubcategory/${params.id}`)
      // },
      // {
      //   path: '/updateCraft/:id',
      //   element: <UpdateCraft></UpdateCraft>,
      //   loader: ({ params }) => fetch(`https://users-management-server-five.vercel.app/craft/${params.id}`)
      // },
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