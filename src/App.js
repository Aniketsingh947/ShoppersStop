import React from "react";
import { useGlobalContext } from "./utils/context";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Newcart from "./Pages/Newcart";
import { AppProvider } from "./utils/context";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
function App() {
  const { current } = useGlobalContext();
  const router = createBrowserRouter([
    {
      path: "*",
      element: current ? <Home /> : <Navigate to="/login" />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/cart",
      element: <Newcart />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
