import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const showNav = () => {
    setToggle(!toggle);
  };

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
          {/* {navbarData.map((link, index) => {
            return (
              <li key={index} className={link.cname}>
                <Link
                  className="hover:text-sky-500"
                  to={link.href}
                  onClick={showNav}
                >
                  {link.title}
                </Link>
              </li>
            );
          })} */}

          <Link to="/" class="hover:text-blue-200 transition" >
            Inicio
          </Link>
          <Link to="/Gallery" class="hover:text-blue-200 transition" >
            Galeria
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
