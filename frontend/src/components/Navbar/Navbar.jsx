import React, { useContext, useState, useEffect } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
    setMenu("home");
  };

  const goToMenu = () => {
    setMenu("menu");

    if (location.pathname !== "/") {
      navigate("/");
    } else {
      const element = document.getElementById("explore-menu");

      if (element) {
        element.scrollIntoView({
          behavior: "smooth"
        });
      }
    }
  };

  useEffect(() => {
    if (
      location.pathname === "/" &&
      location.state?.scrollToMenu
    ) {
      const element = document.getElementById("explore-menu");

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth"
          });
        }, 100);
      }

      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <div className='navbar'>

      <Link
        to='/'
        onClick={() => setMenu("home")}
      >
        <img
          src={assets.logo}
          alt=""
          className='logo'
        />
      </Link>

      <ul className='navbar-menu'>

        <li
          onClick={() => {
            setMenu("home");
            navigate("/");
          }}
          className={menu === "home" ? "active" : ""}
        >
          home
        </li>

        <li
          onClick={() => {
            setMenu("menu");

            if (location.pathname !== "/") {
              navigate("/", {
                state: {
                  scrollToMenu: true
                }
              });
            } else {
              const element = document.getElementById("explore-menu");

              if (element) {
                element.scrollIntoView({
                  behavior: "smooth"
                });
              }
            }
          }}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </li>

        <li
          onClick={() => {
            setMenu("about");
            navigate("/about");
          }}
          className={menu === "about" ? "active" : ""}
        >
          about
        </li>

        <li
          onClick={() => {
            setMenu("contact-us");
            navigate("/contact");
          }}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact us
        </li>

      </ul>

      <div className='navbar-right'>

       

        

          <Link to='/cart'>
            <img src={assets.basket_icon} alt="" />
          </Link>

          <div
            className={
              getTotalCartAmount() === 0
                ? ""
                : "dot"
            }
          ></div>

        

        {!token ? (

          <button
            onClick={() => setShowLogin(true)}
          >
            sign in
          </button>

        ) : (

          <div className='navbar-profile'>

            <img
              src={assets.profile_icon}
              alt=""
            />

            <ul className='nav-profile-dropdown'>

              <li
                onClick={() => navigate("/myorders")}
              >
                <img
                  src={assets.bag_icon}
                  alt=""
                />
                <p>Orders</p>
              </li>

              <hr />

              <li onClick={logout}>
                <img
                  src={assets.logout_icon}
                  alt=""
                />
                <p>Logout</p>
              </li>

            </ul>

          </div>

        )}

      </div>

    </div>
  );
};

export default Navbar;