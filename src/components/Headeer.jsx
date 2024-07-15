import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { IoIosLogOut, IoMdMenu, IoMdClose } from "react-icons/io";
import UserProfileMenu from "./UserProfileMenu";
import { useNavigate } from "react-router-dom";

function Header() {
  const [expanded, setExpanded] = useState(false);
  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const redirect = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setShow(false);
    redirect("/login");
  };

  const handleToggle = () => {
    setExpanded(!expanded);
  };
  const handleShowPersonMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, []);

  return (
    <Navbar expand="lg" className="bg-white header py-3 ">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            {" "}
            <img src={logo} alt="brand Logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle}>
          {expanded ? <IoMdClose size={28} /> : <IoMdMenu size={28} />}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-lg-flex gap-2 gap-lg-5 links">
            {show ? (
              <Link to="/appliedjobs" className="fs-5 nav-link ">
                Applied Jobs
              </Link>
            ) : (
              <Link to="/" className="fs-5 nav-link ">
                Home
              </Link>
            )}
            <Link to="/jobs" className="fs-5 nav-link ">
              Job Listings
            </Link>
            <Link to="/contact" className="fs-5 nav-link">
              Contact Us
            </Link>
          </Nav>
          {show ? (
            <Nav className="position-relative logout ms-lg-auto d-flex flex-row gap-3 border border-1 border-dark rounded-pill py-2 px-3 justify-content-center align-items-center">
              <button
                className="border-0 bg-transparent"
                aria-label="User Profile"
                onClick={handleShowPersonMenu}
              >
                <IoPersonSharp className="fs-4" />
              </button>
              <span> | </span>
              <button
                className="bg-transparent border-0"
                onClick={handleLogout}
              >
                <IoIosLogOut className="text-danger fs-4" />
              </button>
              {showMenu && (
                <div
                  style={{ top: "60px", left: "-10px" }}
                  className="position-absolute "
                >
                  <UserProfileMenu />
                </div>
              )}
            </Nav>
          ) : (
            <Nav className="ms-auto d-lg-flex gap-3">
              <Button className="btn rounded-3 btn-info text-white">
                <Link
                  to="/login"
                  className=" fs-5 text-white text-decoration-none"
                >
                  Log in
                </Link>
              </Button>
              <Button className="btn bg-transparent border-0">
                <Link
                  to="/register"
                  className="fs-5 text-dark text-decoration-none"
                >
                  Sign up
                </Link>
              </Button>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
