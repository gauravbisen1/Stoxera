import { StrictMode } from 'react'
import { BrowserRouter , Routes , Route} from "react-router"
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Signup from "./landing_page/signup/Signup.jsx"
import About from "./landing_page/about/About.jsx"
import Product from "./landing_page/products/ProductPage.jsx"
import Pricing from "./landing_page/pricing/Pricingpage.jsx"
import Support from "./landing_page/support/Support.jsx"
import Navbar from './landing_page/Navbar.jsx'
import Footer from './landing_page/Footer.jsx'
import NotFound from './landing_page/NotFound.jsx'

createRoot(document.getElementById('root')).render(
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<App/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/product' element={<Product/>} />
          <Route path='/pricing' element={<Pricing/>} />
          <Route path='/support' element={<Support/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
)
