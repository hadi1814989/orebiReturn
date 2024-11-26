
import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails'
import Contact from './pages/Contact'
import About from './pages/About'
import Cart from './pages/Cart'
import Error from './pages/Error'
import CheckOut from './pages/CheckOut'
function App() {
  let router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<Home />}></Route>
      <Route path='/shop' element={<Shop />}></Route>
      <Route path='/product/:id' element={<ProductDetails />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
      <Route path='/checkout' element={<CheckOut />}></Route>
      <Route path='/error' element={<Error />}></Route>
      </Route>
  ))
  
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}
export default App
