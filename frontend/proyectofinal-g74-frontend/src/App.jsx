import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar />
        <div style={{ padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/CrearPublicacion" element={<CreatePost />} />
          <Route path="/PromocionarPublicacion" element={<PromotePost />} />
          <Route path="/DetailPost/:id" element={<DetailPost />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/MyPosts" element={<MyPosts />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Register" element={<Register />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
        </div>
        <Footer />
      </Router>
      


      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
