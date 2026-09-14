import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // clear admin session (adjust based on your auth system)
    localStorage.removeItem("token");
    localStorage.removeItem("admin");

    navigate("/admin/login");
  };

  return (
    <div className="navbar">
      {/* Logo */}
      <div className="nav-left">
        <img
          className="logo"
          src={assets.logo}
          alt="logo"
          onClick={() => navigate("/orders")}
          style={{ cursor: "pointer" }}
        />
      </div>

      {/* Right side */}
      <div className="nav-right">
        <img
          className="profile"
          src={assets.profile_image}
          alt="profile"
        />

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;