import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/Error/ErrorPage'
import Home from '../Pages/Home/Home';
import AllApps from '../Pages/AllApps/AllApps';
import Installation from '../Pages/Installation/Installation';

export const router = createBrowserRouter([
  {
    path: "/",
    element:<Root />,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
       {
          index:true,
          path:'/',
          loader:() => fetch('data.json'),
          Component:Home,
       },
       {
          path:'/Apps',
          loader:() => fetch('alldata.json'),
          Component:AllApps,
       },
       {
        path:'/Installation',
        Component:Installation,

       },
       {
        
       }

    ]
  },
]);
