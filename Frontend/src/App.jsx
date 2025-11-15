import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UserLayout } from './components/Layout/UserLayout'
import { Home } from './pages/Home'
import { Toaster} from 'sonner'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Profile } from './pages/Profile'
import { CollectionPage } from './pages/CollectionPage'
import { ProductsGrids } from './components/Products/ProductsGrids'
import { Checkout } from './components/Cart/Checkout'
import { OrderComfirmation } from './pages/OrderComfirmation'
import { OrderDetailPage } from './pages/OrderDetailPage'
import { MyOrdersPage } from './pages/MyOrdersPage'
import { AdminLayout } from './components/Amin/AdminLayout'
import { AdminHomePage } from './pages/AdminHomePage'
import { UserManagement } from './components/Amin/UserManagement'
import { ProductManagement } from './components/Amin/ProductManagement'
import { EditProduct } from './components/Amin/EditProduct'
import { OrderManagerment } from './components/Amin/OrderManagerment'



export const App = () => {
  return (

<BrowserRouter>
  <Toaster position="top-right" />

  <Routes>

    {/* USER ROUTES */}
    <Route path="/" element={<UserLayout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="profile" element={<Profile />} />
      <Route path="collections/:collection" element={<CollectionPage />} />
      <Route path="product/:id" element={<ProductsGrids />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="order-confirmation" element={<OrderComfirmation />} />
      <Route path="order/:id" element={<OrderDetailPage />} />
      <Route path="my-orders" element={<MyOrdersPage />} />
    </Route>


    {/* ADMIN ROUTES */}
    <Route path="/admin" element={<AdminLayout />}>
      <Route index element={<AdminHomePage />} /> 
      <Route path="users" element={<UserManagement />} /> 
      <Route path="products" element={<ProductManagement />} /> 
      <Route path="products/:id/edit" element={<EditProduct/>} /> 
      <Route path="orders" element={<OrderManagerment/>} /> 
      {/* Matches: /admin */}

    </Route>

  </Routes>
</BrowserRouter>


  )
}
export default App 