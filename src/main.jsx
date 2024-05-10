import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './AuthProvider/AuthProvider';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
// import AOS from 'aos';
// import AllArtCraft from './components/AllArtCraft/AllArtCraft';
// import MyArtCraft from './components/MyArtCraft/MyArtCraft';
// import AddCraft from './components/AddCraft/AddCraft';
// import CraftDetails from './components/CraftDetails/CraftDetails';
// import UpdateCraft from './components/UpdateCraft/UpdateCraft';
// import 'aos/dist/aos.css';
// AOS.init();
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
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
      // {
      //   path: '/login',
      //   element: <Login></Login>,
      // },
      // {
      //   path: '/register',
      //   element: <Register></Register>,
      // },
      // {
      //   path: '/allartcraft',
      //   element: <AllArtCraft></AllArtCraft>,
      //   loader: () => fetch('https://users-management-server-five.vercel.app/craft')
      // },
      // {
      //   path: '/AllSubcategoryCraft',
      //   element: <AllSubcategoryCraft></AllSubcategoryCraft>,
      //   loader: () => fetch('https://users-management-server-five.vercel.app/craftSubcategory')
      // },
      // {
      //   path: '/addcraft',
      //   element: <ProtectedRoute>
      //     <AddCraft></AddCraft>,
      //   </ProtectedRoute>,
      // },
      // {
      //   path: '/myartcraft/:userEmail',
      //   element: <ProtectedRoute>
      //     <MyArtCraft></MyArtCraft>,
      //   </ProtectedRoute>,
      //   loader: ({ params }) => fetch(`https://users-management-server-five.vercel.app/myCraft/${params.userEmail}`)
      // },
      // {
      //   path: '/CraftDetails/:id',
      //   element: <ProtectedRoute>
      //     <CraftDetails></CraftDetails>
      //   </ProtectedRoute>,
      //   loader: ({ params }) => fetch(`https://users-management-server-five.vercel.app/craft/${params.id}`)
      // },
      // {
      //   path: '/allCraftCategoryDetails/:id',
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