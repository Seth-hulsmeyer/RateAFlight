import React from "react";
import { Link, useLocation } from "react-router-dom";
// import { Container, Menu, Header, Image } from "semantic-ui-react";
function NavBar() {
  const location = useLocation();
  return (
    <>
      <Link
        to="/"
        className={location.pathname === "/" ? "nav-link active" : "nav-link"}
      >
        Home
      </Link>
      <Link
        to="/about"
        className={
          location.pathname === "/about" ? "nav-link active" : "nav-link"
        }
      >
        About Us
      </Link>
      <Link
        to="/login"
        className={
          location.pathname === "/login" ? "nav-link active" : "nav-link"
        }
      >
        Login
      </Link>
    </>
  );
}
export default NavBar;
