import { createBrowserRouter } from "react-router-dom";
import ProductsList from "../pages/products/productList/ProductsList";
import AddProduct from "../pages/products/addProduct/AddProduct";
import RegisterPage from "../pages/auth/RegisterPage";
import LoginPage from "../pages/auth/LoginPage";
import NotFoundpage from "../pages/not-found/NotFoundpage";
import MainLayout from "./MainLayout";
import ErrorPage from "../pages/error/ErrorPage";

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
      { path: "*", element: <NotFoundpage /> },
    ],
  },
]);
