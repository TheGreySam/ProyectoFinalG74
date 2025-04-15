import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaHeart, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  const [toggle, setToggle] = useState(false);

  const showNav = () => {
    setToggle(!toggle);
  };

  const iconList = [
    { icon: <FaShoppingCart />},
    { icon: <FaHeart />},
    { icon: <FaUser />}
    
  ];

  // start mobile first plus facile
  return (
    <nav className="top-0 w-full bg-gray-100 items-center flex p-4">
      <div className="flex justify-between items-center w-full flex-wrap md:flex-nowrap">
      <Link to="/" class="text-2xl font-bold" >
            Wilfred
          </Link>

        <button
          className="flex justify-end md:hidden  rounded"
          onClick={showNav}
        >
          <i className="fas fa-bars text-blue w-9 h-9 flex justify-center items-center hover:text-black text-2xl"></i>
        </button>

        <ul
          className={`${toggle ? " flex" : " hidden"
            } flex-col justify-center items-center w-full first:mt-2 md:flex-row md:w-auto md:space-x-10 md:flex`}
        >
          <Link to="/" class="hover:text-blue-200 transition" >
            Inicio
          </Link>
          <Link to="/Gallery" class="hover:text-blue-200 transition" >
            Galeria
          </Link>
        </ul>
        <ul
          className={`${toggle ? " flex" : " hidden"
            } flex-col justify-center items-center w-full first:mt-2 md:flex-row md:w-auto md:space-x-10 md:flex`}
        >
          <Link to="/Favoritos" class="hover:text-blue-200 transition" >
            <i className="fas fa-heart text-blue w-9 h-9 flex justify-center items-center hover:text-black text-2xl"></i>
          </Link>
          <Link to="/Checkout" class="hover:text-blue-200 transition" >
            <i className="fas fa-shopping-cart text-blue w-9 h-9 flex justify-center items-center hover:text-black text-2xl">
            {cart.length > 0 && (
              <span className="right-10 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                {cart.length}
              </span>
            )}
            </i>
          </Link>
          <Link to="/Profile" class="hover:text-blue-200 transition" >
            <i className="fas fa-user text-blue w-9 h-9 flex justify-center items-center hover:text-black text-2xl"></i>
          </Link>
          
        </ul>
        
        <Link to="/Login" className={`${toggle ? " flex" : " hidden"
            } text-indigo-800 hover:bg-gray-300 mx-auto md:mx-0 md:flex md:mt-0 items-center justify-center font-medium bg-gray-100 px-1 p-2 rounded-lg mt-4 w-24`}>
          Login
            </Link>
      </div>
    </nav>
  );
}
