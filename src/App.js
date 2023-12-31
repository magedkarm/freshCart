import React from 'react'
import { Navigate, RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Brands from './components/Brands/Brands'
import Cart from './components/Cart/Cart'
import Login from './components/Login/Login'
import Products from './components/Products/Products'
import Categories from './components/Categories/Categories'
import Register from './components/Register/Register'
import NotFound from './components/NotFound/NotFound'
import AuthContextProvider from './Context/AuthContect'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import ProductDetails from './components/ProductDetails/ProductDetails'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import CheckOut from './components/CheckOut/CheckOut'
import AllOrders from './components/AllOrders/AllOrders'


export default function App() {
  let queryClient = new QueryClient()
  let routers = createHashRouter([
    {
      path: "", element: <Layout />, children: [
        { path: "", element: <Navigate to={"home"} /> },
        { path: "home", element: <ProtectedRoute><Home /></ProtectedRoute> },
        { path: "brands", element: <ProtectedRoute><Brands /></ProtectedRoute> },
        { path: "cart", element: <ProtectedRoute><Cart /></ProtectedRoute> },
        { path: "login", element: <Login /> },
        { path: "products", element: <ProtectedRoute><Products /> </ProtectedRoute> },
        { path: "productDetails/:id", element: <ProtectedRoute><ProductDetails /> </ProtectedRoute> },
        { path: "categories", element: <ProtectedRoute><Categories /> </ProtectedRoute> },
        { path: "checkout/:cartId", element: <ProtectedRoute><CheckOut /> </ProtectedRoute> },
        { path: "allorders", element: <ProtectedRoute><AllOrders /> </ProtectedRoute> },
        { path: "register", element: <Register /> },
        { path: "*", element: <NotFound /> },
      ]
    }
  ])
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <RouterProvider router={routers}></RouterProvider>
        </AuthContextProvider>
        {/* <ReactQueryDevtools /> */}
      </QueryClientProvider>


    </>
  )
}
