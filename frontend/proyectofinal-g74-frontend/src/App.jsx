import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './App.css'

//import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { FavoritesProvider } from './context/FavoritesContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './views/Home'
import CreatePost from './views/CreatePost';
import Gallery from './views/Gallery';
import Login from './views/Login';
import MyPosts from './views/MyPosts';
import Profile from './views/Profile';
import Register from './views/Register';
import PromotePost from './views/PromotePost';
import DetailPost from './views/DetailPost';
import FavoritePosts from './views/FavoritePosts';
import ShoppingCart from './views/ShoppingCart';
import Checkout from './views/Checkout';
import Thanks from './views/Thanks';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <CartProvider>
        <FavoritesProvider>
          <Router>
            <Navbar />
            <div style={{ padding: "1rem" }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Gallery" element={<Gallery />} />
                <Route path="/CrearPublicacion" element={<CreatePost />} />
                <Route path="/PromocionarPublicacion" element={<PromotePost />} />
                <Route path="/DetallePublicacion/:id" element={<DetailPost />} />
                <Route path="/Favoritos" element={<FavoritePosts />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/UsuarioPublicacion" element={<MyPosts />} />
                <Route path="/Shopping" element={<ShoppingCart />} />
                <Route path="/Checkout" element={<Checkout />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/Gracias" element={<Thanks />} />
                <Route path="*" element={<h1>404 Not Found</h1>} />
              </Routes>
              <ToastContainer />
            </div>
            <Footer />
          </Router>
        </FavoritesProvider>
      </CartProvider>
    </>
  )
}

export default App
