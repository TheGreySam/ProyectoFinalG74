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
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
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
      <AuthProvider>
        <CartProvider>
          <FavoritesProvider>
            <Router>
              <Navbar />
              <div style={{ padding: "1rem" }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/Gallery" element={<Gallery />} />
                  <Route
                    path="/CrearPublicacion"
                    element={
                      <ProtectedRoute>
                        <CreatePost />
                      </ProtectedRoute>
                    } />
                  <Route path="/PromocionarPublicacion" element={
                    <ProtectedRoute>
                      <PromotePost />
                    </ProtectedRoute>
                  } />
                  <Route path="/DetallePublicacion/:id" element={
                    <ProtectedRoute>
                      <DetailPost />
                    </ProtectedRoute>
                  } />
                  <Route path="/Favoritos" element={
                    <ProtectedRoute>
                      <FavoritePosts />
                    </ProtectedRoute>
                  } />
                  <Route path="/Login" element={<Login />} />
                  <Route path="/UsuarioPublicacion" element={
                    <ProtectedRoute>
                      <MyPosts />
                    </ProtectedRoute>
                  } />
                  <Route path="/Shopping" element={<ShoppingCart />} />
                  <Route path="/Checkout" element={<Checkout />} />
                  <Route path="/Profile" element={
                    <Profile />
                  } />
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
      </AuthProvider>
    </>
  )
}

export default App
