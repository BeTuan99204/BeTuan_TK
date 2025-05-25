import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import AddProduct from './pages/AddProduct'
import UpdateProduct from './pages/UpdateProduct'
import ProductDetail from './pages/ProductDetail'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {


  return (
    <>
    <BrowserRouter>
    <ToastContainer/>
         <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/add' element={<AddProduct />} />
            <Route path='/update/:id' element={<UpdateProduct />} />
            <Route path='/event/:id' element={<ProductDetail />} />
        </Routes>
        <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
