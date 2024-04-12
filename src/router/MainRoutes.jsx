import { createBrowserRouter } from "react-router-dom";
import ProductsList from "../pages/products/list/ProductsList";
import AddProduct from "../pages/products/add/AddProduct";
import RegisterPage from "../pages/auth/RegisterPage";
import LoginPage from "../pages/auth/LoginPage";
import MainLayout from "./MainLayout";
import ErrorPage from "../pages/error/ErrorPage";
import NotFoundPage from "../pages/not-found/NotFoundPage";

export const router = createBrowserRouter([
  {
    id: "root",
    errorElement: <ErrorPage />,
    element: <MainLayout />,
    children: [
      { path: "/", element: <ProductsList /> },
      { path: "/add", element: <AddProduct /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
