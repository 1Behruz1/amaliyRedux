import React from "react";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Private from "./pages/Private/Private";
import Home from "./pages/Public/Public";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/private", element: <Private /> },
]);

function App() {
  return (
      <RouterProvider router={router} />
    
  );
}

export default App;
