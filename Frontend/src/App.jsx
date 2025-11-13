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



export const App = () => {
  return (

<BrowserRouter>
<Toaster position="top-right"/>
<Routes>
<Route path="/" element={<UserLayout/>}> 
 <Route index element={<Home/>}/>  
 <Route path="login" element={<Login/>}/>  
 <Route path="register" element={<Register/>}/>  
 <Route path="Profile" element={<Profile/>}/>  
 <Route path="collections/:collection" element={<CollectionPage/>}/>  
 <Route path="product/:id" element={<ProductsGrids/>}/>  
   <Route path="checkout" element={<Checkout />} />
   <Route path="order-confirmation" element={<OrderComfirmation />} />
   <Route path="Order/:id" element={<OrderDetailPage />} />
   <Route path="/my-orders" element={<MyOrdersPage />} />

 </Route>
</Routes>
</BrowserRouter> 

  )
}
export default App 