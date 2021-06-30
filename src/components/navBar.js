import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/context";

export default function navBar() {
  const { user, dispatch } = useContext(Context);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div style={{ backgroundColor: "blueviolet" }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Conference
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Research
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="research">
                      Researches
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="create-research">
                      Call for Papers
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Workshop
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/workshop">
                      Workshop
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="create-workshop">
                      Call for Workshops
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            {user ? (
              <li className="nav-item" onClick={logout}>
                {user && "LOGOUT"}
              </li>
            ) : (
              <ul>
                <li className="nav-item">
                  <Link className="link" to="/login">
                    LOGIN
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="link" to="/register">
                    REGISTER
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
