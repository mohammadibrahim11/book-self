import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom/dist";
// import Button from 'react-bootstrap/Button';
import Books from "./Components/Books/Books";
// import Header from './Components/Header/Header';
import Home from "./Components/Home/Home";
import Root from "./Components/Root/Root";

const App = () => {
  const router = createBrowserRouter([
    { 
    path: "/", 
    element: <Root></Root> ,
    children:[
    {
         path:'/home',
         element:<Home></Home>,
    },
    {
         path:'/books',
         element:<Books></Books>,
    },
 
  ]
},
]);
  return (
    <div>
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
