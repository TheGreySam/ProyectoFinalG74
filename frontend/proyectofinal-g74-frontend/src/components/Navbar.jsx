import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#f2f2f2" }}>
      <div>
        <Link to="/" style={{ color: "white", textDecoration: "none", fontSize: "24px" }}>
          Home
        </Link>
      </div>
      <div>
        <Link to="/about" style={{ color: "white", textDecoration: "none", fontSize: "24px" }}>
          About
        </Link>
      </div>
      
      </nav>
  );
}