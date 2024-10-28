import React, { Children } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import ErrorPage from "./pages/ErrorPage";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import SingleProduct from "./pages/SingleProduct";
import Products from "./pages/Products";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";


export default function App() {
  const PageLayout = () => {
    return (
      <>
      <Header />
      <Outlet />
      <Footer />
      </>
    );
  };
  const PageRoutes = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/login",
          element: <Login/>,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/products",
          element: <Products />
        },
        {
          path: "/Product/:id",
          element: <SingleProduct />,
        },
      ],
      errorElement: <ErrorPage />,
    },
  ]);
  return (
    <main className="bg-light">
      <Toaster />
      <RouterProvider router={PageRoutes}></RouterProvider>
    </main>
  );
}
