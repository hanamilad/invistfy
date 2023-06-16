import React, { useRef, useState } from "react";
import "./header.css";
import { nav } from "../../data/Data";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import LocalStorageService from "../../../services/localstorage";
import { useHistory } from "react-router-dom";
const Header = () => {
  const history = useHistory();
  const [navList, setNavList] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setuser] = useState(true);
  const pointnav = useRef();
  const pointlist = useRef();
  const [IsLoggedIn, setIsLoggedIn] = useState(
    LocalStorageService.getService().getAccessToken()
  );

  return (
    <>
      <header>
        <div className="container flex" style={{ height: "100%" }}>
          <div className="logo">
            <img src="./images/logo3.png" alt="" />
          </div>
          <div className="nav">
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="button flex">
            {IsLoggedIn ? (
              <Dropdown
                className="dropdown"
                onClick={() => (pointnav.current.style.display = "none")}
              >
                <Dropdown.Toggle
                  className="btn-secondary"
                  variant="success"
                  id="dropdown-basic"
                >
                  <img src="./images/customer/team-1.jpg" alt="" />
                  <span className="point" ref={pointnav}></span>
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-menu">
                  <Link
                    to="/ProfilePage"
                    onClick={() => {
                      window.location.href = "/ProfilePage";
                    }}
                  >
                    {" "}
                    <Dropdown.Item href="/ProfilePage">
                      Acount
                    </Dropdown.Item>{" "}
                  </Link>
                  <Link
                    to="/list"
                    onClick={() => {
                      window.location.href = "/list";
                    }}
                  >
                    <Dropdown.Item
                      href="#/action-2"
                      onClick={() => (pointlist.current.style.display = "none")}
                    >
                      List <span className="point-list" ref={pointlist}></span>
                    </Dropdown.Item>
                  </Link>
                  <Link
                    onClick={() => {
                      window.location.href = "/dash";
                    }}
                  >
                    <Dropdown.Item href="#/action-3">Dashboard</Dropdown.Item>{" "}
                  </Link>
                  <Link
                    to="/"
                    onClick={() => {
                      LocalStorageService.getService().clearToken();
                      window.location.href = "/";
                    }}
                  >
                    <Dropdown.Item>
                      {" "}
                      <i className="fa fa-sign-out"></i> Log Out
                    </Dropdown.Item>{" "}
                  </Link>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Link
                to="/log"
                className="btn btn-primary"
                onClick={() => {
                  window.location.href = "/log";
                }}
              >
                <i className="fa fa-sign-out"></i> Log in
              </Link>
            )}
          </div>

          <div className="toggle">
            <button onClick={() => setNavList(!navList)}>
              {navList ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
