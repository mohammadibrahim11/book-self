import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom/dist";
import About from "./Components/About/About";

import Books from "./Components/Books/Books";

import Home from "./Components/Home/Home";
import Root from "./Components/Root/Root";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "/",
          element: <book-self></book-self>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/books",
          element: <Books></Books>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
