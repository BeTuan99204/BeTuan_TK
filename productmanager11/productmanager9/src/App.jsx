
import './App.css'
import Home from './pages/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import AddProduct from './pages/AddProducts'
import UpdateProduct from './pages/UpdateProducts'
import ProductDetail from './pages/ProductDetail'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function App() {


  return (
    <>
      <BrowserRouter>
      <ToastContainer />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/add' element={<AddProduct />}/>
          <Route path='/update/:id' element={<UpdateProduct />}/>
          <Route path='/product/:id' element={<ProductDetail />}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
